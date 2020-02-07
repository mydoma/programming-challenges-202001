const cleanString = (tryString) => {
    tryString = tryString.toLowerCase()
    const regExpr = /[^a-z]/g;
    return tryString.replace(regExpr, '')
}

const comparable = (str) => {
    str = cleanString(str)
    return str.split('').sort().join('')
}

module.exports = { cleanString, comparable }