'use strict'

// const util = require('util')
// const mysql = require('mysql')
const db = require('../mysql')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM member'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    
}