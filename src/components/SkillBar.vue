<template>
  <div class="skill-bar">
    <div class="skill-header">
      <span>{{ skill }}</span>
      <span>{{ percentage }}%</span>
    </div>
    <div class="progress-bar">
      <div class="progress" :style="{ width: percentage + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillBar",
  props: {
    skill: {
      type: String,
      required: true
    },
    percentage: {
      type: Number,
      default: 0,
      required: true
    }
  }
}
</script>

<style lang="scss">
@use "SkillBar";
</style>
