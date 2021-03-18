const express = require('express');
const router = express.Router();
const Groups = require('../../controllers/groups.controller')

router.post('/add', (req, res) => {
    console.log("POST /groups/add")
    Groups.create(req, res);
})

router.put('/update', (req, res) => {
    console.log('PUT /groups/update')
    Groups.update(req, res);
})

router.get('/:id(\d+)', (req, res) => {
    console.log("GET /groups/" + req.params.id);
    Groups.findById(req, res);
})

router.get('/invite/:inviteCode([a-zA-Z\d]{6})', (req, res) => {
    console.log("GET /groups/invite/" + req.params.inviteCode);
    Groups.findByInviteCode(req, res);
})

router.get('/members/:memberId(\d+)', (req, res) => {
    console.log("GET /groups/member/" + req.params.memberId);
    Groups.findByMemberId(req, res);
})

router.get('/:id(\d+)/members', (req, res) => {
    console.log(`GET /${req.params.id}/members`);
    Groups.findMembers(req, res);
})

router.delete('/:id(\d+)', (req, res) => {
    console.log('DELETE /' + req.params.id)
    Groups.delete(req, res);
})

module.exports = router;