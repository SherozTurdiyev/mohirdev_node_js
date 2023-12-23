const route = require('express').Router()
const {
    getUserList,
    postUserInfo,
    getUserById
} = require('../controllers/users')

route.get("/get-list", getUserList);
route.get('/:id', getUserById)
route.post('/add', postUserInfo);

module.exports = route