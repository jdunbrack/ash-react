const Group = require('../models/Group')

module.exports = {

    create: (req, res) => {
        try {
            newGroup = new Group(req.body);
        } catch (err) {
            res.status(500).send("Request body must contain all properties.");
        }

        Group.create(newGroup, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on create."});
            } else {
                res.json(data);
            }
        })
    },
    update: (req, res) => {
        try {
            updatedGroup = new Group(req.body);
        } catch (err) {
            res.status(500).send("Request body must contain all properties.");
        }

        Group.update(updatedGroup, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on update."})
            } else {
                res.json(data);
            }
        })

    },
    findById: (req, res) => {
        Group.findById(req.params.id, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on find by ID"})
            } else {
                res.json(data);
            }
        })
    },
    findByMemberId: (req, res) => {
        Group.findByMemberId(req.params.memberId, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on find by Member"});
            } else {
                res.json(data);
            }
        })
    },
    findByInviteCode: (req, res) => {
        Group.findByInviteCode(req.params.inviteCode, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on find by Invite Code"});
            } else {
                res.json(data);
            }
        })
    },
    findMembers: (req, res) => {
        Group.findMembers(req.params.id, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on find members by group"});
            } else {
                res.json(data);
            }
        })
    },
    delete: (req, res) => {
        Group.delete(req.params.id, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on delete"});
            } else {
                res.json(data);
            }
        })
    },

}