const toggle = document.querySelector(".theme-toggle");
const media = window.matchMedia("(prefers-color-scheme: dark)");

const current = () =>
  document.documentElement.dataset.theme || (media.matches ? "dark" : "light");

toggle?.addEventListener("click", () => {
  const next = current() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
});
