// Text for the fullstack4j offering, shown on the home page (English) and on the
// "Work with me" pages (English and German). Both render src/_includes/fullstack4j.njk.
export default {
  // Sticky notes under the pitch; "method" ones are green, the others blue
  stack: [
    { label: "Spring Boot" },
    { label: "Apache Wicket" },
    { label: "Spring Modulith" },
    { label: "MongoDB" },
    { label: "Shape Up", method: true },
  ],

  en: {
    heading: "New: fullstack4j",
    kicker: "With the allwerker cooperative",
    title: "Whole features with a team of three.",
    text:
      "Most business software doesn’t need a frontend team, a backend team and an API between them. With plain Java from the database to the button, two or three people can own every feature end to end, and AI agents take the routine work off their hands. Together with my colleagues at allwerker, I set up, staff and coach such teams, working in Shape Up-style cycles.",
    visit: "Visit fullstack4j.dev",
    why: "Why full-stack? Read the note",
    sliceCaption: "One slice, one owner: from the button to the database.",
    sliceAlt: "One slice in Event Modeling notation: on the Open orders screen, the Ship button sends the command ShipOrder, which records the event OrderShipped. The next slice turns that event into the view OrdersToBill for the Billing screen.",
    stepsLabel: "How an engagement runs",
    steps: [
      {
        meta: "1–2 days",
        title: "Fit check",
        text: "A workshop on your product and team: we cut the domain into slices, shape the first pitch and give you an honest go or no-go.",
      },
      {
        meta: "Up to 6 weeks",
        title: "First cycle",
        text: "Repository, modules, architecture tests, CI and hosting, and the first shaped project in production within its appetite.",
      },
      {
        meta: "Ongoing",
        title: "Run & coach",
        text: "As pairing and mob partners, or as the team itself: shaping, betting, building, cool-down. You decide how far we step back.",
      },
    ],
  },

  de: {
    heading: "Neu: fullstack4j",
    kicker: "Mit der Genossenschaft allwerker",
    title: "Ganze Features mit einem Team aus drei Leuten.",
    text:
      "Die meisten Geschäftsanwendungen brauchen kein Frontend-Team, kein Backend-Team und keine API dazwischen. Mit purem Java von der Datenbank bis zum Button verantworten zwei oder drei Leute jedes Feature von Anfang bis Ende, und KI-Agenten nehmen ihnen die Routinearbeit ab. Gemeinsam mit meinen Kolleginnen und Kollegen bei allwerker stelle ich solche Teams auf, besetze und begleite sie, in Zyklen nach dem Vorbild von Shape Up.",
    visit: "fullstack4j.dev besuchen",
    why: "Die Idee dahinter (engl.)",
    sliceCaption: "Ein Slice, eine Person: vom Button bis zur Datenbank.",
    sliceAlt: "Ein Slice in Event-Modeling-Notation: Auf dem Bildschirm Open orders schickt der Button Ship das Kommando ShipOrder, das das Ereignis OrderShipped festhält. Der nächste Slice macht daraus die Ansicht OrdersToBill für den Bildschirm Billing.",
    stepsLabel: "So läuft eine Zusammenarbeit ab",
    steps: [
      {
        meta: "1–2 Tage",
        title: "Fit-Check",
        text: "Ein Workshop zu Ihrem Produkt und Team: Wir schneiden die Domäne in Slices, formen den ersten Pitch und geben Ihnen eine ehrliche Empfehlung.",
      },
      {
        meta: "Bis zu 6 Wochen",
        title: "Erster Zyklus",
        text: "Repository, Module, Architekturtests, CI und Hosting, und das erste geformte Projekt innerhalb seines Zeitbudgets in Produktion.",
      },
      {
        meta: "Laufend",
        title: "Begleiten & coachen",
        text: "Als Pairing- und Mob-Partner oder als Team selbst: Shaping, Betting, Bauen, Cool-down. Sie entscheiden, wie weit wir uns zurückziehen.",
      },
    ],
  },
};
