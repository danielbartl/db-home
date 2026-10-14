---
title: "What's new in fullstack4j"
date: 2026-10-14
permalink: /whats-new-in-fullstack4j/
---

A week ago I [introduced fullstack4j](/fullstack4j/). Since then, every one of its pieces has moved forward, and a new one has joined them.

**The architecture on [fullstack4j.dev]({{ site.fullstack4j }})** got sharper. Every slice now carries its own spec in its `package-info.java`: what it promises, as numbered requirements, and every requirement has a test that names its id. The build fails when a requirement has no test, or when a test points to a requirement that no longer exists. Inside a slice we follow Spring Modulith's default layout: the spec, the page and the events sit in the slice's base package, everything else in `internal`, and the build also fails when one slice reaches into another's internals. Slices react to each other's events wherever they can. When one really has to ask another something, it calls an interface in that slice's base package.

**[Wicket Oat]({{ projects[0].url }})** went through two releases, 0.2.0 and 0.3.0, and now covers what business applications need: data tables with Ajax sorting and paging, row actions and bulk actions, dialogs, wizards, autocomplete and date range fields, trees, charts, master-detail and split layouts, a login form, Business themes with a compact density, a mobile layout with a bottom tab bar, and texts in seven languages. 0.3.0 also renames hooks and callbacks to the names Wicket users expect. You can try all of it in the [live demo](https://wicket-oat-production.up.railway.app/).

**The [Wicket Spring Boot Starter]({{ projects[1].url }})** 0.2.0 comes with a test starter. Add `wicket-spring-boot-starter-test`, and a page test is this short:

```java
@WicketTest
class HomePageTest {

    @Test
    void greetsTheVisitor(WicketTester tester) {
        tester.startPage(HomePage.class);

        tester.assertLabel("message", "Hello from Spring, Wicket!");
    }
}
```

`@WicketTest` starts your application without a servlet container and hands every test its own `WicketTester`, running a new instance of your `WebApplication` with `@SpringBean` injection.

**[fullstack4j start]({{ projects[2].url }})** is up to date with start.spring.io again, and every Wicket project it generates now gets the starter 0.2.0 together with its test starter, so the first page test compiles without touching the build.

**New: the [fullstack4j skill](https://github.com/danielbartl/fullstack4j-skill).** It teaches an AI coding agent, such as Claude Code, to build the fullstack4j way. `/fullstack4j new` asks you about a feature until the rules are clear and writes the slice's spec, without any code yet. `/fullstack4j apply` writes a test for every requirement, then the code, and runs the build until it is green. To test the skill, I gave it to a fresh agent with nothing but a generated project and the request "a small app for booking meeting rooms". It came back with two slices, 26 requirements and 39 green tests. The skill is open source under the MIT license.

If you want to see how this could work for your team, [let's talk](mailto:{{ site.email }}?subject=fullstack4j).
