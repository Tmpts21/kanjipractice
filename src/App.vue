<template>
  <HomeComponent/>
</template>

<script>
import HomeComponent from './components/Home.vue' 

export default {
  name: 'App',
  components: {
    HomeComponent 
  }
}
</script>

<style>
#app {
  font-family: Nunito, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50; 
  font-weight: bold ;
  backgroud-color: #1f2730; 
}
</style>
