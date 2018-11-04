<template>
  <div id="app">
    <router-view/>
    <Jumbotron />
    <AboutUs />
    <WhatWeDo />
  </div>
</template>

<script>
import Jumbotron from './sections/Jumbotron';
import AboutUs from './sections/AboutUs';
import WhatWeDo from './sections/WhatWeDo';

export default {
  name: 'App',
  components: {
    Jumbotron,
    AboutUs,
    WhatWeDo
  }
}
</script>

<style>

</style>
