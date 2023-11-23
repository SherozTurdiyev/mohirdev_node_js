const { Router } = require('express');
const router = Router()
const path = require('path')
const books = require('../fakeJson/book.json')

router.get('/', (req, res, next) => {
    res.send(books)
})

router.get('/:id', (req, res, next) => {
    const book = books.find(item => item?.id == req?.params?.id)
    if (!!book) {
        res.send(book)
    } else {
        res.send(`<h1>Kitob topilmadi...!</h1>`)
    }
})

router.post('/post-book', (req, res, next) => {
    books.push({ ...req.body, id: books[books.length - 1].id + 1 })
    res.send(books)
})

router.put('/:id', (req, res, next) => {
    let book = books.find((item) => req?.params?.id == item.id)
    if (!!book) {
        book.author = req.body.author
        book.title = req.body.title
        res.send(book)
    } else {
        res.send('bu kitob mavjud emas!')
    }
})

router.delete('/:id', (req, res, next) => {
    let book = books.find((item) => req?.params?.id == item.id)
    if (!!book) {
        books.forEach((item, index) => {
            if (item.id == req.params.id) {
                books.splice(index, 1)
            }
        })
        res.send(books)
    } else {
        res.send('bu kitob mavjud emas!')
    }
})


module.exports = router