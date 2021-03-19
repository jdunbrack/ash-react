const Task = require('../models/Task');
module.exports = {

    create: (req, res) => {
        try {
            newTask = new Task(req.body);
        } catch (err) {
            res.status(500).send('Request body must contain all properties.');
        }

        Task.create(newTask, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || 'SQL error on create' });
            } else {
                res.json(data);
            }
        })
    },
    update: (req, res) => {
        try {
            updatedTask = new Task(req.body);
        } catch (err) {
            res.status(500).send('Request body must contain all properties.');
        }

        Task.update(updatedTask, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on update" });
            } else {
                res.json(data);
            }
        })
    },
    delete: (req, res) => {
        Task.delete(req.params.id, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on delete"});
            } else {
                res.json(data);
            }
        })
    },
    findByGroup: (req, res) => {
        Task.findByGroup(groupId, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on find by group"});
            } else {
                res.json(data);
            }
        })
    },
    findByWorker: (req, res) => {
        Task.findByWorker(workerId, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message || "SQL error on find by worker"});
            } else {
                res.json(data);
            }
        })
    }

}