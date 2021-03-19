const express = require('express');
const router = express.Router();
const tasks = require('../../controllers/tasks.controller');

router.post('/', (req, res) => {
    console.log('POST /tasks/');
    tasks.create(req, res);
})

router.put('/', (req, res) => {
    console.log('PUT /tasks/');
    tasks.update(req, res);
})

router.get('/group/:groupId(\d+)', (req, res) => {
    console.log('GET /tasks/group/' + req.params.groupId)
    tasks.findByGroup(req, res);
})

router.get('/worker/:workerId', (req, res) => {
    console.log('GET /tasks/worker/' + req.params.workerId);
    tasks.findByWorker(req, res);
})

router.delete('/:id(\d+)', (req, res) => {
    console.log('DELETE /tasks/' + req.params.id);
    tasks.delete(req, res);
})