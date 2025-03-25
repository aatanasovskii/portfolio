<template>
  <main class="home-page">
    <div class="header-container">
      <div>
        <h1 class="page-title">Welcome to My Portfolio</h1>
        <div class="page-subtitle">BUILDING SEAMLESS DIGITAL EXPERIENCES.</div>
      </div>
      <div class="image-container">
        <img class="home-portrait" src="../assets/images/andrej_bachelor_feit.jpeg" alt="">
        <button class="icon-cv" @click="openCV">Get My CV</button>
      </div>
    </div>

    <ul class="content-container">
      <li><strong>Software Engineer</strong> with 2.5+ years of experience in Full Stack Development.</li>
      <li>
        <strong>Bachelor of Science</strong> at the University “Ss. Cyril and Methodius” (UKIM) of Skopje - Faculty of Electrical Engineering and Information Technologies (FEIT)
        <br>- Computer Systems Engineering, Automation, and Robotics.
      </li>
      <li>Passionate about building scalable and user-friendly web applications using modern technologies like Javascript, Python, Node.js, Vue.js/React.js, GraphQL, AWS.</li>
      <li>
        <strong>AI-Powered Development:</strong> Integrating AI features in various different applications. Leveraging OpenAI, AWS Bedrock, LLAMA
        <br>and custom AI models for tasks like image processing, natural language understanding, and predictive analytics.
      </li>
    </ul>

  </main>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    openCV() {
      window.open('/Andrej-Atanasovski-CV.pdf', '_blank');
    }
  }
}
</script>

<style lang='scss'>
@use "HomePage";
</style>
