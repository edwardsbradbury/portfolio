<template>
  <div id='projects'>

    <h2>My projects</h2>

    <div class='project'>
      <h3>Java Swing todo organiser GUI</h3>
      <table>
        <tr>
          <td>
            A todo task organiser for desktop, written in Java JDK 15, using the Swing library for the GUI.<br><br>
            Developed for university coursework, for my second year programming module. Working with a file chooser component and also writing output to an external file were new things I learned to complete this.<br><br>
            This coursework scored me 98%; the marker's feedback is in the GitHub repo.<br><br>
            <a href='https://github.com/edwardsbradbury/java-todo-application' target='_blank'>GitHub repo</a>
          </td>
          <td>
            <iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/AlrN15X_juI?autoplay=0&origin=https://edbradbury.co.uk" frameborder="0" allowfullscreen></iframe>
          </td>
        </tr>
      </table>
    </div>

    <div class='project'>
      <h3>Lesson Up</h3>
      <table>
        <tr>
          <td>
            A web-application to enable parents in the UK whose first language isn't English to help their children with their homework.<br><br>
            Vue.js user interface, served by a Node/Express server, hosted on a Heroku dyno. Calls a separate Node/Express REST API with MySQL database, hosted on Heroku. Also depends heavily on Google Cloud Translate API.<br><br>
            Developed for a university assignment in my second year, project managed and almost entirely coded by myself. It scored 86% (marker's feedback is in the GitHub repo).<br><br>
            I taught myself Vue.js (+ Vuex state management), Passport.js (which necessitated my learning CORS configuration and secure cookies) and learned to use xios http client to complete this project.<br><br>
            <a href='https://lessonup.herokuapp.com'>Lesson Up</a> (live on the web)<br><br>
            <a href='https://github.com/edwardsbradbury/lessonup' target='_blank'>GitHub repo</a><br>
          </td>
          <td>
            <iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/vefsyGOkEsY?autoplay=0&origin=https://edbradbury.co.uk" frameborder="0" allowfullscreen></iframe>
          </td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Projects',
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
