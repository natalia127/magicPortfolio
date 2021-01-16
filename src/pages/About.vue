<template>
  <div class="wrapperContent">
    <div class="about">
      <p>
        Middle plus developer. Deep understanding of how js works. I follow the
        principles of clean code and clean architecture, but I do not fall into
        perfectionism where it is not needed.
      </p>
      <p>
        I am constantly learning to be able to make the right decisions from the
        point of view, but from the outlook of options.
      </p>
      <p>
        I am able to distribute tasks according to urgency and importance. High
        responsibility. Independence.
      </p>
    </div>
    <MagicHat :colorStars="colorStars" />
  </div>
</template>

<script>
import MagicHat from '@/components/MagicHat/MagicHat'

export default {
  components: { MagicHat },
  data() {
    return {
      colorStars: '#7B68EE',
    }
  },
  mounted() {},
}
</script>
<style lang="less" scoped>
.about {
  font-size: 20px;
  line-height: 1.7;
  max-width: 600px;
  padding: 200px 100px 0;
}
.wrapperContent {
  background: radial-gradient(#faecd5, #fffafa);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
