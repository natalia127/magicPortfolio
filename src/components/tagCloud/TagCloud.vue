<template>
  <div :class="container"></div>
</template>

<script>
import TagCloud from 'TagCloud'

export default {
  data() {
    return {
      container: 'tagcloud',
      words: [
        'Vue',
        'Vuex',
        'Vue-router',
        'Vuetify',
        'ES6',
        'JS',
        'CSS3',
        'HTML5',
        'Git',
        'NPM',
        'Node.js',
        'Nuxt',
        'Express',
        'Less',
        'Sass',
        'Webpack',
        'TypeScript',
        'ООП',
        'REST',
        'GraphQL',
      ],
      options: { radius: 250 },
    }
  },
  mounted() {
    this.$nextTick(TagCloud(`.${this.container}`, this.words, this.options))
  },
}
</script>
