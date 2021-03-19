const express = require('express');
const router = express.Router();
const transactions = require('../../controllers/transactions.controller');

router.post('/', (req, res) => {
    console.log("POST /transactions/");
    transactions.create(req, res);
})

router.put('/', (req, res) => {
    console.log('PUT /transactions/');
    transactions.update(req, res);
})

router.get('/incoming/:memberId(\d+)', (req, res) => {
    console.log('GET /transactions/incoming/' + req.params.memberId);
    transactions.findByPurchaser(req, res);
})

router.get('/outgoing/:memberId(\d+)', (req, res) => {
    console.log('GET transactions//outgoing/' + req.params.memberId);
    transactions.findByContributor(req, res);
})

router.get('/:contributorId(\d+)/owes/:purchaserId(\d+)', (req, res) => {
    console.log(`GET /transactions/${req.params.contributorId}/owes/${req.params.purchaserId}`);
    transactions.findByContributorToPurchaser(req, res);
})

router.delete('/:id(\d+)', (req, res) => {
    console.log('DELETE /transactions/' + req.params.id);
    transactions.delete(req.params.id);
})

router.delete('/:contributorId(\d+)/owes/:purchaserId(\d+)', (req, res) => {
    console.log(`DELETE /transactions/${req.params.contributorId}/owes/${req.params.purchaserId}`);
    transactions.deleteByContributorToPurchaser(req, res);
})