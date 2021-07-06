<template>
  <div class='home'>
    
    <Header :mode="mode" @updateMode="changeMode"/>

    {{profile}}
    
    <Projects v-if="mode === 'projects'" />

    <CV v-else-if="mode === 'CV'" />

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Projects from '@/components/Projects.vue';
import CV from '@/components/CV.vue';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Header,
    Projects,
    CV
  },
  data() {
    return {
      mode: 'projects',
      profile: 'My portfolio is still in development. There will be some evidence of my coding projects here, once I have decided how best to present them.',
      projects: [],
      jobs: []
    }
  },
  methods: {
    changeMode() {
      this.mode = this.mode === 'projects' ? 'CV' : 'projects';
    }
  },
  created () {
    axios.get()
    .then()
    .catch();
  }
};
</script>
