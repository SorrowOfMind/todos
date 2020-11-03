const router = require('express').Router();
const db = require('../db');

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

module.exports = router;