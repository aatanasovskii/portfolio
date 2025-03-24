<template>
  <main class="home-page">
    <div class="header-container">
      <div>
        <h1 class="page-title">Welcome to Andrej's portfolio</h1>
        <h3 class="text-lg text-gray-600 mt-2">Building seamless digital experiences.</h3>
      </div>
      <img class="home-portrait" src="../assets/images/andrej_bachelor_feit.jpeg" alt="">
    </div>

    <ul class="content-container">
      <li>Software Engineer with 2.5+ years of experience in full stack development.</li>
      <li>
        Bachelor's degree in electrical engineering from the University of Electrical Engineering and Information Technologies (FEIT) Skopje
        <br>- (Computer Systems Engineering, Automation, and Robotics).
      </li>
      <li>Passionate about building scalable and user-friendly web applications using modern technologies like Vue.js, Node.js, and AWS.</li>
    </ul>

  </main>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style lang='scss'>
@use "HomePage";
</style>
