<template>
  <main class="projects-page">
    <h1 class="page-title">Projects</h1>
    <p class="projects-intro">Production work, theses and side projects, most relevant first.</p>

    <h2 class="section-label">Featured</h2>
    <section class="featured">
      <article v-for="project in featured" :key="project.title" class="project">
        <div v-if="project.image" class="cover">
          <img :src="getImage(project.image)" :alt="`Screenshot of ${project.title}`" loading="lazy" />
        </div>
        <div v-else class="cover cover--placeholder">
          <span class="cover-text">{{ project.coverText }}</span>
        </div>

        <div class="body">
          <span class="label">{{ project.label }}</span>
          <h3 class="title">{{ project.title }}</h3>
          <p class="description">{{ project.description }}</p>
          <p v-if="project.role" class="role">{{ project.role }}</p>

          <ul v-if="project.tech" class="chips">
            <li v-for="tech in project.tech" :key="tech" class="chip">{{ tech }}</li>
          </ul>

          <div v-if="project.links.length" class="links">
            <a
              v-for="link in project.links"
              :key="link.href"
              class="link-pill"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ link.label }} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </article>
    </section>

    <h2 class="section-label">Earlier learning projects</h2>
    <ul class="earlier">
      <li v-for="project in earlier" :key="project.title">
        <a class="earlier-item" :href="project.href" target="_blank" rel="noopener noreferrer">
          <span>
            <span class="earlier-title">{{ project.title }}</span>
            <span class="earlier-tech">{{ project.tech }}</span>
          </span>
          <span class="earlier-arrow" aria-hidden="true">↗</span>
        </a>
      </li>
    </ul>

    <div class="github-cta">
      <a href="https://github.com/aatanasovskii" target="_blank" rel="noopener noreferrer">See everything on GitHub →</a>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ProjectsPage',
  data() {
    return {
      featured: [
        {
          title: 'Departmentware',
          label: 'Professional work · Vitech',
          image: 'Departmentware.webp',
          description: 'A SaaS platform used by 50+ police departments across the US, replacing paper-based work in officer training, equipment tracking, digital forms and policies.',
          role: 'I develop 3 of its products: Policy Management, Intel Forms (a configurable form builder) and the Hub with single sign-on, plus an AI knowledge base over all agency policies.',
          tech: ['TypeScript', 'Node.js', 'GraphQL', 'Vue.js', 'PostgreSQL', 'AWS', 'Docker'],
          links: [{ label: 'Visit site', href: 'https://departmentware.com/' }],
        },
        {
          title: 'AWS Cost Management System',
          label: 'MSc thesis · In progress',
          coverText: 'AWS · CloudTrail · RAG · Lambda',
          description: 'Forecasts AWS spend, flags idle resources and uses RAG over CloudTrail to explain who created each resource and whether it’s safe to stop. An operator approves every action, run by a Lambda that can only touch tagged resources.',
          tech: ['AWS Lambda', 'CloudTrail', 'IAM', 'RAG', 'LLMs'],
          links: [],
        },
        {
          title: 'Data Warehouse CRM',
          label: 'Client project',
          image: 'Tentastique.webp',
          description: 'An e-commerce CRM with a warehouse system for managing products, deals, offers and invoices, with built-in meeting scheduling.',
          tech: ['Vue.js', 'Node.js', 'MySQL'],
          links: [],
        },
        {
          title: 'Sales Prediction with Machine Learning',
          label: 'BSc thesis',
          image: 'ML_Predicting_Sales.webp',
          description: 'Sales forecasting with XGBoost and a stacked SARIMAX + OLS model.',
          tech: ['Python', 'XGBoost', 'Time series'],
          links: [{ label: 'GitHub', href: 'https://github.com/aatanasovskii/Machine-Learning---Sales-Prediction' }],
        },
        {
          title: 'AI Assistants with RAG',
          label: 'Work & personal',
          image: 'News_Summarizer.webp',
          description: 'Assistants and LLM integrations built with the OpenAI, Llama and Amazon Titan APIs, including a news assistant that returns cited articles for any topic and a personalized travel planner.',
          tech: ['Python', 'Streamlit', 'OpenAI', 'RAG', 'Embeddings'],
          links: [
            { label: 'News assistant', href: 'https://github.com/aatanasovskii/newsletter-openAI-assistant' },
            { label: 'Travel planner', href: 'https://github.com/aatanasovskii/AI-personalized-travel-planner' },
          ],
        },
        {
          title: 'Fantasy Football Platform',
          label: 'Live product',
          image: 'Fantopy.webp',
          description: 'Worldwide rankings, multiple leagues and budget-based team selection, with points calculated every matchweek.',
          links: [{ label: 'Visit site', href: 'https://th.fantopy.com' }],
        },
      ],
      earlier: [
        { title: 'Netflix Clone', tech: 'JavaScript · TMDB API', href: 'https://github.com/aatanasovskii/Netflix_Clone-project' },
        { title: 'React Meetups', tech: 'React · Firebase', href: 'https://github.com/aatanasovskii/meetups-react-app' },
        { title: 'Movie Playlist', tech: 'React · OMDb API', href: 'https://github.com/aatanasovskii/REACT_MoviePlaylist-' },
        { title: 'Vue Shopping App', tech: 'Vue.js', href: 'https://github.com/aatanasovskii/shopping-app-vuejs' },
        { title: 'Weather App', tech: 'JavaScript · Yahoo Weather API', href: 'https://github.com/aatanasovskii/Weather-App' },
      ],
    };
  },
  methods: {
    getImage(imageName) {
      return new URL(`../assets/images/${imageName}`, import.meta.url).href;
    },
  },
};
</script>

<style lang="scss">
@use "ProjectsPage";
</style>
