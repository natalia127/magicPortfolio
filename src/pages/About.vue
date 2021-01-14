<template>
  <div class="wrapperContent">
    123
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
  methods: {},
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
