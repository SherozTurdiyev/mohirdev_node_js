const pool = require('../config/db')

const getUserList = async (req, res) => {
    try {
        const userslist = await pool.query('select * from user_info')
        console.log(userslist);
        res.json("Success user list")
    } catch (err) {
        console.log(err);
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id
        const user = await pool.query('SELECT * FROM user_info WHERE id= $1 ', [id])
        res.json(user.rows[0])
    } catch (error) {
        console.log(error);
    }
}

const postUserInfo = async (req, res) => {
    try {
        const {
            username,
            age
        } = req.body
        const result = await pool.query(`INSERT INTO user_info (username , age) VALUES  ($1 , $2)`, [username, age])
        console.log(result.command);
        res.json({
            success: true
        })

    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    getUserList,
    getUserById,
    postUserInfo
}