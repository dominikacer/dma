<template>
  <div id="app">
    <router-view/>
    <Jumbotron />
  </div>
</template>

<script>
import Jumbotron from './sections/Jumbotron';

export default {
  name: 'App',
  components: {
    Jumbotron
  }
}
</script>

<style>

</style>
