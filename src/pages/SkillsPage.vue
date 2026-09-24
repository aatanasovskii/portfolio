<template>
  <main class="skills-page">
    <h1 class="page-title">Skills</h1>

    <section class="skill-groups">
      <article v-for="group in groups" :key="group.title" class="card">
        <h2 class="card-title">{{ group.title }}</h2>
        <p class="card-note">{{ group.note }}</p>

        <ul v-if="group.items" class="work-list">
          <li v-for="item in group.items" :key="item.title">
            <span class="work-title">{{ item.title }}</span>
            <span class="work-text">{{ item.text }}</span>
          </li>
        </ul>

        <ul v-else class="chips">
          <li v-for="skill in group.skills" :key="skill" class="chip">{{ skill }}</li>
        </ul>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: 'SkillsPage',
  data() {
    return {
      groups: [
        {
          title: 'Core stack',
          note: 'My daily stack on Departmentware',
          skills: ['TypeScript', 'JavaScript', 'Node.js', 'Vue.js', 'GraphQL', 'REST APIs', 'React', 'Python'],
        },
        {
          title: 'Databases',
          note: 'Schema design, queries and SQL optimization',
          skills: ['PostgreSQL', 'SQL', 'MySQL', 'Firebase (NoSQL)'],
        },
        {
          title: 'Cloud & DevOps',
          note: 'Background jobs, file storage and releases, plus an MSc in Cloud Computing',
          skills: ['AWS (S3, SQS, SES)', 'Docker', 'CI/CD', 'Git', 'Lambda', 'IAM', 'CloudTrail', 'Bedrock', 'Linux'],
        },
        {
          title: 'AI & LLMs',
          note: 'A policy knowledge base (RAG), image-similarity search and chat assistants',
          skills: ['OpenAI', 'RAG', 'Embeddings', 'Gemini', 'Amazon Titan', 'Llama', 'LangChain'],
        },
        {
          title: 'Languages',
          note: 'Comfortable working in international teams',
          skills: ['English (C1)', 'Macedonian (native)', 'Serbian/Croatian (fluent)'],
        },
        {
          title: 'How I work',
          note: 'Beyond the stack: how I build, ship and support production software',
          span: 4,
          items: [
            { title: 'End-to-end ownership', text: 'Turn client requirements into technical specs and build them from database to UI.' },
            { title: 'Code quality', text: 'Review pull requests and help onboard new developers to the codebase.' },
            { title: 'Reliable releases', text: 'Handle releases and production issues across 3 products used by 50+ police departments.' },
            { title: 'Secure access', text: 'Work on single sign-on and per-department access control across all products.' },
            { title: 'Practical AI', text: 'Add AI where it solves a real problem, like a policy knowledge base shared across products.' },
            { title: 'Always learning', text: 'Studying for an MSc in Cloud Computing alongside full-time work, with a thesis on AWS cost management.' },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@use "SkillsPage";
</style>
