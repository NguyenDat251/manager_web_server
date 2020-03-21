'use strict'

const db = require('../mysql')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM project'
        db.query(sql, (err, response) => {
            if (err) console.log(err)
            res.json(response)
        })
    },
    add: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO project SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) console.log(err)
            res.json({message: 'Insert success!'})
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM member WHERE projectID = ?'
        //let sql = 'SELECT * FROM member WHERE projectID =  1'
        db.query(sql, [req.params.projectId], (err, response) => {
            console.log(req.params.projectID)
            if (err) console.log(err)
            res.json(response)
        })
    },
    update: (req, res) => {
        let data = req.body;
        let projectID = req.params.projectID;
        let sql = 'UPDATE project SET ? WHERE id = ?'
        db.query(sql, [data, projectId], (err, response) => {
            if (err) console.log(err)
            res.json({message: 'Update success!'})
        })
    },
}