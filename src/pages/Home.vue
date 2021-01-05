<template>
  <div>
    <MagicHat :colorStars="colorStars" />
    <div class="content">
      <InputColor @changedColor="changeColorStars" />
      <TitleHello />
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
.content {
  position: relative;
  z-index: 1;
}
</style>
