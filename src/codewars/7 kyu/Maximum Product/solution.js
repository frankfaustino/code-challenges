// Source : https://www.codewars.com/kata/5a4138acf28b82aa43000117
// Author : Frank Faustino
// Date   : 2024-02-06

// Time complexity  : O(n)
// Space complexity : O(1)
function adjacentElementsProduct(array) {
    let maxProduct
    for (let i = 0; i < array.length - 1; i++) {
        const curProduct = array[i] * array[i+1]
        if (maxProduct === undefined || curProduct > maxProduct) {
            maxProduct = curProduct
        }
    }
    return maxProduct
}

module.exports = adjacentElementsProduct

