<template>
  <main class="projects-page">
    <div class="text-center">
      <h1 class="text-4xl font-bold">Projects</h1>
      <h3>Here is a showcase of some projects I have made</h3>

      <!--todo: update these projects-->
      <div class="mt-6 max-w-2xl mx-auto space-y-6">
        <p class="text-gray-700">Portfolio Website: Built with Vue, showcasing my work skills.</p>
        <p class="text-gray-700">Weather App: A responsive weather app using OpenWeather API.</p>
        <p class="text-gray-700">Ecommerce Platform: Scalable backend for an online store.</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ProjectsPage',
}
</script>

<style lang='scss'>
@use "ProjectsPage";
</style>
