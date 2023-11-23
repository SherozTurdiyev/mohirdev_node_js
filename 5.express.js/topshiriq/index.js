const express = require('express');
const bookRoutes = require('./src/routes/bookRoutes')
const path = require('path')

const app = express()
const port = 8080

// middleware
app.use(express.json())
// app.use(express.static(path.join(__dirname, 'src', 'fakeJson')))

// routes
app.use('/books', bookRoutes)
app.use('*', (req, res, next) => {
    // res.send(`<h1>404 not found</h1>`)
})


app.listen(3000, () => {
    console.log("backend running ...");
})