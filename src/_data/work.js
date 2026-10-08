// Text for the "Work with me" page in English (/work-with-me/) and German
// (/de/zusammenarbeit/). Both pages render src/_includes/work-with-me.njk.
export default {
  en: {
    eyebrow: "Work with me",
    otherLanguage: { label: "Deutsch", lang: "de", url: "/de/zusammenarbeit/" },
    headline: "An engineer who has built",
    headlineEmphasis: "the code, the teams and the company",
    lede:
      "For more than 20 years I have built software products with teams in startups, enterprises and the public sector: as developer, architect, analyst, Scrum Master and Product Owner. I also founded and led a consultancy of more than 100 people, built on self-organizing teams without middle management. I bring that experience to every level: your code, your team and your organization.",
    mailSubject: "Project inquiry",
    stats: [
      { value: "20+", label: "years building software on the JVM" },
      { value: "17", label: "years founding and running a Java consultancy that grew to 100+ people" },
      { value: "2,000+", label: "members in the {ljug} I organize", ljugLabel: "Java user group" },
      { value: "{certs}", label: "certifications in Java, Spring, Scrum and product" },
    ],
    servicesTitle: "How I can help",
    services: [
      {
        sticky: "Build",
        title: "Full-stack Java development",
        text: "Hands-on in your team, from the UI down to the database. Server-side rendered web apps with Spring Boot and Apache Wicket, test-driven and continuously delivered.",
      },
      {
        sticky: "Modernize",
        title: "Architecture & legacy migration",
        text: "Replacing host systems and aging monoliths step by step, integrating the new with the old and moving the data along, without a risky big-bang cut-over.",
      },
      {
        sticky: "Coach",
        title: "Agile coaching & product",
        text: "Scrum Master for one or several teams, sparring partner for Product Owners, slicing backlogs into small MVPs and writing requirements teams can test, e.g. with BDD.",
      },
      {
        sticky: "Organize",
        title: "Agile organization & leadership",
        text: "For 17 years I ran a company of 100+ people on self-organizing teams (cells) without middle management, with labs for self-chosen topics and heavy investment in T-shaped skills. I help founders and CTOs build an organization where agile teams thrive.",
      },
    ],
    tagsLabel: "Technologies and methods",
    engagementsTitle: "Selected engagements",
    engagements: [
      {
        meta: "Public sector · Munich",
        role: "Full-stack developer",
        text: "Digitizing how public funding programs are applied for, processed and paid out. Eight developers working cross-functionally in vertical slices; Wicket 10 and Spring Boot 3, released to production every two weeks.",
      },
      {
        meta: "Online bank · Nuremberg",
        role: "Agile analyst",
        text: "On site with the client as the bridge to a development team in Zagreb. Analyzed a monolithic portal for its move to microservices and wrote BDD specifications with Gherkin and Cucumber.",
      },
      {
        meta: "Online portal · Munich",
        role: "Software architect & Scrum Master",
        text: "Moved a 10-year-old platform and all its data to a new system, incrementally. Sliced the backlog into MVPs with the Product Owner, then coached up to two product teams.",
      },
      {
        meta: "Life insurer · Munich",
        role: "Software architect & developer",
        text: "Replaced a host-based broker management system with a modern web application, built test-first with Wicket, Spring and Hibernate, and set up continuous delivery and Kanban.",
      },
    ],
    certsTitle: "Certifications",
    certsAlso: "Also",
    languages: "Languages: German, English and Bosnian/Croatian/Serbian, all fluent.",
    ctaTitle: "Let’s talk about your product.",
    ctaText:
      "Tell me a bit about your team, what you are building and where you need a hand. I am happy to have a first, no-strings conversation.",
  },

  de: {
    eyebrow: "Zusammenarbeit",
    location: "München",
    otherLanguage: { label: "English", lang: "en", url: "/work-with-me/" },
    headline: "Ich habe Code geschrieben, Teams begleitet",
    headlineEmphasis: "und ein Unternehmen aufgebaut",
    lede:
      "Seit über 20 Jahren entwickle ich Softwareprodukte gemeinsam mit Teams in Startups, Konzernen und der öffentlichen Verwaltung: als Entwickler, Architekt, Analyst, Scrum Master und Product Owner. Außerdem habe ich ein Beratungsunternehmen mit über 100 Mitarbeitenden gegründet und geführt, aufgebaut auf selbstorganisierten Teams ohne mittleres Management. Diese Erfahrung bringe ich auf jeder Ebene ein: in Ihren Code, Ihr Team und Ihre Organisation.",
    mailSubject: "Projektanfrage",
    stats: [
      { value: "20+", label: "Jahre Softwareentwicklung auf der JVM" },
      { value: "17", label: "Jahre als Gründer und Geschäftsführer eines Java-Beratungsunternehmens mit zuletzt über 100 Mitarbeitenden" },
      { value: "2.000+", label: "Mitglieder in der {ljug}, die ich organisiere", ljugLabel: "Java User Group" },
      { value: "{certs}", label: "Zertifizierungen in Java, Spring, Scrum und Produktmanagement" },
    ],
    servicesTitle: "Wie ich helfen kann",
    services: [
      {
        sticky: "Entwickeln",
        title: "Full-Stack-Entwicklung mit Java",
        text: "Mitten in Ihrem Team, von der Oberfläche bis zur Datenbank. Serverseitig gerenderte Webanwendungen mit Spring Boot und Apache Wicket, testgetrieben und kontinuierlich ausgeliefert.",
      },
      {
        sticky: "Modernisieren",
        title: "Architektur & Ablösung von Altsystemen",
        text: "Host-Systeme und gewachsene Monolithen Schritt für Schritt ablösen, Neues sauber an Bestehendes anbinden und die Daten mitnehmen, ohne riskanten Big Bang.",
      },
      {
        sticky: "Coachen",
        title: "Agile Coaching & Produktentwicklung",
        text: "Scrum Master für ein oder mehrere Teams, Sparringspartner für Product Owner, Backlogs in kleine MVPs schneiden und Anforderungen so formulieren, dass Teams sie testen können, z. B. mit BDD.",
      },
      {
        sticky: "Organisieren",
        title: "Agile Organisation & Führung",
        text: "17 Jahre lang habe ich ein Unternehmen mit über 100 Mitarbeitenden geführt: selbstorganisierte Teams (Zellen) ohne mittleres Management, Labs für selbstgewählte Themen und konsequente Investition in T-shaped Skills. Ich unterstütze Geschäftsführung und CTOs dabei, eine Organisation aufzubauen, in der agile Teams aufblühen.",
      },
    ],
    tagsLabel: "Technologien und Methoden",
    engagementsTitle: "Ausgewählte Projekte",
    engagements: [
      {
        meta: "Öffentlicher Auftraggeber · München",
        role: "Full-Stack-Entwickler",
        text: "Digitalisierung von Antrag, Bearbeitung und Abrechnung öffentlicher Förderprogramme. Acht Entwickler arbeiten cross-funktional in vertikalen Schnitten; Wicket 10 und Spring Boot 3, Release in Produktion alle zwei Wochen.",
      },
      {
        meta: "Onlinebank · Nürnberg",
        role: "Agile Analyst",
        text: "Vor Ort beim Kunden als Brückenkopf zum Entwicklungsteam in Zagreb. Analyse eines monolithischen Portals für die Migration zu Microservices, Anforderungen als BDD-Spezifikationen mit Gherkin und Cucumber.",
      },
      {
        meta: "Online-Portal · München",
        role: "Software-Architekt & Scrum Master",
        text: "Schrittweise Migration einer über zehn Jahre alten Plattform samt aller Daten in ein neues System. Mit dem Product Owner das Backlog in MVPs geschnitten, danach bis zu zwei Produktteams gecoacht.",
      },
      {
        meta: "Lebensversicherung · München",
        role: "Software-Architekt & Entwickler",
        text: "Ablösung einer hostbasierten Vermittlerverwaltung durch eine moderne Webanwendung, testgetrieben entwickelt mit Wicket, Spring und Hibernate; Aufbau von Continuous Delivery und Einführung von Kanban.",
      },
    ],
    certsTitle: "Zertifizierungen",
    certsAlso: "Außerdem",
    languages: "Sprachen: Deutsch, Englisch und Bosnisch/Kroatisch/Serbisch, jeweils fließend.",
    ctaTitle: "Lassen Sie uns über Ihr Produkt sprechen.",
    ctaText:
      "Erzählen Sie mir kurz von Ihrem Team, woran Sie arbeiten und wo Sie Unterstützung brauchen. Ich freue mich auf ein erstes, unverbindliches Gespräch.",
  },

  // Shared by both languages
  tags: ["Java", "Spring Boot", "Spring Framework", "Apache Wicket", "Hibernate / JPA", "Spring Data", "MongoDB", "SQL", "Gradle", "Maven", "JUnit", "Mockito", "Git", "CI/CD", "TDD", "BDD / Gherkin", "Scrum", "Kanban", "LeSS", "Lean Startup", "Agile Kata"],
  testimonial: {
    lang: "en",
    text: "Daniel made an enormous personal contribution to the development of the o2 web portal. He was a key player in the introduction of the agile development methodology and influenced technology choices.",
    source: "Technical Project Manager, Telefónica Germany",
  },
};
