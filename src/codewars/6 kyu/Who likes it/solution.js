// Source : https://www.codewars.com/kata/5266876b8f4bf2da9b000362
// Author : Frank Faustino
// Date   : 2024-01-22

function likes(names) {
    console.log(names)
    switch (names.length) {
        case 0: return `no one likes this`
        case 1: return `${names[0]} likes this`
        case 2: return `${names.join(' and ')} like this`
        case 3: return `${names.slice(0, 2).join(', ')} and ${names[2]} like this`
        default: return `${names.slice(0, 2).join(', ')} and ${names.slice(2).length} others like this`
    }
}

module.exports = likes

