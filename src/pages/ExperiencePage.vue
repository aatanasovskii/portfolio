<template>
  <main class="experience-page">
    <h1 class="page-title">Experience</h1>

    <h2 class="section-label">Work</h2>
    <ol class="timeline">
      <li
        v-for="role in roles"
        :key="role.title + role.period"
        class="entry"
        :class="{ 'entry--current': role.current }"
      >
        <article class="card" :class="{ 'card--compact': role.compact }">
          <div class="card-head">
            <div>
              <h3 class="role-title">{{ role.title }}</h3>
              <p class="role-company">{{ role.company }} · {{ role.location }}</p>
            </div>
            <span class="period">
              {{ role.period }}
              <span v-if="role.current" class="badge">Current</span>
              <span v-if="role.tag" class="badge badge--muted">{{ role.tag }}</span>
            </span>
          </div>

          <p v-if="role.summary" class="role-summary">{{ role.summary }}</p>

          <template v-if="role.products">
            <span class="products-label">{{ role.productsLabel }}</span>
            <div class="products">
              <div v-for="product in role.products" :key="product.name" class="product">
                <span class="product-name">{{ product.name }}</span>
                <span class="product-text">{{ product.text }}</span>
              </div>
            </div>
          </template>

          <ul class="highlights">
            <li v-for="item in role.highlights" :key="item">{{ item }}</li>
          </ul>

          <ul v-if="role.tech" class="chips">
            <li v-for="tech in role.tech" :key="tech" class="chip">{{ tech }}</li>
          </ul>
        </article>
      </li>
    </ol>

    <h2 class="section-label">Education</h2>
    <div class="education">
      <article v-for="item in education" :key="item.title" class="card">
        <span class="period">{{ item.period }}</span>
        <h3 class="edu-title">{{ item.title }}</h3>
        <p class="role-company">{{ item.place }}</p>
        <p class="edu-note">{{ item.note }}</p>
      </article>
    </div>

    <div class="cv-cta">
      <a class="cv-button" :href="cvUrl" target="_blank" rel="noopener">Download full CV</a>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ExperiencePage',
  data() {
    return {
      cvUrl: `${import.meta.env.BASE_URL}Andrej-Atanasovski-CV.pdf?v=2026-09`,
      roles: [
        {
          period: 'Feb 2023 – Present',
          current: true,
          title: 'Software Engineer',
          company: 'Vitech',
          location: 'Skopje',
          summary: 'Full-stack engineer on Departmentware, a SaaS platform used by 50+ police departments across the US. Before that, I built full-stack applications for Vitech’s clients.',
          productsLabel: 'Departmentware · since 2025',
          products: [
            { name: 'Policy Management', text: 'Assigning policies to officers, with digital sign-off.' },
            { name: 'Intel Forms', text: 'A configurable form builder that lets agencies design their own forms without developer help.' },
            { name: 'Hub', text: 'Single sign-on across all apps, with access based on the products each department has purchased.' },
          ],
          highlights: [
            'Built an AI knowledge base over all agency policies (RAG), shared across products so users can ask policy questions from any app.',
            'Review pull requests, onboard new developers, and handle releases (Docker, CI/CD) and production issues.',
            'Built background processing on AWS with SQS queues, S3 file storage and SES email notifications.',
            'Delivered 10+ full-stack applications for internal and external clients, including image-similarity search and chat assistants.',
          ],
          tech: ['TypeScript', 'Node.js', 'GraphQL', 'Vue.js', 'PostgreSQL', 'AWS', 'Docker', 'OpenAI'],
        },
        {
          period: 'Oct 2022 – Sep 2024',
          tag: 'Part-time',
          compact: true,
          title: 'Data Research Analyst (contract)',
          company: 'Veeva Systems',
          location: 'Remote',
          highlights: [
            'Researched, cleaned and structured healthcare event data for Veeva’s databases.',
          ],
        },
        {
          period: 'Jun 2022 – Dec 2022',
          title: 'BSS Operations Specialist',
          company: 'A1 Macedonia',
          location: 'Skopje',
          highlights: [
            'Monitored the availability and performance of production databases supporting A1’s business support systems (BSS).',
            'Troubleshot and optimized SQL queries.',
          ],
          tech: ['SQL', 'Production databases', 'Monitoring'],
        },
        {
          period: 'Feb 2022 – Jun 2022',
          title: 'Data Analyst Intern',
          company: 'A1 Macedonia',
          location: 'Skopje',
          highlights: [
            'Built machine-learning models for sales improvement and fraud detection.',
            'Analyzed marketing campaign data and results.',
          ],
          tech: ['Python', 'Machine learning', 'Data analysis'],
        },
      ],
      education: [
        {
          period: '2025 – Present',
          title: 'MSc Computer Science (Cloud Computing)',
          place: 'UKIM, FINKI',
          note: 'Thesis: an AWS cost management system that uses RAG over CloudTrail, with human approval before any action.',
        },
        {
          period: '2018 – 2022',
          title: 'BSc Computer Systems Engineering, Automation and Robotics',
          place: 'UKIM, FEIT',
          note: 'Thesis: sales forecasting with XGBoost and a stacked SARIMAX + OLS model.',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@use "ExperiencePage";
</style>
