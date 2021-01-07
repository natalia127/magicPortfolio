<template>
  <div class="wrapperContent">
    <MagicHat :colorStars="colorStars" />
    <div class="content">
      <div class="title">
        <TitleHello />
      </div>
      <div class="colorInput">
        <InputColor @changedColor="changeColorStars" />
      </div>
    </div>
  </div>
</template>

<script>
import MagicHat from '@/components/MagicHat/MagicHat'
import InputColor from '@/components/inputColor/InputColor'
import TitleHello from '@/components/titleHello/TitleHello'

export default {
  name: 'Home',
  components: {
    MagicHat,
    InputColor,
    TitleHello,
  },
  data() {
    return {
      colorStars: '#FFFACD',
    }
  },
  methods: {
    changeColorStars(color) {
      this.colorStars = color
    },
  },
}
</script>
<style lang="less" scoped>
@import '../css/variables.less';

.wrapperContent {
  background: radial-gradient(#faecd5, blueviolet);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.content {
  min-height: 100%;

  max-width: 1300px;
  margin: auto;
  padding: 0 30px;

  .title {
    display: inline-block;
    padding-top: 100px;
    padding-left: 30px;
    @media (max-width: @md - 1) {
      padding-top: 40px;
      padding-left: 0;
      display: block;
    }
  }
  .colorInput {
    display: flex;
    margin-top: 40px;
    justify-content: flex-end;
    margin-right: 60px;
  }
}
</style>
