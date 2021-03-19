const Transaction = require('../models/Transaction');

module.exports = {

    create: (req, res) => {
        try {
            newTransaction = new Transaction(req.body);
        } catch (err) {
            res.status(500).send('Request body must contain all properties.');
        }

        Transaction.create(newTransaction, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on create"});
            } else {
                res.json(data);
            }
        })
    },
    update: (req, res) => {
        try {
            updatedTransaction = new Transaction(req.body);
        } catch (err) {
            res.status(500).send('Request body must contain all properties.');
        }

        Transaction.update(updatedTransaction, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on update"});
            } else {
                res.json(data);
            }
        })
    },
    delete: (req, res) => {
        Transaction.delete(req.params.id, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on delete"});
            } else {
                res.json(data);
            }
        })
    },
    findByPurchaser: (req, res) => {
        Transaction.findByPurchaser(req.params.purchaserId, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on lookup by purchaser"});
            } else {
                res.json(data);
            }
        })
    },
    findByContributor: (req, res) => {
        Transaction.findByContributor(req.params.contributorId, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on find by contributor"});
            } else {
                res.json(data);
            }
        })
    },
    findByContributorToPurchaser: (req, res) => {
        Transaction.findByContributorToPurchaser(contributorId, purchaserId, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on find by contributor to purchaser"});
            } else {
                res.json(data);
            }
        })
    },
    deleteByContributorToPurchaser: (req, res) => {
        Transaction.deleteByContributorToPurchaser(contributorId, purchaserId, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on delete by contributor to purchaser"});
            } else {
                res.json(data);
            }
        })
    }

}