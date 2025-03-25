<template>
  <div class="main-layout">
    <div class="main-header">

      <div class="toggle-menu">
        <img @click="toggleMenu" class="menu-icon" src="../assets/icons/burger-menu.png" alt="">
      </div>

      <div class="user-details-container">
        <user-avatar class="user-avatar" @click="goToAboutPage" />

        <div class="user-details">
          <div class="user-name-container" @click="goToAboutPage">
            <div class="user-name">Andrej Atanasovski</div>
            <div class="user-email">andrej.atanasovski.00@gmail.com</div>
          </div>
        </div>
      </div>

    </div>

    <div class="main-content">
      <div class="main-menu" v-if="menuOpened">
        <div class="menu-item-container">
          <router-link class="side-menu-item" :to="{ name: 'HomePage' }">Home</router-link>
          <router-link class="side-menu-item" :to="{ name: 'ProjectsPage' }">Projects</router-link>
          <router-link class="side-menu-item" :to="{ name: 'ExperiencePage' }">Experience</router-link>
          <router-link class="side-menu-item" :to="{ name: 'SkillsPage' }">Skills</router-link>
          <router-link class="side-menu-item" :to="{ name: 'ServicesPage' }">Services</router-link>
          <router-link class="side-menu-item" :to="{ name: 'AboutPage' }">About</router-link>
        </div>
      </div>

      <div id="page-content" class="page-content" :class="{ 'menu-active': menuOpened }">
        <router-view :key="$route.path"/>
      </div>

    </div>

  </div>

  <div class="social-container">
    <section class="social-section">
      <div class="social-title">Connect & Collaborate:</div>
      <a href="mailto:andrej.atanasovski.00@gmail.com">
        <img class="contact-icon" src="../assets/icons/email-icon.svg" alt="email">
      </a>
      <a href="https://www.facebook.com/andrej.atanasovski.14/" target="_blank">
        <img class="contact-icon" src="../assets/icons/facebook-icon.svg" alt="facebook">
      </a>
      <a href="https://www.instagram.com/aatanasovskii/" target="_blank">
        <img class="contact-icon" src="../assets/icons/instagram-icon.svg" alt="instagram">
      </a>
      <a href="https://www.linkedin.com/in/andrej-atanasovski-a2000/" target="_blank">
        <img class="contact-icon" src="../assets/icons/linkedin-icon.svg" alt="linkedin">
      </a>
      <a href="https://github.com/aatanasovskii" target="_blank">
        <img class="contact-icon" src="../assets/icons/github-icon.svg" alt="github">
      </a>
    </section>
  </div>
</template>

<script>
import {RouterLink, RouterView} from 'vue-router'
import UserAvatar from "@/components/UserAvatar.vue";

export default {
  name: "MainLayout",
  components: {UserAvatar},
  data() {
    return {
      menuOpened: true
    }
  },

  methods: {
    toggleMenu() {
      this.menuOpened = !this.menuOpened;
    },
    goToAboutPage() {
      this.$router.push({name: 'AboutPage'});
    }
  }
}
</script>

<style lang="scss">
@use "MainLayout";
</style>
