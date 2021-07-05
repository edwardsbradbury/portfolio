<template>
  <div class="home">
    
    <Header />
    
    <Projects v-if="mode === 'projects'" />

    <CV v-else-if="mode === 'CV'" />

  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Projects from "@/components/Projects.vue";
import CV from "@/components/CV.vue";

export default {
  name: "Home",
  components: {
    Header,
    Projects,
    CV
  },
  data() {
    return {
      mode: "projects"
    }
  }
};
</script>
