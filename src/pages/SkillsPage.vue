<template>
  <main class="skills-page">
    <div class="header-container">
      <h1 class="page-title">Technical Skills</h1>
    </div>

    <ul class="content-container">
      <li>Proficient Fullstack Developer, currently working with Javascript, Node.js, Vue.js, Python, SQL.</li>
    </ul>

    <div v-for="skill in skills" class="content-container">
      <skill-bar :skill="skill.skill" :percentage="skill.percentage" />
    </div>

    <div class="header-container">
      <h1 class="page-title">Soft Skills</h1>
    </div>
    <ul class="soft-skills-grid">
      <li>Open-minded.</li>
      <li>Team-player.</li>
      <li>Customer-Oriented.</li>
      <li>Works well under pressure.</li>
      <li>Attention to detail.</li>
      <li>Effective communicator.</li>
      <li>Divergent thinking.</li>
      <li>Time management.</li>
      <li>Continuous learner.</li>
      <li>Self-Driven to take action before being asked.</li>
    </ul>
  </main>
</template>

<script>
import SkillBar from "@/components/SkillBar.vue";

export default {
  name: 'SkillsPage',
  components: {SkillBar},
  data() {
    return {
      skills: [
        {
          skill: "Javascript",
          percentage: 80
        },
        {
          skill: "Node JS",
          percentage: 70
        },
        {
          skill: "Python",
          percentage: 65
        },
        {
          skill: "Vue JS",
          percentage: 80
        },
        {
          skill: "SQL",
          percentage: 80
        },
        {
          skill: "PostgreSQL",
          percentage: 80
        },
        {
          skill: "Firebase",
          percentage: 60
        },
        {
          skill: "RESTful APIs",
          percentage: 75
        },
        {
          skill: "GraphQL",
          percentage: 70
        },
        {
          skill: "AI / ML / Embeddings: OpenAI API / AWS Bedrock / LangChain",
          percentage: 60
        },
        {
          skill: "Git & GitHub/GitLab",
          percentage: 75
        },
        {
          skill: "Microsoft Office",
          percentage: 80
        }
      ],
    }
  }
}
</script>


<style lang='scss'>
@use "SkillsPage";
</style>
