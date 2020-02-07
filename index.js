'use strict'
const express = require('express')
const exphbs = require('express-handlebars')
const http = require('http')

const Anagram = require('./anagram')
const Palindrome = require('./palindrome')
const Sorting = require('./sorting')

let hbs = exphbs.create({
    layoutsDir: './views',
    defaultLayout: 'default',
})

let app = express()

app.set('views', './views')
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use('/css', express.static('views/css'))
app.use('/static', express.static('node_modules'))

app.get('/', function (req, res, next) {
    let palindrome = Palindrome()
    let sorting = Palindrome()
    res.render('default', { palindrome, sorting })
})

app.get('/anagram/:gram1/:gram2', (req, res) => {
    let anagram = Anagram(req.params.gram1, req.params.gram2)
    res.json({ anagram })
})

app.get('/sorting', (req, res) => {
    let sorting = Sorting()
    res.json({ sorting })
})

const server = http.createServer(app)

server.listen('8080', function () {
    console.log('UI Listening on secure port 8080')
})
