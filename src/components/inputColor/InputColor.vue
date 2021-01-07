<template>
  <div>
    <label :for="idInput" class="label">Изменить цвет звезд</label>
    <input
      type="color"
      :id="idInput"
      name="head"
      v-model="valueColor"
      class="input"
    />
  </div>
</template>

<script>
export default {
  name: 'inputColor',
  data() {
    return {
      idInput: Math.random() * 10000,
      valueColor: '#FFFACD',
    }
  },
  watch: {
    valueColor(val) {
      this.$emit('changedColor', val)
    },
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.label {
  color: white;
  padding-right: 20px;
  font-family: 'Nova Oval', cursive;
}
.input {
  z-index: 4;
  cursor: pointer;
  position: relative;
}
</style>
