<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from '@/components/navigation/Navigation'

export default {
  name: 'App',
  components: {
    Navigation,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nova+Oval&display=swap');

body,
html {
  font-family: 'Nova Oval', cursive;

  overflow-x: hidden;
}
</style>
