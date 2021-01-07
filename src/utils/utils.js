function random(min, max) {
  if (arguments.length < 2) {
    max = min
    min = 0
  }

  if (min > max) {
    let hold = max
    max = min
    min = hold
  }

  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getResolution = function(width) {
  if (width > 1023) {
    return 'dt'
  } else if (width > 767 && width < 1024) {
    return 'tb'
  } else if (width < 768) {
    return 'mb'
  }
}

export { random, getResolution }
