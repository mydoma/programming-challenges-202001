const isPalindrome = require('./funcs')

const getLargestPalindrome = () => {
    let palindromes = []
    for (let i = 990; i < 100, i-=11;) {
        for (let j = 999; i < 100, j--;) {
            if (isPalindrome(i*j)) {
                palindromes.push(i*j)
            }
        }
    }
    return Math.max(...palindromes)
}

module.exports = getLargestPalindrome

