const { cleanString, comparable } = require('../anagram/funcs')
const isAnagram = require('../anagram')
const expect = require('chai').expect

describe('Anagrams', function() {

    describe('Clean a string', function () {
        it('should return a string of only lower-case letters', function () {
            let tval = cleanString('These & churn ?? air')
            expect(tval).to.equal('thesechurnair')
        })
    })

    describe('Sort a string', function () {
        it('should sort strings alphabetically', function () {
            let a = 'The Quick brown fox,'
            let expected = 'bcefhiknooqrtuwx'
            let tval = comparable(a)
            expect(tval).to.deep.equal(expected)
        })
    })

    describe('Should recognise anagrams', function () {
        it('should return true when comparing (Debit Card, Bad Credit)', function () {
            let ana = isAnagram('Debit Card', 'Bad Credit')
            expect(ana).to.be.true
        })

        it('should return true when comparing (Astronomer, Moon starer)', function () {
            let ana = isAnagram('Astronomer', 'Moon starer')
            expect(ana).to.be.true
        })

        it('should return true when comparing (These churn air, The Hurricanes)', function () {
            let ana = isAnagram('These churn air', 'The Hurricanes')
            expect(ana).to.be.true
        })

        it('should return false when comparing (Dormitory, Dirty rooms)', function () {
            let ana = isAnagram('Dormitory', 'Dirty rooms')
            expect(ana).to.be.false
        })
    })
})

