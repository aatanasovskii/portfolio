<template>
  <main class="home-page">
    <header class="hero">
      <div class="hero-text">
        <h1 class="hero-title">Hi, I'm Andrej</h1>
        <p class="hero-subtitle">Full-Stack Software Engineer</p>
        <p class="hero-location">Skopje, North Macedonia</p>
      </div>
      <div class="hero-media">
        <img
          class="hero-portrait"
          src="../assets/images/andrej_bachelor_feit.jpeg"
          alt="Portrait of Andrej Atanasovski"
          width="200"
          height="200"
        >
        <a class="cv-button" :href="cvUrl" target="_blank" rel="noopener">Download My CV</a>
      </div>
    </header>

    <section class="summary" aria-label="Summary">
      <ul class="highlights">
        <li>
          <strong>Software engineer with 4+ years in tech</strong>, building production SaaS with Node.js, Vue.js,
          PostgreSQL and AWS.
        </li>
        <li>
          I currently work on
          <a href="https://departmentware.com" target="_blank" rel="noopener noreferrer"><strong>Departmentware</strong></a>,
          a platform used by 50+ police departments across the US, building its policy management software,
          a configurable form builder, and the single sign-on hub that connects every app.
        </li>
        <li>
          <strong>AI in production:</strong> I build LLM features where they help users, like a knowledge base over
          agency policies (RAG) shared across products, image-similarity search and chat assistants with OpenAI,
          Gemini and Amazon Titan.
        </li>
        <li>
          <strong>Education:</strong> finishing an MSc in Cloud Computing at UKIM (FINKI), with a thesis on
          AI-assisted AWS cost management. BSc in Computer Systems Engineering, Automation and Robotics (UKIM, FEIT).
        </li>
      </ul>

      <ul class="tech-list" aria-label="Main technologies">
        <li v-for="tech in techStack" :key="tech">{{ tech }}</li>
      </ul>

      <router-link class="projects-link" :to="{ name: 'ProjectsPage' }">See my projects →</router-link>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      cvUrl: `${import.meta.env.BASE_URL}Andrej-Atanasovski-CV.pdf`,
      techStack: ['TypeScript', 'Node.js', 'Vue.js', 'GraphQL', 'PostgreSQL', 'AWS', 'Docker'],
    };
  },
};
</script>

<style lang="scss">
@use "HomePage";
</style>
