<script setup>
import faDownload from '@/components/icon/faDownload.vue';
</script>

<template>
  <div class="container">
    <h1>Work Experience</h1>
    <br />

    <a class="tag" href="/KEITH_WONG_JUN_HSIEN_Resume.pdf" target="_blank" draggable="false">
      <i draggable="false">
        <faDownload class="icon" />
      </i>
      <span>Download Resume</span>
    </a>

    <br />

    <div>
      <h2>The Software Practice (Sep 2022 - Jan 2025)</h2>
      <p>Role: Software Developer (Backend)</p>
      <p>Duration: 2 years 5 months</p>
      <p>Languages & Frameworks:</p>
      <ul>
        <li>C# (ASP.NET 6)</li>
        <li>HTML, CSS, Javascript</li>
        <li>SQL Server</li>
      </ul>
      <p>Deployment Technologies:</p>
      <ul>
        <li>IIS</li>
        <li>AWS</li>
        <li>Azure</li>
        <li>GitLab</li>
      </ul>
      <div>
        <p>Fixed an average of 15+ production issues per week, with short turn around times. Worked on 2 government
          projects. Fulfilled compliance requirements. Developed new enhancements. Created and instilled a culture of
          documentation within the team. I also optimized long running queries by resolving common pitfalls and using
          indexing strategies like clustered and non-clustered indexes.
        </p>
      </div>
    </div>

    <br />

    <div>
      <h2>Hyperganic Group GmbH (Mar 2021 - Sep 2022)</h2>
      <p>Role: Platform Lead (Software Developer)</p>
      <p>Duration: 1 year 8 months</p>
      <p>Languages & Frameworks:</p>
      <ul>
        <li>C# (.Net Core)</li>
        <li>Ruby on Rails</li>
        <li>HTML, CSS, Javascript</li>
        <li>PostgreSql</li>
      </ul>
      <p>Deployment Technologies:</p>
      <ul>
        <li>AWS - Cloudfront, EC2, Route53, IAM</li>
        <li>Jenkins</li>
        <li>Docker</li>
        <li>Heroku</li>
        <li>Wordpress</li>
      </ul>
      <div>
        <p>Led a team of 7 in development and deployment of the following products:
          a licensing system and knowledge base (Ruby on Rails), an application distribution system (Ruby on Rails +
          GitLab), a desktop launcher app (C# .NET Core), forum to engage with the community (Discourse, self-hosted on
          Digital Ocean) and a GitLab repository (self-hosted on Digital Ocean).
          I also integrated the different solutions together with <a href="https://github.com/saml-idp/saml_idp"
            target="_blank">Single-Sign-On</a>.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tag {
  width: 200px;
  padding: 4px 12px;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.09);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.3px);
  -webkit-backdrop-filter: blur(5.3px);
  font-size: 14px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  place-items: center;
  justify-content: center;
  cursor: pointer;
}

.tag:hover {
  color: var(--default-highlight);
  /* From https://css.glass */
  background: rgba(204, 153, 0, 0.31);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.8px);
  -webkit-backdrop-filter: blur(4.8px);
}

.tag>img {
  height: 16px;
  width: 16px;
}

.icon {
  height: 12px;
  width: 12px;
}
</style>