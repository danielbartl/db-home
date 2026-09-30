---
layout: layouts/base.njk
title: About me
ogKicker: About me
ogTitle: "Hi, I’m Daniel. Software engineer and agile practitioner in Munich."
description: Born in Sarajevo, based in Munich. Software engineer, agile practitioner and member of the allwerker cooperative.
permalink: /about/
---
<div class="wrap about">
<header class="about-header">
  <picture>
    <source srcset="/assets/img/daniel.webp" type="image/webp">
    <img src="/assets/img/daniel.jpg" alt="Portrait of Daniel Bartl" width="720" height="900">
  </picture>
  <div>
    <p class="eyebrow"><span class="dot" aria-hidden="true"></span> About me</p>
    <h1>Hi, I’m Daniel.</h1>
    <p class="lede">Software engineer and agile practitioner. Born in Sarajevo, at home in Munich.</p>
    <div class="actions">
      <a class="button primary" href="mailto:{{ site.email }}">Email me</a>
      <a class="button" href="{{ site.linkedin }}" rel="me">LinkedIn</a>
      <a class="button" href="{{ site.github }}" rel="me">GitHub</a>
    </div>
  </div>
</header>

<div class="prose">

I was born in Sarajevo in 1975 in a kingdom far, far away. Actually, in a country that does not exist anymore. Growing up during the last decade of socialist Yugoslavia was what I would call a happy childhood today. Considering what followed in the Balkans in the last decade of the previous century, it was a rather pleasant and liberal environment filled with sports, rock music, and friendship without nationalism and ethnic and religious hatred. I am describing here my own perspective and personal experience of the time, not trying to give any objective historical qualifications of that era.

Today, Sarajevo is the capital of Bosnia and Herzegovina, a small heart-shaped country in the middle of Europe's continent that is still trying to heal its wounds caused by a genocidal, bloodthirsty aggression on its territory, multi-ethnic and multi-religious society, and genuinely friendly and funny people.

Seeking refuge during the war years, I was fortunate enough to spend two years on the Croatian coast and finish high school, thanks to the support of my family there. Later, I was even more fortunate to continue my studies at the Ludwig-Maximilian-University in Munich, where I graduated in business and computer science in the early 2000s. I have stayed in Munich and enjoyed living in this fantastic city and cozy Bavarian culture ever since.

In 2004, I started a technology consulting company, mainly focusing on building digital products with the Java ecosystem, especially the Spring framework, and many other great open-source libraries and frameworks we used over the years. Over time, the company grew to more than 100 employees. I left it at the end of 2021 after its acquisition had been finalized. After relaxing and taking a longer break from being managing director of my own company for almost two decades, I dedicated my time to exploring software product development and agility again, the topics that I am still most passionate about.

Since the beginning of 2024, I have been working as an independent agile practitioner and software engineer again and as a proud member of the [allwerker cooperative]({{ site.allwerker }}), which is quite an interesting joint effort of a few of my friends and former colleagues.

Since 2010, I have also been organizing the [Lightweight Java User Group]({{ site.ljug }}) in Munich.

These days, I am mostly building open-source tooling for full-stack Java applications with server-side rendered UIs in Apache Wicket: [Wicket Oat]({{ projects[0].url }}), a themeable component library based on the [Oat](https://oat.ink/) CSS library, and the [Wicket Spring Boot Starter]({{ projects[1].url }}), which brings Wicket 10 to Spring Boot 4 with a single dependency.

You can reach me at [{{ site.email }}](mailto:{{ site.email }}), on [LinkedIn]({{ site.linkedin }}) and on [X]({{ site.x }}). My open-source work is on [GitHub]({{ site.github }}).

Have a good one!

</div>
</div>
