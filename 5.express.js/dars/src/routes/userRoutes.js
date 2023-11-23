const { Router } = require('express');
const router = Router()
const path = require('path')

router.get('/add-user', (req, res) => {
    res.sendFile(path.join(__dirname , '..' , 'views' , 'add-user.html'))
})

router.post('/', (req, res) => {
    console.log(req.body.username);
    res.redirect('/')
})

module.exports = router