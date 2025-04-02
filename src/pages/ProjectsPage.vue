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
          title: "Fantasy Football Game",
          link: "https://th.fantopy.com",
          image: "Fantopy.png",
          description:
              "A movies website using TMDB API where movies are categorized, and trailers can be viewed.",
        },
        {
          title: "Suisse Blockchain Crypto Token",
          link: "https://suisseblockchain.io/",
          image: "Suisse.png",
          description:
              "An interactive React app for organizing meetups. Uses Firebase for storing meetups and favorites.",
        },
        {
          title: "Data Warehouse Storage",
          // link: "https://github.com/aatanasovskii/shopping-app-vuejs",
          image: "Tentastique.png",
          description:
              "A dynamic shopping app with Vue.js, Vuex, and Vue Router. Users can browse products and manage their carts. This was a project at work but i did the most of it on my own.",
        },
        {
          title: "Departmentware",
          // link: "https://github.com/aatanasovskii/shopping-app-vuejs",
          // image: "Tentastique.png",
          description:
              "The biggest project I have worked on is a Departmentware Store for Police Stations and Officers in the USA, where we...",
        },
          // todo: add AI apps here:
          //
        {
          title: "Netflix Clone - Movie Playlist (JavaScript)",
          link: "https://github.com/aatanasovskii/Netflix_Clone-project",
          image: "Netflix_Clone.png",
          description:
              "A movies website using TMDB API (The Movies Database) where movies are categorized, and trailers can be viewed for every movie.",
        },
        {
          title: "Vue.js Shopping App",
          link: "https://github.com/aatanasovskii/shopping-app-vuejs",
          image: "shopping-app.png",
          description:
              "A dynamic simple Shopping App with Vue.js (only frontend, without backend). Users can browse products and manage their carts.",
        },
        {
          title: "React Meetup App",
          link: "https://github.com/aatanasovskii/meetups-react-app",
          image: "ReactApp_Meetups.png",
          description:
              "An interactive React App for organizing meetups. Uses NoSQL (Firebase) for storing your meetups and favorites.",
        },
        // {
        //   title: "Movie Playlist (React)",
        //   link: "https://github.com/aatanasovskii/REACT_MoviePlaylist-",
        //   image: "My_Movie_Playlist.png",
        //   description:
        //       "A movie search and playlist app using Open Movie Database API, built with React.",
        // },
        {
          title: "Sales Prediction (Machine Learning)",
          link: "https://github.com/aatanasovskii/Machine-Learning---Sales-Prediction",
          image: "ML_Predicting_Sales.png",
          description:
              "ML model for Predicts Sales using the Models: XGBOOST and Stacked. Created as a university thesis project.",
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
