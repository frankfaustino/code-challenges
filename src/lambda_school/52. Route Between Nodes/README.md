# Route Between Nodes

Given a directed graph, design an algorithm to find out whether there is a route between two nodes.

Google "directed graph" and look under images for visual examples.

*Bonus: Write both DFS and BFS methods. You'll have to comment one*

#### Example:

```js
const graph = {
  a: {
    value: 'a',
    edges: []
  },
  b: {
    value: 'b',
    edges: []
  },
  c: {
    value: 'c',
    edges: []
  },
  d: {
    value: 'd',
    edges: []
  },
  e: {
    value: 'e',
    edges: []
  },
}

graph.a.edges.push(graph.b, graph.d, graph.e)
graph.b.edges.push(graph.a, graph.e)
graph.d.edges.push(graph.e)
graph.e.edges.push(graph.c, graph.a)
console.log(routeBetweenNodes(graph.a, graph.c)) // true
console.log(routeBetweenNodes(graph.c, graph.a)) // false
```