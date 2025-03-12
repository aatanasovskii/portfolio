<template>
  <div class="main-layout">
    <div class="main-header">

<!--      <div class="company-logo">-->
<!--        <img src="/top-games-logo.svg" alt="">-->
<!--      </div>-->

      <div class="user-details-container">

        <div class="user-details">
          <div class="user-name-container">
            <div class="user-name">Andrej Atanasovski</div>
            <div class="user-email">andrej.atanasovski.00@gmail.com</div>
          </div>
        </div>

      </div>

    </div>

    <div class="main-content">
      <div class="main-menu">
        <div class="menu-item-container">
          <router-link class="side-menu-item" :to="{ name: 'HomePage' }">Home</router-link>
          <router-link class="side-menu-item" :to="{ name: 'ProjectsPage' }">Projects</router-link>
          <router-link class="side-menu-item" :to="{ name: 'ExperiencePage' }">Experience</router-link>
          <router-link class="side-menu-item" :to="{ name: 'SkillsPage' }">Skills</router-link>
          <router-link class="side-menu-item" :to="{ name: 'AboutPage' }">About</router-link>
          <router-link class="side-menu-item" :to="{ name: 'ContactPage' }">Contact</router-link>
        </div>
      </div>

      <router-view/>
    </div>

  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: "MainLayout",
  components: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
</style>
