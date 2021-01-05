<template>
  <div>
    <input type="color" :id="idInput" name="head" v-model="valueColor" />
    <label :for="idInput">Head</label>
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

<style></style>
