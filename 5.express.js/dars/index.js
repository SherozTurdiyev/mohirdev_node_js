const express = require('express')
const app = express()
const path = require('path')

// import routes
const userRoutes = require('./src/routes/userRoutes')
const mainRoutes = require('./src/routes/mainRoutes')
const { log } = require('console')

// middleware lists
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname , 'src' , 'style')))

// /routes list
app.use('/user', userRoutes)
app.use(mainRoutes)

app.use((req, res, next) => {
  console.log(path.join(__dirname, "src", 'views', "404.html"));
  res.status(404).sendFile(path.join(__dirname, 'src', 'views', '404.html'))
})



app.listen(3000, () => { console.log('backend running...'); });