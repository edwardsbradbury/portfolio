<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a:hover {
  color: maroon;
}

#bio {
  padding-top: 1%;
  padding-left: 20%;
  padding-right: 20%;
}

.project {
  padding-left: 20%;
  padding-right: 20%;
}

.project table {
  padding-top: 1%;
}

.cvSection {
  border: 1px solid black;
}

.job {
  padding: 0.5%;
  display: block;
}

table {
  margin: auto;
}

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
