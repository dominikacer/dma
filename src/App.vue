<template>
  <div id="app">
    <router-view/>
    <Jumbotron />
    <AboutUs />
    <WhatWeDo />
    <Plan />
    <Opinions />
  </div>
</template>

<script>
import Jumbotron from './sections/Jumbotron';
import AboutUs from './sections/AboutUs';
import WhatWeDo from './sections/WhatWeDo';
import Plan from './sections/Plan';
import Opinions from './sections/Opinions';

export default {
  name: 'App',
  components: {
    Jumbotron,
    AboutUs,
    WhatWeDo,
    Plan,
    Opinions
  }
}
</script>

<style>

</style>
