<template>
  <main class="home-page">
    <div class="header-container">
      <div>
        <h1 class="page-title">Hi, I'm Andrej</h1>
        <div class="page-subtitle">FULL STACK DEVELOPER</div>
      </div>
      <div class="image-container">
        <img class="home-portrait" src="../assets/images/andrej_bachelor_feit.jpeg" alt="">
        <button class="icon-cv" @click="openCV">Download My CV</button>
      </div>
    </div>

    <div class="content-container">
      <div class="content">
        <strong>🔹 Software Engineer</strong> with 2.5+ years of experience in Full Stack Development.
        <br><em>  Building seamless digital experiences.</em>
      </div>
      <div class="content">
        <strong>🔹 Bachelor of Science</strong> at the University “Ss. Cyril and Methodius” (UKIM) of Skopje - Faculty of Electrical Engineering and Information Technologies (FEIT),
        <br>Major: <em>Computer Systems Engineering, Automation, and Robotics.</em>
      </div>
      <div class="content">🔹 Passionate about building scalable and user-friendly web applications using modern technologies like Javascript, Python, Node.js, Vue.js/React.js, GraphQL, AWS.</div>
      <div class="content">
        <strong>🔹 AI-Powered Development:</strong> Integrating AI features in various different applications. Leveraging OpenAI, AWS Bedrock, LLAMA and custom AI models
        <br>for tasks like image processing, natural language understanding, and predictive analytics.
      </div>
    </div>

  </main>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    openCV() {
      window.open('/portfolio/src/assets/CV-Andrej.pdf', '_blank');
    }
  }
}
</script>

<style lang='scss'>
@use "HomePage";
</style>
