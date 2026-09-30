// Cloudflare Pages Function: POST /api/contact
// Delivers contact form messages to my Fastmail inbox via JMAP (https://jmap.io).
//
// Environment (Cloudflare Pages → Settings → Variables and secrets):
//   FASTMAIL_API_TOKEN  secret; Fastmail → Settings → Privacy & Security → API tokens,
//                       with access to "Email" and "Email submission"
//   CONTACT_ADDRESS     optional, defaults to hello@danielbartl.com; must be a
//                       sending identity in Fastmail

const SESSION_URL = "https://api.fastmail.com/jmap/session";
const USING = ["urn:ietf:params:jmap:core", "urn:ietf:params:jmap:mail", "urn:ietf:params:jmap:submission"];
const MAX = { name: 200, email: 320, message: 5000 };

export async function onRequestPost({ request, env }) {
  const form = await request.formData();
  const field = (key) => String(form.get(key) ?? "").trim();

  // Bots fill in the hidden "website" field. Pretend success so they move on.
  if (field("website")) return redirect(request, "/contact/thanks/");

  const name = field("name").replace(/\s+/g, " ");
  const email = field("email");
  const message = field("message");
  const valid =
    name && name.length <= MAX.name &&
    email.length <= MAX.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    message && message.length <= MAX.message;
  if (!valid) return redirect(request, "/contact/error/");

  try {
    await send(env, { name, email, message });
    return redirect(request, "/contact/thanks/");
  } catch (err) {
    console.error("Contact form delivery failed:", err);
    return redirect(request, "/contact/error/");
  }
}

const redirect = (request, path) => Response.redirect(new URL(path, request.url).href, 303);

async function send(env, { name, email, message }) {
  const address = env.CONTACT_ADDRESS || "hello@danielbartl.com";
  const auth = { Authorization: `Bearer ${env.FASTMAIL_API_TOKEN}` };

  const session = await fetchJson(SESSION_URL, { headers: auth });
  const accountId = session.primaryAccounts["urn:ietf:params:jmap:submission"];
  const call = async (methodCalls) => {
    const { methodResponses } = await fetchJson(session.apiUrl, {
      method: "POST",
      headers: { ...auth, "Content-Type": "application/json" },
      body: JSON.stringify({ using: USING, methodCalls }),
    });
    const error = methodResponses.find(([method]) => method === "error");
    if (error) throw new Error(`JMAP error: ${JSON.stringify(error[1])}`);
    return Object.fromEntries(methodResponses.map(([, result, id]) => [id, result]));
  };

  const { identities, drafts } = await call([
    ["Identity/get", { accountId }, "identities"],
    ["Mailbox/query", { accountId, filter: { role: "drafts" } }, "drafts"],
  ]);
  const identity = identities.list.find((i) => i.email.toLowerCase() === address.toLowerCase());
  if (!identity) throw new Error(`No Fastmail sending identity for ${address}`);

  // Create the message as a draft, submit it, and delete the draft copy once sent.
  const { submission } = await call([
    ["Email/set", {
      accountId,
      create: {
        message: {
          from: [{ name: "danielbartl.com contact form", email: address }],
          to: [{ email: address }],
          replyTo: [{ name, email }],
          subject: `Contact form: ${name}`,
          keywords: { $draft: true },
          mailboxIds: { [drafts.ids[0]]: true },
          bodyValues: { body: { value: `${message}\n\n— ${name} <${email}>` } },
          textBody: [{ partId: "body", type: "text/plain" }],
        },
      },
    }, "email"],
    ["EmailSubmission/set", {
      accountId,
      create: { send: { emailId: "#message", identityId: identity.id } },
      onSuccessDestroyEmail: ["#send"],
    }, "submission"],
  ]);
  if (!submission.created?.send) throw new Error(`Not sent: ${JSON.stringify(submission.notCreated)}`);
}

async function fetchJson(url, init) {
  const res = await fetch(url, init);
  if (!res.ok) throw new Error(`${init?.method ?? "GET"} ${url}: HTTP ${res.status}`);
  return res.json();
}
