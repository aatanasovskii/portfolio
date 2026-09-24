<template>
  <div class="main-layout">
    <div class="main-header">

      <div class="toggle-menu">
        <button
          class="menu-toggle"
          type="button"
          aria-label="Toggle menu"
          aria-controls="main-menu"
          :aria-expanded="menuOpened"
          @click="toggleMenu"
        >
          <svg class="menu-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
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
      <nav id="main-menu" class="main-menu" v-if="menuOpened" aria-label="Main" @click="closeMenuOnMobile">
        <div class="menu-item-container">
          <router-link class="side-menu-item" :to="{ name: 'HomePage' }">Home</router-link>
          <router-link class="side-menu-item" :to="{ name: 'ProjectsPage' }">Projects</router-link>
          <router-link class="side-menu-item" :to="{ name: 'ExperiencePage' }">Experience</router-link>
          <router-link class="side-menu-item" :to="{ name: 'SkillsPage' }">Skills</router-link>
          <router-link class="side-menu-item" :to="{ name: 'AboutPage' }">About</router-link>
        </div>
      </nav>

      <div v-if="menuOpened && isMobile" class="menu-backdrop" @click="menuOpened = false"></div>

      <div id="page-content" ref="pageContent" class="page-content" :class="{ 'menu-active': menuOpened }">
        <router-view :key="$route.path"/>
      </div>

    </div>

  </div>

  <div class="social-container">
    <section class="social-section">
      <div class="social-title">Connect & Collaborate:</div>
      <a href="mailto:andrej.atanasovski.00@gmail.com" aria-label="Email">
        <img class="contact-icon" src="../assets/icons/email-icon.svg" alt="" width="30" height="30">
      </a>
      <a href="https://www.linkedin.com/in/andrej-atanasovski-a2000/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <img class="contact-icon" src="../assets/icons/linkedin-icon.svg" alt="" width="30" height="30">
      </a>
      <a href="https://github.com/aatanasovskii" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <img class="contact-icon" src="../assets/icons/github-icon.svg" alt="" width="30" height="30">
      </a>
    </section>
  </div>
</template>

<script>
import {RouterLink, RouterView} from 'vue-router'
import UserAvatar from "@/components/UserAvatar.vue";

const MOBILE_QUERY = '(max-width: 767px)';

export default {
  name: "MainLayout",
  components: {UserAvatar},
  data() {
    const isMobile = window.matchMedia(MOBILE_QUERY).matches;
    return {
      isMobile,
      menuOpened: !isMobile,
    }
  },

  watch: {
    $route() {
      this.closeMenuOnMobile();
      // Pages scroll inside .page-content, not the window, so reset it on every navigation.
      this.$refs.pageContent.scrollTop = 0;
    }
  },

  mounted() {
    this.mediaQuery = window.matchMedia(MOBILE_QUERY);
    this.mediaQuery.addEventListener('change', this.onViewportChange);
  },

  beforeUnmount() {
    this.mediaQuery.removeEventListener('change', this.onViewportChange);
  },

  methods: {
    toggleMenu() {
      this.menuOpened = !this.menuOpened;
    },
    closeMenuOnMobile() {
      if (this.isMobile) {
        this.menuOpened = false;
      }
    },
    onViewportChange(event) {
      this.isMobile = event.matches;
      this.menuOpened = !event.matches;
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
