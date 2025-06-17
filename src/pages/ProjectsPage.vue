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
        <img v-if="project.image" :src="getImage(project.image)" :alt="project.title" class="project-image" />
        <p>{{ project.description }}</p>
        <a v-if="project.showButton" :href="project.link" class="button" target="_blank">Check it out!</a>
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
          description: "Fantasy Football Game: where you can pick you own football teams and it calculates points every Match-week. Worldwide ranking, where you can compete in different leagues and pick your best team in a given budget",
          showButton: true,
        },
        {
          title: "Suisse Blockchain Crypto Token",
          link: "https://suisseblockchain.io/",
          image: "Suisse.png",
          description: "Crypto token (SUISSE): Creating and buying a the token. A website using Blockchain and Smart Contracts with Ethereum (ETH) and NULLS Blockchains, where people can buy the tokens using their crypto wallets.",
          showButton: true,
        },
        {
          title: "Data Warehouse CRM Storage",
          image: "Tentastique.png",
          description: "E-commerce solution, a tailored CRM with complete warehouse storage system for managing products, their attributes, deals, offers, invoices and everything you need. The platform also handles meeting scheduling and streamlines business operations",
          showButton: false,
        },
        {
          title: "Departmentware",
          link: "https://departmentware.com/",
          image: "Departmentware.png",
          description: "The biggest project I have worked on is Departmentware Store for Police Stations and Officers in the USA. It has training programs for law enforcement, replacing outdated, paper-based workflows. It enables officers to capture, organize, and act on field intelligence with speed, accuracy, and consistency.",
          showButton: true,
        },
        {
          title: "Netflix Clone - Movie Playlist (JavaScript)",
          link: "https://github.com/aatanasovskii/Netflix_Clone-project",
          image: "Netflix_Clone.png",
          description: "A movies website using TMDB API (The Movies Database) where movies are categorized, and trailers can be viewed for every movie.",
          showButton: true,
        },
        {
          title: "React Meetup App",
          link: "https://github.com/aatanasovskii/meetups-react-app",
          image: "ReactApp_Meetups.png",
          description: "An interactive React App for organizing meetups. Uses NoSQL (Firebase) for storing your meetups and favorites.",
          showButton: true,
        },
        {
          title: "Sales Prediction (Machine Learning)",
          link: "https://github.com/aatanasovskii/Machine-Learning---Sales-Prediction",
          image: "ML_Predicting_Sales.png",
          description: "ML model for Predicts Sales using the Models: XGBOOST and Stacked (combination of SARIMAX and OLS). Created as a university thesis project.",
          showButton: true,
        },
        {
          title: "AI App: Newsletter Assistant",
          link: "https://github.com/aatanasovskii/newsletter-openAI-assistant",
          image: "News_Summarizer.png",
          description: "OpenAI Assistant, made with Python and Streamlit, which would return latest news that are retrieved from the API (https://newsapi.org/) for a topic we want with references (urls) and everything..",
          showButton: true,
        },
        {
          title: "AI App: Personalized Travel Planner",
          link: "https://github.com/aatanasovskii/AI-personalized-travel-planner",
          description: "OpenAI Assistant: Simple ChatBot (Full Stack) using the OpenAI API, which can be used as a personalized travel planner, to layout a plan for the best things you can do when you travel to a certain destination.",
          showButton: true,
        },
        {
          title: "Movie Playlist (React)",
          link: "https://github.com/aatanasovskii/REACT_MoviePlaylist-",
          image: "My_Movie_Playlist.png",
          description: "A movie search and playlist app using Open Movie Database API, built with React.",
          showButton: true,
        },
        {
          title: "Vue.js Shopping App",
          link: "https://github.com/aatanasovskii/shopping-app-vuejs",
          image: "shopping-app.png",
          description: "A dynamic simple Shopping App with Vue.js (only frontend, without backend). Users can browse products and manage their carts.",
          showButton: true,
        },
        {
          title: "Weather App",
          link: "https://github.com/aatanasovskii/Weather-App",
          image: "Weather_App.png",
          description: "Simple weather app using Yahoo Weather API.",
          showButton: true,
        },
      ],
    };
  },

  methods: {
    getImage(imageName) {
      try {
        return new URL(`../assets/images/${imageName}`, import.meta.url).href;
      } catch {
        return '';
      }
    }
  }
};
</script>

<style lang='scss'>
@use "ProjectsPage";
</style>
