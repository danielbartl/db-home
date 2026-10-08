// Grouped on the home page by `group`; the About page links to them by position, so keep the order.
export default [
  {
    name: "Wicket Oat",
    group: "fullstack4j",
    kicker: "Apache Wicket × Oat",
    url: "https://danielbartl.github.io/wicket-oat/",
    description:
      "A modern, themeable component library for Apache Wicket. Built on the Oat CSS library, it wraps its semantic HTML, CSS and JS in idiomatic Wicket components and behaviors.",
  },
  {
    name: "Wicket Spring Boot Starter",
    group: "fullstack4j",
    kicker: "Apache Wicket × Spring Boot",
    url: "https://danielbartl.github.io/wicket-spring-boot-starter/",
    description:
      "Apache Wicket 10 on Spring Boot 4 with a single dependency: the Wicket filter is auto-registered, @SpringBean injection just works, and configuration lives in application.properties.",
  },
  {
    name: "fullstack4j start",
    group: "fullstack4j",
    kicker: "start.fullstack4j.dev",
    url: "https://start.fullstack4j.dev",
    description:
      "start.spring.io with Apache Wicket. A fork of the Spring Initializr that offers everything upstream does, plus Wicket through the Spring Boot starter, with Maven as the default build.",
  },
  {
    name: "ditto",
    group: "mongodb",
    kicker: "MongoDB × Spring Boot",
    url: "https://danielbartl.github.io/ditto/",
    description:
      "A generic MongoDB collection comparator. After a batch job replaces your data, it compares the new collection with a backup and gives a GREEN, YELLOW or RED verdict on whether the result looks usable.",
  },
  {
    name: "diffsert",
    group: "mongodb",
    kicker: "MongoDB × Spring Data",
    url: "https://danielbartl.github.io/diffsert/",
    description:
      "Change-aware upserts for MongoDB and Spring Data. It writes every document but records only the fields that changed, so change streams and Debezium see small updates, and unchanged documents produce no event at all.",
  },
];
