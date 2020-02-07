const { integers, bubbleSort } = require('../sorting/funcs')

const getSortedList = (length = 100, max = 99) => {
    const list = integers(length, max)
    return(bubbleSort(list))
}

module.exports = getSortedList
