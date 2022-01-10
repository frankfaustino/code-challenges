function getCount(str) {
    let vowelsCount = 0
    const vowels = { a: true, e: true, i: true, o: true, u: true }
    for (let i = 0; i < str.length; i++) {
        if (vowels[str[i]]) vowelsCount++
    }
    return vowelsCount
}

module.exports = getCount
