const router = require('express').Router();
const db = require('../db');

router.get('/todos', async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM todo", null);
        res.status(200).json({
            status: "success",
            data: results.rows
        })
    } catch (err) {
        alert(err.message);
    }
});

router.get('/todos/:id', async (req, res) => {
    const values = [req.params.id];
    const text = "SELECT * FROM todo WHERE todo_id=$1";
    try {
        const results = await db.query(text, values);
        res.status(200).json({
            status: "success",
            data: results.rows
        })
    } catch (err) {
        console.log(err.messagge);
    }
});

router.put('/todos/:id', async (req, res) => {
    const {description} = req.body;
    const {id} = req.params;
    const values = [id, description];
    const text = "UPDATE todo SET description=$2 WHERE todo_id=$1 RETURNING *";
    try {
        const results = await db.query(text, values);
        res.status(201).json({
            status: "success",
            data: results.rows[0]
        })
    } catch (err) {
        console.log(err.message);
    }
});

router.post('/todos', async (req, res) => {
    const {description} = req.body;
    const values = [description];
    const text = "INSERT INTO todo (description) VALUES ($1) returning *";
    try {
        const results = await db.query(text, values);
        res.status(201).json({
            status: "success",
            data: results.rows[0]
        })
    } catch (err) {
        alert(err.message);
    }
});

router.delete('/todos/:id', async (req, res) => {
    const values = [req.params.id];
    const text = "DELETE FROM todo WHERE todo_id=$1 RETURNING *";
    try {
        const results = await db.query(text, values);
        res.status(200).json({
            status: "success",
            data: results.rows[0]
        });
    } catch (err) {
        console.log(err.message);
    }
})

module.exports = router;