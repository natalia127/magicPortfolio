let hatImg = null

let initImgHat = async function() {
  hatImg = new Image()
  hatImg.src = require('../../assets/img/hat.png')
  return new Promise(resolve => {
    hatImg.onload(resolve(true))
  })
}

const initFunc = function() {
  initImgHat = initImgHat.bind(this)
  drawImgHat = drawImgHat.bind(this)
  drawWithAnim = drawWithAnim.bind(this)
}

const drawHat = async function() {
  initFunc.call(this)

  try {
    if (!hatImg) {
      await initImgHat()
    }
    if (this.isFinishedScaleHat) {
      drawImgHat(this.finishScaleHat)
    } else {
      requestAnimationFrame(() => {
        drawWithAnim(0.1)
      })
    }
  } catch (error) {
    console.log(error)
  }
}

let drawImgHat = function(scale) {
  this.ctx.save()
  this.ctx.translate(this.getShiftRight, this.getShiftDown)
  this.ctx.rotate((-20 * Math.PI) / 180)
  this.ctx.scale(scale, scale)
  this.ctx.drawImage(hatImg, 0, 0)
  this.ctx.restore()
}

let drawWithAnim = function(scale = 0.1) {
  this.ctx.clearRect(0, 0, this.width, this.height)

  drawImgHat(scale)
  if (scale >= this.finishScaleHat) {
    this.isFinishedScaleHat = true
    this.ctx.restore()
    return
  }
  requestAnimationFrame(() => {
    drawWithAnim(scale + 0.02)
  })
}

export default drawHat
