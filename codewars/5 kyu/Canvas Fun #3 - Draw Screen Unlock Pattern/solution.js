// Source : https://codewars.com/kata/canvas-fun-number-3-draw-screen-unlock-pattern/
// Author : Frank Faustino
// Date   : 2018-07-09
// Lang   : JavaScript

const canvas = new Canvas(90, 160)
const ctx = canvas.getContext('2d')

function Vertices() {
 return {
    1: { coords: [15, 50], touched: false, edges: [] },
    2: { coords: [45, 50], touched: false, edges: [] },
    3: { coords: [75, 50], touched: false, edges: [] },
    4: { coords: [15, 80], touched: false, edges: [] },
    5: { coords: [45, 80], touched: false, edges: [] },
    6: { coords: [75, 80], touched: false, edges: [] },
    7: { coords: [15, 110], touched: false, edges: [] },
    8: { coords: [45, 110], touched: false, edges: [] },
    9: { coords: [75, 110], touched: false, edges: [] }
  }
}

const drawBG = vertices => {
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, 90, 160)
  ctx.strokeStyle = 'white'
  ctx.strokeRect(0, 0, 90, 160)

  for (let i in vertices) {
    if (vertices.hasOwnProperty(i)) {
      drawCircle(vertices[i].coords, 2, 'yellow', true)
      drawCircle(vertices[i].coords, 6, 'gray')
    }
  }
}

const drawCircle = (num, radius, color, fill = false) => {
  ctx.beginPath()
  ctx.arc(...num, radius, 0, 2 * Math.PI)
  if (fill) {
    ctx.fillStyle = 'yellow'
    ctx.fill()
  } else {
    ctx.strokeStyle = color
    ctx.stroke()
  }
  ctx.closePath()
}

const drawLine = (start, end) => {
  ctx.beginPath()
  ctx.strokeStyle = 'yellow'
  ctx.moveTo(...start)
  ctx.lineTo(...end)
  ctx.stroke()
  ctx.closePath()
}

const draw = seq => {
  let i = 0
  const vertices = Vertices()
  drawBG(vertices)

  if (seq.length > 1) {
    while (i < seq.length) {
      if (!vertices[seq[i]].touched) {
        drawCircle(vertices[seq[i]].coords, 6, 'yellow')
        vertices[seq[i]].touched = true
      }
      if (vertices[seq[i]].edges.includes(seq[i - 1])) {
        i++
        continue
      }
      if (i > 0) {
        vertices[seq[i - 1]].edges.push(seq[i])
        vertices[seq[i]].edges.push(seq[i - 1])
        drawLine(vertices[seq[i - 1]].coords, vertices[seq[i]].coords)
      }
      i++
    }
  }

  return canvas.toDataURL()
}
