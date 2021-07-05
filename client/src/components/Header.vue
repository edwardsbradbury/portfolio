<template>
  <div id="header">

    <div id="portrait">

    </div>

    <div id="nav">
      <router-link to="/" @click="$emit('updateMode')">{{linkText}}</router-link> |
      <a href="mailto:edwardsbrdbury@gmail.com" target="_blank">Email me</a> |
      <a href="https://www.linkedin.com/in/ed-bradbury-639366216" target="_blank">LinkedIn</a> |
      <a href="https://github.com/edwardsbradbury" target="_blank">GitHub</a>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['mode'],
  computed: {
    linkText: function() {
      return (this.mode === 'projects' ? 'CV' : 'Projects');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
