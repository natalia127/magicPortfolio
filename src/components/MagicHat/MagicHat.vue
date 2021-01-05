<template>
  <div>
    <canvas
      class="hatCanvas"
      :width="width"
      :style="urlCursor"
      :height="height"
      @mousedown="isMouseDown = !isMouseDown"
      @mouseup="isMouseDown = !isMouseDown"
      v-stream:click="appereanceStars$"
    ></canvas>
  </div>
</template>

<script>
import { map } from 'rxjs/operators'
import { debounce } from 'lodash'
import drawHat from './hatAppearance'
import {
  redrawStars,
  drawStars,
  addStarsFromClick,
  editColorStars,
} from './drawStars'
export default {
  props: {
    colorStars: String,
  },
  data() {
    return {
      width: 500,
      height: 500,
      ctx: null,
      isFinishedScaleHat: false,
      finishScaleHat: 0.4,
      pathImg: '../../assetes/hat.png',
      isMouseDown: false,
      cursors: [
        require('../../assets/img/wand.png'),
        require('../../assets/img/smallWand.png'),
      ],
    }
  },
  computed: {
    urlCursor() {
      let idCursor = this.isMouseDown ? 1 : 0
      return {
        cursor: `url(${this.cursors[idCursor]}), auto`,
      }
    },
  },
  domStreams: ['appereanceStars$'],
  subscriptions() {
    const random$ = this.appereanceStars$.pipe(
      map(e => ({
        xt: e.event.offsetX,
        yt: e.event.offsetY,
      }))
    )
    random$.subscribe(({ xt, yt }) => {
      addStarsFromClick(xt, yt)
      // drawStars.call(this, xt, yt)
    })
    return {}
  },
  watch: {
    colorStars() {
      editColorStars.call(this)
    },
  },
  methods: {
    // updateCanvas(val) {
    //   console.log(val)
    // },
  },

  mounted() {
    draw.call(this)
    window.addEventListener(
      'resize',
      debounce(() => {
        resizeCanvas.call(this)
      }),
      300
    )
  },
}

let draw = function() {
  let canvas = this.$el.querySelector('canvas')
  this.width = window.innerWidth
  this.height = window.innerHeight
  this.ctx = canvas.getContext('2d')

  drawHat.call(this)
  this.$watchAsObservable('isFinishedScaleHat').subscribe(({ newValue }) => {
    if (newValue) {
      drawStars.call(this)
    }
  })
}

let resizeCanvas = function() {
  this.ctx.clearRect(0, 0, this.width, this.height)
  this.width = window.innerWidth
  this.height = window.innerHeight
  redrawStars.call(this)
}
</script>

<style lang="less" scoped>
.hatCanvas {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  background: radial-gradient(#faecd5, blueviolet);
}
</style>
