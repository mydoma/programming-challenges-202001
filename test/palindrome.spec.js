const isPalindrome = require('../palindrome/funcs')
const getLargestPalindrome = require('../palindrome')
const expect = require('chai').expect

describe('Palindromes', function() {
    describe('Should distinguish between palindromes and non-palindromes', function () {
        it('should return true when called with a palindrome', function () {
            expect(isPalindrome(50605)).to.be.true
        })
        it('should return false when called with a non-palindrome', function () {
            expect(isPalindrome(34567)).to.be.false
        })
    })

    describe('Should return the largest palindrome that is the product of two three-digit numbers', function () {
        it('should return 906609', function () {
            expect(getLargestPalindrome()).to.equal(906609)
        })
    })
})