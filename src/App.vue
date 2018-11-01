<template>
  <div id="app">
    <router-view/>
    <Jumbotron />
    <AboutUs />
  </div>
</template>

<script>
import Jumbotron from './sections/Jumbotron';
import AboutUs from './sections/AboutUs';

export default {
  name: 'App',
  components: {
    Jumbotron,
    AboutUs
  }
}
</script>

<style>

</style>
