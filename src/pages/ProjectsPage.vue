<template>
  <main class="projects-page">
    <div class="header-container">
      <div>
        <h1 class="page-title">Projects</h1>
        <h3 class="page-subtitle">HERE IS A SHOWCASE OF SOME PROJECTS I HAVE MADE</h3>
      </div>
    </div>

    <div class="projects-grid">
      <div v-for="(project, index) in projects" :key="index" class="project-box">
        <h3 class="project-title">{{ project.title }}</h3>
        <img :src="`/${project.image}`" :alt="project.title" class="project-image" />
        <p>{{ project.description }}</p>
        <a :href="project.link" class="button" target="_blank">Check it out!</a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ProjectsPage",
  data() {
    return {
      projects: [
        {
          title: "Netflix Clone - Movie Playlist (JavaScript)",
          link: "https://github.com/aatanasovskii/Netflix_Clone-project",
          image: "Netflix_Clone.png",
          description:
              "A movies website using TMDB API where movies are categorized, and trailers can be viewed.",
        },
        {
          title: "Vue.js Shopping App",
          link: "https://github.com/aatanasovskii/shopping-app-vuejs",
          image: "shopping-app.png",
          description:
              "A dynamic shopping app with Vue.js, Vuex, and Vue Router. Users can browse products and manage their carts.",
        },
        {
          title: "React Meetup App",
          link: "https://github.com/aatanasovskii/meetups-react-app",
          image: "ReactApp_Meetups.png",
          description:
              "An interactive React app for organizing meetups. Uses Firebase for storing meetups and favorites.",
        },
        {
          title: "Movie Playlist (React)",
          link: "https://github.com/aatanasovskii/REACT_MoviePlaylist-",
          image: "My_Movie_Playlist.png",
          description:
              "A movie search and playlist app using Open Movie Database API, built with React.",
        },
        {
          title: "Sales Prediction (Machine Learning)",
          link: "https://github.com/aatanasovskii/Machine-Learning---Sales-Prediction",
          image: "ML_Predicting_Sales.png",
          description:
              "Predicts sales using XGBOOST and Stacked Models. Created as a university thesis project.",
        },
        {
          title: "Weather App",
          link: "https://github.com/aatanasovskii/Weather-App",
          image: "Weather_App.png",
          description: "Simple weather app using Yahoo Weather API.",
        },
      ],
    };
  }
};
</script>

<style lang='scss'>
@use "ProjectsPage";
</style>
