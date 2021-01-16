<template>
  <nav class="nav">
    <router-link to="/">
      <div class="nav__burger"><img :src="img.burger" alt="" /></div>
    </router-link>
    <div class="nav__items">
      <router-link to="/" class="nav__home nav__item">
        <img :src="img.home" alt="" />
      </router-link>
      <router-link to="/about" class="nav__about nav__item">
        <div><img :src="img.about" alt="" /></div>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  components: {},
  data() {
    return {
      img: {
        burger: require('../../assets/img/hat.png'),
        home: require('../../assets/img/home.svg'),
        about: require('../../assets/img/person.svg'),
      },
    }
  },
}
</script>
<style lang="less" scoped>
.nav {
  background: rgb(160, 88, 142);
  width: 60px;
  z-index: 4;
  position: relative;
  height: 100vh;
  &__burger {
    padding: 10px;
    img {
      width: 100%;
    }
    // &:hover {
    //   padding: 13px;
    // }
  }
  &__items {
    padding-top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  &__item {
    position: relative;
    padding: 10px 0;
    &::after {
      text-decoration: none;
      color: white;
      content: '';
      font-size: 10px;
      letter-spacing: 2px;
      position: absolute;
      bottom: 10px;
      display: block;
      left: -5px;
      width: 100%;
      text-align: center;
      opacity: 0;
      transition: all 0.3s ease-out;
    }
    &:hover img {
      opacity: 0;
    }
    &:hover::after {
      opacity: 1;
    }
  }
  &__home {
    &:hover::after {
      content: 'HOME';
    }
  }
  &__about {
    &::after {
      left: -10px;
    }
    &:hover::after {
      content: 'ABOUT';
    }
  }
}
</style>
