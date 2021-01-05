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

export { random }
