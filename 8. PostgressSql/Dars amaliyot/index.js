const express = require('express')

// routes
const user_route = require('./src/routes/users')

// middleware
const app = express()
app.use(express.json())
app.use('/api/v1/user' , user_route)



app.listen(8080, () => {
    console.log("server running...");
})