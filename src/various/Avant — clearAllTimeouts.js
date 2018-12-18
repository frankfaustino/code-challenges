/**
 * Write a function clearAllTimeouts that clears all active setTimeouts
 */

(() => {
  let timeoutsArray = []
  const originalSetTimeout = global.setTimeout
  const originalClearTimeout = global.clearTimeout

  global.setTimeout = (fn, duration) => {
    const timeoutId = originalSetTimeout(fn, duration)
    timeoutsArray.push(timeoutId)

    return timeoutId
  }

  global.clearTimeout = (id) => {
    const index = timeoutsArray.indexOf(id)
    if (index >= 0) {
      originalClearTimeout(id)
      timeoutsArray.splice(index, 1)
    }
  }

  global.clearAllTimeouts = () => {
    timeoutsArray.forEach(timeoutId => originalClearTimeout(timeoutId))
    timeoutsArray = []
  }
})()

setTimeout(() => console.log('hello 1'), 1000)
setTimeout(() => console.log('hello 2'), 1000)
setTimeout(() => console.log('hello 3'), 1000)

clearAllTimeouts()

/**
 * Follow-up question:
 * What if we called setTimeout 1000000× but immediately clear them?
 */

for (let i = 0; i < 1000000; i++) {
  clearTimeout(setTimeout(() => console.log(`hello ${i}`), 1000))
}
