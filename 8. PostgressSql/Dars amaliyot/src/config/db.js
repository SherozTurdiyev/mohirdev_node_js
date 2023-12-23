const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: "211199",
    database: 'user_list',
    host: 'localhost',
    port: "5433"
})

module.exports = pool