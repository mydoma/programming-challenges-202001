const integers = (length, max) => {
   return Array(length).fill().map(() => Math.round(Math.random() * max))
}

const bubbleSort = (list) => {
    let length = list.length
    let allClear = false
    do {
        allClear = true
        for (let i = 0; i < length; i++) {
            if (list[i] > list[i + 1]) {
                let tmp = list[i]
                list[i] = list[i + 1]
                list[i + 1] = tmp
                allClear = false
            }
        }
    } while (!allClear)
    return list
}

module.exports = { integers, bubbleSort }