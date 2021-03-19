const sql = require('../db');
const errorHandler = require('./helper');

const Transaction = function (transaction) {
    this.id = transaction.id || null;
    this.amount = transaction.amount,
    this.vendor = transaction.vendor,
    this.description = transaction.description,
    this.purchaserId = transaction.purchaserId,
    this.contributorId = transaction.contributorId,
    this.paid = transaction.paid
}

Transaction.create = (transaction, callback) => {
    sql.query(
        `INSERT INTO transactions VALUES amount, vendor, description,
        purchaser_id, contributor_id, paid VALUES (?,?,?,?,?)`,
        [
            transaction.amount,
            transaction.vendor,
            transaction.description,
            transaction.purchaserId,
            transaction.contributorId,
            transaction.paid
        ],
        (err, data) => {
            if (errorHandler(err, callback)) return;

            console.log('Created transaction: ' + { ...transaction, id: data.insertId });
            callback(null, data);
        }
    )
}

Transaction.update = (updatedTransaction, callback) => {
    sql.query(
        `UPDATE updatedTransactions SET amount=?, vendor=?, description=?,
        purchaser_id=?, contributor_id=?, paid=? WHERE id=?`,
        [
            updatedTransaction.amount,
            updatedTransaction.vendor,
            updatedTransaction.description,
            updatedTransaction.purchaserId,
            updatedTransaction.contributorId,
            updatedTransaction.paid,
            updatedTransaction.id
        ],
        (err, data) => {
            if (errorHandler(err, callback)) return;

            console.log("Updated transaction: " + updatedTransaction);
            callback(null, data);
        }
    )
}

Transaction.delete = (id, callback) => {
    sql.query(
        `DELETE FROM transactions WHERE id=?`,
        id,
        (err, data) => {
            if (errorHandler(err, callback)) return;

            console.log("Deleted transaction: " + id);
            callback(null, data);
        }
    )
}

Transaction.findByPurchaser = (purchaserId, callback) => {
    sql.query(
        `SELECT * FROM transactions WHERE purchaser_id=?`,
        purchaserId,
        (err, data) => {
            if (errorHandler(err, callback)) return;

            callback(null, data);
        }
    )
}

Transaction.findByContributor = (contributorId, callback) => {
    sql.query(
        `SELECT * FROM transactions WHERE contributor_id=?`,
        contributorId,
        (err, data) => {
            if (errorHandler(err, callback)) return;

            callback(null, data);
        }
    )
}

Transaction.findByContributorToPurchaser = (contributorId, purchaserId, callback) => {
    sql.query(
        `SELECT * FROM transactions WHERE contributor_id=? AND purchaser_id=?`,
        [
            contributorId,
            purchaserId
        ],
        (err, data) => {
            if (errorHandler(err, callback)) return;

            callback(null, data);
        }
    )
}

Transaction.deleteByContributorToPurchaser = (contributorId, purchaserId, callback) => {
    sql.query(
        `DELETE FROM transactions WHERE contributor_id=? AND purchaser_id=?`,
        [
            contributorId,
            purchaserId
        ],
        (err, data) => {
            if (errorHandler(err, callback)) return;

            console.log(`Deleted transactions that ${contributor_id} owed to ${purchaserId}`);
            callback(null, data);
        }
    )
}

module.exports = Transaction;