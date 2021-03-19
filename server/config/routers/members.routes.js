const express = require('express');
const router = express.Router()
const Members = require('../../controllers/members.controller');

router.post('/', (req, res) => {
    console.log('POST /members/');
    Members.create(req, res);
});

router.put('/', (req, res) => {
    console.log('PUT /members/');
    Members.update(req, res);
})

router.get('/get/group/:groupId', (req, res) => {
    console.log('GET /members/get/group/' + req.params.groupId);
    Members.findInGroup(req, res);
})

router.get('/get/:id', (req, res) => {
    console.log('GET /members/get/' + req.params.id);
    Members.findOne(req, res);
})

router.get('/get', (req, res) => {
    console.log('GET /members/get');
    Members.getAll(req, res);
});

router.delete('/delete/:id', (req, res) => {
    console.log('DELETE /members/' + req.params.id);
    Members.delete(req, res);
})

module.exports = router;