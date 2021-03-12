const express = require('express');
const router = express.Router()
const Members = require('../../controllers/Member');

router.post('/add', async (req, res, next) => {
    console.log("POST /add");
    Members.create(req, res);
});

router.get('/get', async (req, res, next) => {
    console.log("GET /get");
    Members.getAll(req, res);
});



module.exports = router;