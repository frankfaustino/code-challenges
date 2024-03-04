// Source : https://www.codewars.com/kata/523c7fbb0d47a759580000e2
// Author : Frank Faustino
// Date   : 2024-03-04
// Tags   : reverse-engineering

// list the properties of the global object this
Object.keys(this).forEach(p => console.log(p))

// the standard properties of this in Node env
const properties = [
    'console',
    'global',
    'process',
    'Buffer',
    'clearImmediate',
    'clearInterval',
    'clearTimeout',
    'setImmediate',
    'setInterval',
    'setTimeout',
    '__filename',
    'exports',
    'module',
    '__dirname',
    'require'
]

// filter out the standard properties to find the secret key
const key = Object.keys(this)
    .filter(k => !properties.includes(k))

const wire = key[0]

CutTheWire(this[wire])

// CutTheWire's function definition

// console.log(CutTheWire.toString())
// function CutTheWire(wireCode) {
//   Test.expect(typeof wireCode === 'number', 'BOOM! You have to specify which wire to cut!');
//   Test.expect(wireCode === global[theWire], 'BOOM! You cut the wrong wire!');
//   delete this[theWire];
// }

