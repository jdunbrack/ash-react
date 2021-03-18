const Member = require('../models/Member');

module.exports = {
    create: (req, res) => {
        try {
            newMember = new Member(req.body)
        } catch (err) {
            res.status(500).send("Request body must contain all properties.")
        }

        Member.create(newMember, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on create" });
            } else {
                res.json(data);
            }
        })
    },
    getAll: (req, res) => {
        Member.findAll((err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on find all"});
            } else {
                res.json(data);
            }
        })
    },
    update: (req, res) => {
        try {
            updatedMember = new Member(req.body);
        } catch (err) {
            res.status(500).send("Request body must contain all properties.")
        }

        Member.update(updatedMember, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on update" })
            } else {
                res.json(data);
            }
        })
    },
    findOne: (req, res) => {
        Member.findById(req.params.id, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on lookup by id"})
            } else {
                res.json(data);
            }
        })
    },
    delete: (req, res) => {
        Member.delete(req.params.id, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on delete"})
            } else {
                res.json(data);
            }
        })
    },
    findInGroup: (req, res) => {
        Member.findByGroupId(req.params.groupId, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on lookup by group"})
            } else {
                res.json(data);
            }
        })
    }
}