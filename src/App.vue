<template>
  <div id="app">
    <div class="page_wrapper">
      <router-view/>
      <Jumbotron :window_width="window.width" />
      <AboutUs :window_width="window.width" />
      <WhatWeDo />
      <Plan />
      <Opinions />
      <Projects />
      <Footer />
    </div>
  </div>
</template>

<script>
import Jumbotron from './sections/Jumbotron';
import AboutUs from './sections/AboutUs';
import WhatWeDo from './sections/WhatWeDo';
import Plan from './sections/Plan';
import Opinions from './sections/Opinions';
import Projects from './sections/Projects';
import Footer from './sections/Footer'

export default {
  name: 'App',
  components: {
    Jumbotron,
    AboutUs,
    WhatWeDo,
    Plan,
    Opinions,
    Projects,
    Footer
  },
  data(){
    return {
      window: {
        width: 0
      }
    }
  },
  created(){
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize(){
      this.window.width = window.innerWidth;
    }
  } 
}
</script>

<style>

</style>
