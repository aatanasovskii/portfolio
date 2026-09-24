<template>
  <main class="about-page">
    <h1 class="page-title">About Me</h1>

    <section class="about-grid">
      <article class="card story span-2">
        <span class="card-label">My story</span>
        <h2 class="card-title">Building software</h2>
        <p>
          I'm a full-stack software engineer from Skopje. I studied Computer Systems Engineering, Automation and
          Robotics at FEIT, started out in data and databases at A1 Macedonia, and moved into full-stack development
          at Vitech in 2023.
        </p>
        <p>
          Today I work on Departmentware, a platform used by 50+ police departments across the US. I build its policy
          management software, a configurable form builder and the single sign-on hub that connects every app, and I
          add AI where it really helps, like a knowledge base over agency policies.
        </p>
        <p>
          What I enjoy most is turning messy, paper-based processes into simple software, and seeing a feature go
          from a client requirement to something people use every day. Alongside work, I'm finishing an MSc in Cloud
          Computing.
        </p>
      </article>

      <aside class="card">
        <span class="card-label">Quick facts</span>
        <dl class="facts">
          <div v-for="fact in facts" :key="fact.label">
            <dt>{{ fact.label }}</dt>
            <dd>{{ fact.value }}</dd>
          </div>
        </dl>
        <div class="contact-links">
          <a v-for="link in links" :key="link.label" class="link-pill" :href="link.href" target="_blank" rel="noopener noreferrer">
            {{ link.label }}
          </a>
        </div>
      </aside>

      <article class="card span-2">
        <span class="card-label">Outside of work</span>
        <h2 class="card-title">I train every day</h2>
        <p class="card-note">
          Something different most days. When I'm not training, I'm usually reading about tech and entrepreneurship,
          or out with friends.
        </p>
        <ul class="chips">
          <li v-for="sport in sports" :key="sport" class="chip">{{ sport }}</li>
        </ul>
      </article>

      <article class="card">
        <span class="card-label">Right now</span>
        <ul class="now-list">
          <li v-for="item in now" :key="item.title">
            <span class="now-title">{{ item.title }}</span>
            <span class="now-text">{{ item.text }}</span>
          </li>
        </ul>
      </article>

      <article class="card card--cta span-3">
        <div>
          <h2 class="card-title">Let's talk</h2>
          <p>The fastest way to reach me is email, or connect with me on LinkedIn.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn--primary" href="mailto:andrej.atanasovski.00@gmail.com">Email me</a>
          <a class="btn" :href="cvUrl" target="_blank" rel="noopener">Download CV</a>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      cvUrl: `${import.meta.env.BASE_URL}Andrej-Atanasovski-CV.pdf?v=2026-09`,
      facts: [
        { label: 'Based in', value: 'Skopje, North Macedonia (CET)' },
        { label: 'Role', value: 'Software Engineer @ Vitech' },
        { label: 'Experience', value: '4+ years in tech' },
        { label: 'Studying', value: 'MSc Cloud Computing, UKIM' },
        { label: 'Languages', value: 'English (C1), Macedonian, Serbian/Croatian' },
      ],
      links: [
        { label: 'Email', href: 'mailto:andrej.atanasovski.00@gmail.com' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrej-atanasovski-a2000/' },
        { label: 'GitHub', href: 'https://github.com/aatanasovskii' },
      ],
      sports: ['Basketball', 'Gym', 'Running', 'Swimming', 'Hiking', 'Skiing', 'Football'],
      now: [
        { title: 'Working on', text: 'Policy management, forms and SSO at Departmentware' },
        { title: 'Building', text: 'My MSc thesis: an AWS cost tool with RAG over CloudTrail' },
        { title: 'Reading', text: 'About tech innovation and entrepreneurship' },
      ],
    };
  },
};
</script>

<style lang="scss">
@use "AboutPage";
</style>
