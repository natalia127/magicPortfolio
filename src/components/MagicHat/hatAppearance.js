let hatImg = null

let initImgHat = async function() {
  hatImg = new Image()
  hatImg.src = require('../../assets/img/hat.png')
  return new Promise(resolve => {
    hatImg.onload(resolve(true))
  })
}

const drawHat = async function() {
  try {
    if (!hatImg) {
      await initImgHat.call(this)
    }
    if (this.isFinishedScaleHat) {
      drawImgHat.call(this, this.finishScaleHat)
    } else {
      requestAnimationFrame(() => {
        drawWithAnim.call(this, 0.1)
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

  drawImgHat.call(this, scale)
  if (scale >= this.finishScaleHat) {
    this.isFinishedScaleHat = true
    this.ctx.restore()
    return
  }
  requestAnimationFrame(() => {
    drawWithAnim.call(this, scale + 0.02)
  })
}

export default drawHat
