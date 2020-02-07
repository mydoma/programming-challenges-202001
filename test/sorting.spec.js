const { integers, bubbleSort } = require('../sorting/funcs')
const expect = require('chai').expect

describe('Sorting', function() {

    describe('Should get an array of integers', function () {
        it('should return an array of length (5)', function () {
            let tval = integers(5, 5)
            expect(tval).to.have.length(5)
        })
        it('should return an array of length (100)', function () {
            let tval = integers(100, 5)
            expect(tval).to.have.length(100)
        })
        it('should return an array with all members less than (50)', function () {
            let tval = integers(100, 50)
            expect(Math.max(...tval)).to.satisfy((n) => n <= 50)
        })
    })

    describe('Sort an array', function () {
        it('should sort an array of integers correctly', function () {
            let expected = [1, 3, 5, 6, 12]
            let tval = bubbleSort([3, 1, 12, 5, 6])
            expect(tval).to.deep.equal(expected)
        })
    })
})