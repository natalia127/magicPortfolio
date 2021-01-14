<template>
  <div class="title">
    <div>
      Hello!
    </div>
    <div>
      I'm Natalia!
    </div>
    <div>and i am frontend-witch</div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
<style lang="less" scoped>
@import '../../css/variables.less';

.title {
  font-size: 40px;
  color: white;
  line-height: 2;
  text-align: center;
  @media (max-width: @dt - 1) {
    font-size: 30px;
  }
  @media (max-width: @md - 1) {
    font-size: 25px;
  }
}
</style>
