<template>
  <div class='home'>
    
    <Header :mode='mode' @updateMode='changeMode'/>

    <div id='bio'>
      Passionate software developer with intermediate level skills in Java SE, Java Swing and intermediate to advanced level skills in JavaScript (Node, Express, Passport, Vue, EJS and vanilla JS. Currently learning React through Codecademy too).<br><br>

      Recently finished my second year of undergraduate studies and am seeking a work placement year in software engineering, either for desktop or for the web. During the 2020-21 academic year, I developed Java desktop applications with Swing GUIs and a full-stack JavaScript web application, which can be found <a href='https://lessonup.herokuapp.com/' target='_blank'>here</a> (opens in new window). I'm eager to undertake a work placement to hone my skills through applying them to real world problems; also hoping to experience the practicalities of test-driven development and applying Agile methodologies.<br><br>

      Hobbies include motorcycles, cross-country cycling and kayaking.<br><br>
    </div>
    
    <Projects />
    <!-- <Projects v-if="mode === 'projects'" :projects='projects' />

    <CV v-else-if="mode === 'CV'" :jobs='jobs' /> -->

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Projects from '@/components/Projects.vue';
// import CV from '@/components/CV.vue';
// import api from '@/services/api.js'

export default {
  name: 'Home',
  components: {
    Header,
    Projects,
    // CV
  },
  data() {
    return {
      mode: 'projects',
      // bio: '',
      // fullProfile: {},
      // projects: [],
      // jobs: []
    }
  },
  methods: {
    changeMode() {
      this.mode = this.mode === 'projects' ? 'CV' : 'projects';
    }
  },
  /* From here to line 60 was for when I was originally using GitConnected API & JSONResume to automatically populate
      my CV.vue component with data from my LinkedIn profile. May still use this in future, hence not completely removing */

  // watch: {
  //   fullProfile: function() {
  //     this.bio = this.fullProfile.basics.summary;
  //     this.jobs = this.fullProfile.work;
  //   }
  // },
  // created () {
  //   api.get('/')
  //   .then(response => this.fullProfile = response.data)
  //   .catch(error => console.log(error));
  // }
};
</script>
