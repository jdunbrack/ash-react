const Member = require('../models/member.model');

module.exports = {
    create: (req, res) => {
        try {
            newMember = new Member(req.body)
        } catch (err) {
            res.status(500).send("Request body must have all fields filled.")
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
                res.status(500).send({ message: err.message || "SQL error on findAll"});
            } else {
                res.json(data);
            }
        })
    }
}