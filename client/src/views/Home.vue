<template>
  <div class='home'>
    
    <Header :mode='mode' @updateMode='changeMode'/>

    <div id='bio'>
      {{bio}}
    </div>
    
    <Projects v-if="mode === 'projects'" :projects='projects' />

    <CV v-else-if="mode === 'CV'" :jobs='jobs' />

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Projects from '@/components/Projects.vue';
import CV from '@/components/CV.vue';
import api from '@/services/api.js'

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
      bio: '',
      fullProfile: {},
      projects: [],
      jobs: []
    }
  },
  methods: {
    changeMode() {
      this.mode = this.mode === 'projects' ? 'CV' : 'projects';
    }
  },
  watch: {
    fullProfile: function() {
      this.bio = this.fullProfile.basics.summary;
      this.jobs = this.fullProfile.work;
    }
  },
  created () {
    api.get('/')
    .then(response => this.fullProfile = response.data)
    .catch(error => console.log(error));
  }
};
</script>
