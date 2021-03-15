const express = require('express');
const router = express.Router()
const Members = require('../../controllers/Member');

router.post('/add', async (req, res, next) => {
    console.log("POST /add");
    Members.create(req, res);
});

router.get('/get/group/:groupId', async (req, res, next) => {
    console.log("GET /members/get/group/" + req.params.groupId);
    Members.findInGroup(req, res);
})

router.get("/get/:id", async (req, res, next) => {
    console.log("GET /members/get/" + req.params.id);
    Members.findOne(req, res);
})

router.get('/get', async (req, res, next) => {
    console.log("GET /members/get");
    Members.getAll(req, res);
});

router.put('/update/:id', async (req, res, next) => {
    console.log("PUT /members/update/" + req.params.id);
    Members.update(req, res);
})

router.delete('/delete/:id', async (req, res, next) => {
    console.log("DELETE /members/" + req.params.id);
    Members.delete(req, res);
})

module.exports = router;