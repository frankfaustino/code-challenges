/**
 * Event Emitter
 * The `subscribe` method will make it so that whenever `publish` is called with the `eventName`,
 * the callback provided is run. An event can have multiple callbacks subscribed to it.
 */

class EventEmitter {
  constructor() {
    this.events = new Map()
    this.count = 0
  }

  subscribe(eventName, callbackFn) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, {})
    }
    const tmp = this.count++
    this.events.get(eventName)[tmp] = callbackFn

    return () => {
      if (this.events.has(eventName)) {
        delete this.events.get(eventName)[tmp]
      }
    }
  }

  publish(eventName, ...data) {
    if (this.events.has(eventName)) {
      const obj = this.events.get(eventName)
      Object.keys(obj).forEach(fn => obj[fn](...data))
    }
  }
}

const emitter = new EventEmitter()
// emitter.subscribe('test', console.log)
// emitter.subscribe('test', data => console.log('👋 ' + data))
// emitter.publish('test', 'hello')
// "hello" will be logged
// "👋 hello" will be logged

/**
 * Follow-up question:
 * Make it so that assigning a subscribe function call to an `unsub` variable
 * and invoking `unsub` will unsubscribe (remove) the event from the emitter.
 */
const unsub = emitter.subscribe('test', console.log)
const unsub2 = emitter.subscribe('test', data => console.log(data))
emitter.subscribe('test', (...data) => console.log(`👋 ${data}`))
unsub()
unsub2()
emitter.publish('test', 'hello', 'hi', 'hey')
// "👋 hello,hi,hey" will be logged
