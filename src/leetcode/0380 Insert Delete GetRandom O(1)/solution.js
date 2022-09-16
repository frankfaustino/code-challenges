class RandomizedSet {
  constructor() {
    this.map = new Map()
    this.list = []
  }

  insert(val) {
    if (this.map.has(val)) return false
    this.map.set(val, this.list.length)
    this.list.push(val)
    return true
  }

  remove(val) {
    if (!this.map.has(val)) return false
    const i = this.map.get(val)
    this._swap(i, this.list.length - 1)
    this.list.pop()
    this.map.set(this.list[i], i)
    this.map.delete(val)
    return true
  }

  getRandom() {
    return this.list[Math.floor(Math.random() * this.list.length)]
  }

  _swap(a, b) {
    const tmp = this.list[a]
    this.list[a] = this.list[b]
    this.list[b] = tmp
  }
}

var obj = new RandomizedSet()
var param_1 = obj.insert(1)
console.log(param_1)
var param_2 = obj.remove(2)
console.log(param_2)
var param_3 = obj.insert(2)
console.log(param_3)
var param_4 = obj.getRandom()
console.log(param_4)
var param_5 = obj.remove(1)
console.log(param_5)
var param_6 = obj.insert(2)
console.log(param_6)
var param_7 = obj.getRandom()
console.log(param_7)
