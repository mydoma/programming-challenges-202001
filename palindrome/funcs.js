const isPalindrome = (int) => {
    const str = int.toString()
    return str === reverseString(str)
}

const reverseString = (str) => {
    return str.split('').reverse().join('')
}

module.exports = isPalindrome