// Source : https://www.codewars.com/kata/determining-if-a-graph-has-a-solution/train/javascript
// Author : Frank Faustino
// Date   : 2019-01-05

function solve_graph(s, e, a) {
  let found = false
  const visited = []

  function recursive(start, end, arcs) {
    if (start === end) {
      found = true
    }

    arcs.map(arc => {
      if (arc.start === start && !visited.includes(arc.end)) {
        visited.push(arc.end)
        recursive(arc.end, end, arcs)
      }
    })
  }

  recursive(s, e, a)

  return found
}

// class Vertex {
//   constructor(value) {
//     this.value = value
//     this.edges = []
//   }

//   addEdge(edge) {
//     this.edges.push(edge)
//     return this
//   }

//   get toString() {
//     return this.value
//   }
// }

// class Edge {
//   constructor(start, end) {
//     this.start = start
//     this.end = end
//     this.key = `${start.toString}_${end.toString}`
//   }
// }

// class Graph {
//   constructor(isDirected = false) {
//     this.vertices = {}
//     this.edges = {}
//     this.isDirected = isDirected
//   }

//   addVertex(vertex) {
//     this.vertices[vertex.toString] = vertex
//     return this
//   }

//   addEdge(edge) {
//     let start = this.vertices[edge.start.toString]
//     let end = this.vertices[edge.end.toString]
    
//     if (!start) {
//       this.addVertex(edge.start)
//       start = this.vertices[edge.start.toString]
//     }
//     if (!end) {
//       this.addVertex(edge.end)
//       end = this.vertices[edge.end.toString]
//     }
//     if (this.edges[edge.key]) {
//       throw new Error('Edge has already been added before')
//     } else {
//       this.edges[edge.key] = edge
//     }
//     if (this.isDirected) {
//       start.addEdge(edge)
//     } else {
//       start.addEdge(edge)
//       end.addEdge(edge)
//     }
//     return this
//   }

//   bfs(start, end) {
//     const queue = []
//     const visited = []
//     queue.push(this.vertices[start])

//     while (queue.length) {
//       const current = queue.shift()
//       visited.push(current)

//       if (end === current.toString) {
//         return true
//       }

//       for (let edge of current.edges) {
//         const vertex = edge.end

//         if (!visited.includes(vertex)) {
//           queue.push(vertex)
//         }
//       }
//     }
//     return false
//   }
// }

// function solve_graph(s, e, arcs) {
//   const graph = new Graph(true)

//   arcs.forEach(({ start, end }) => {
//     const startVertex = new Vertex(start)
//     const endVertex = new Vertex(end)
//     const edge = new Edge(startVertex, endVertex)
//     graph.addEdge(edge)
//   })

//   return graph.bfs(s, e)
// }

module.exports = solve_graph