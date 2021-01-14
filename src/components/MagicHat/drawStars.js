import drawHat from './hatAppearance'
import { random } from '@/utils/utils'

let colorStars = '#FFFACD'
let ctx = null
let width = null
let height = null
let localDrawHat = null
let stars = []
let activeIntervals = []
let stopAnimate = null

const drawStars = function() {
  localDrawHat = drawHat.bind(this)
  getStars = getStars.bind(this)
  colorStars = this.colorStars
  ctx = this.ctx
  width = this.width
  height = this.height
  stars = getStars()

  requestAnimationFrame(() => {
    drawWithAnim()
  })
  initUpdateCountStars()
}
const redrawStars = function() {
  width = this.width
  height = this.height
}
let getStars = function(
  countStars = 30,
  xt = this.getShiftRight,
  yt = this.getShiftDown,
  fromClick
) {
  const stars = []

  for (let index = 0; index < countStars; index++) {
    const r = random(3, 15)
    const x = fromClick ? 0 : random(0, 80)
    const y = fromClick ? 0 : random(25, 60)
    const angle = random(-40, 40)
    const speed = random(800, 1000)
    const offset = { xt, yt }

    stars.push({
      r,
      x,
      y,
      angle,
      speed,
      offset,
    })
  }
  return stars
}

const drawWithAnim = function() {
  updateStars()
  ctx.clearRect(0, 0, width, height)
  localDrawHat()
  for (let index = 0; index < stars.length; index++) {
    const star = stars[index]
    drawStar(star)
  }
  if (stars.length) {
    stopAnimate = requestAnimationFrame(() => {
      drawWithAnim()
    })
  }
}

const initUpdateCountStars = function() {
  activeIntervals[0] = setInterval(() => {
    for (let index = 0; index < stars.length; index++) {
      const star = stars[index]
      if (star.y > 1000) {
        stars.splice(index, 1)
        index--
      }
    }
  }, 1000)
  activeIntervals[1] = setInterval(() => {
    if (stars.length < 200) stars.push(...getStars(random(1, 5)))
  }, 200)
}

const clearCanvas = function() {
  activeIntervals.forEach(interval => {
    clearInterval(interval)
  })
  cancelAnimationFrame(stopAnimate)
}

const addStarsFromClick = function(xt, yt) {
  stars.push(...getStars(random(3, 20), xt, yt, true))
}

const updateStars = function() {
  for (let index = 0; index < stars.length; index++) {
    const star = stars[index]
    star.y += Math.abs(Math.sin(star.angle + star.r / 2) * 3.5)
    star.x += Math.cos(star.angle) / 2
  }
}

const drawStar = function({ r, x, y, angle, offset }) {
  ctx.fillStyle = colorStars
  ctx.save()
  ctx.translate(offset.xt + x, offset.yt - y)
  ctx.shadowColor = 'rgba(0,0,0,0.2)'
  ctx.shadowOffsetX = 3
  ctx.shadowOffsetY = 3
  ctx.shadowBlur = 2
  ctx.beginPath()
  ctx.rotate(-Math.PI / angle)
  ctx.scale(r, r)
  ctx.moveTo(1, 0)
  ctx.lineWidth = ctx.lineWidth / r
  for (let i = 0; i < 9; i++) {
    ctx.rotate(Math.PI / 5)
    if (i % 2 == 0) {
      ctx.lineTo(0.3819653016466596, 0)
    } else {
      ctx.lineTo(1, 0)
    }
  }
  ctx.closePath()
  ctx.fill()
  ctx.restore()
}

const editColorStars = function() {
  colorStars = this.colorStars
}

export {
  drawStars,
  addStarsFromClick,
  redrawStars,
  editColorStars,
  clearCanvas,
}
