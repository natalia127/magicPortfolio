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
import { getResolution } from '@/utils/utils'
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
      width: null,
      height: null,
      resolution: 'dt',
      shiftDown: {
        mb: 210,
        tb: -40,
        dt: 0,
      },
      shiftRight: { mb: 0, tb: 70, dt: 70 },
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
    getShiftRight() {
      return this.width / 2 + this.shiftRight[this.resolution]
    },
    getShiftDown() {
      return this.height / 2 + this.shiftDown[this.resolution]
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
    })
    return {}
  },
  watch: {
    colorStars() {
      editColorStars.call(this)
    },
  },
  methods: {},

  mounted() {
    draw.call(this)
    window.addEventListener(
      'resize',
      debounce(() => {
        this.resolution = getResolution(this.width)
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
  this.resolution = getResolution(this.width)
  this.ctx = canvas.getContext('2d')

  drawHat.call(this)
  let unwatch = this.$watch('isFinishedScaleHat', newValue => {
    if (newValue) {
      drawStars.call(this)
      unwatch()
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
  z-index: 3;
}
</style>
