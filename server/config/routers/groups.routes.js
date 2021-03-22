const express = require('express');
const router = express.Router();
const Groups = require('../../controllers/groups.controller')

router.post('/', (req, res) => {
    console.log('POST /groups/')
    Groups.create(req, res);
})

router.put('/', (req, res) => {
    console.log('PUT /groups/')
    Groups.update(req, res);
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
    console.log(`GET /groups/${req.params.id}/members`);
    Groups.findMembers(req, res);
})

router.get('/:id(\d+)', (req, res) => {
    console.log("GET /groups/" + req.params.id);
    Groups.findById(req, res);
})

router.delete('/:id(\d+)', (req, res) => {
    console.log('DELETE /groups/' + req.params.id)
    Groups.delete(req, res);
})

module.exports = router;