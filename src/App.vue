<template>
  <div id="app" class="wrapper">
    <Navigation class="nav" />
    <div class="main-content"><router-view></router-view></div>
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
<style lang="less" scoped>
.wrapper {
  display: flex;
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nova+Oval&display=swap');

body,
html {
  font-family: 'Nova Oval', cursive;

  overflow-x: hidden;
}
</style>
