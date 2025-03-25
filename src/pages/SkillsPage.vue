<template>
  <main class="skills-page">
    <div class="header-container">
      <h1 class="page-title">Technical Skills</h1>
    </div>

    <ul class="content-container">
      <li>Proficient in Javascript, Node.js, Vue.js, Python.</li>
      <li>Cloud platforms: AWS, Azure and Firebase.</li>
    </ul>

    <div v-for="skill in skills" class="content-container">
      <skill-bar :skill="skill.skill" :percentage="skill.percentage" />
    </div>

    <div class="header-container">
      <h1 class="page-title">Soft Skills</h1>
    </div>
    <ul class="content-container">
      <li>
        Open-minded | Team-player | Customer oriented | Ability to work under pressure | Good
        communication skills | Divergent thinking | Completing tasks and ability to meet the time limits.
      </li>
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
          skill: "Python",
          percentage: 60
        },
        {
          skill: "Node JS",
          percentage: 70
        },
        {
          skill: "Vue JS",
          percentage: 80
        },
        {
          skill: "SQL",
          percentage: 70
        },
        {
          skill: "Firebase",
          percentage: 50
        },
        {
          skill: "GraphQL",
          percentage: 80
        },
        {
          skill: "Microsoft Office",
          percentage: 90
        }
      ],
    }
  }
}
</script>


<style lang='scss'>
@use "SkillsPage";
</style>
