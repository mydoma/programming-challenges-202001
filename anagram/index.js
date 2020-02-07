const comparable  = require('./funcs')

const isAnagram = (a, b) => {
   return comparable(a) === comparable(b)
}

module.exports = isAnagram