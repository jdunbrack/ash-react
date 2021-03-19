const sql = require('../db')
const errorHandler = require('./helper')

const Task = function (task) {
    this.id = task.id || null;
    this.name = task.name;
    this.description = task.description;
    this.workerId = task.workerId;
    this.groupId = task.groupId;
}

Task.create = (task, callback) => {
    sql.query(
        `INSERT INTO tasks VALUES (name, description, worker_id, group_id) VALUES (?,?,?,?)`,
        [
            task.name,
            task.description,
            task.worker,
            task.groupId
        ],
        (err, data) => {
            if (errorHandler(err, callback)) return;

            console.log("Created task: " + { ...task, id: data.insertId });
            callback(null, data);
        }
    )
}

Task.update = (updatedTask, callback) => {
    sql.query(
        `UPDATE SET name=?, description=?, worker_id=?, group_id=? WHERE id=?`,
        [
            updatedTask.name,
            updatedTask.description,
            updatedTask.workerId,
            updatedTask.groupId
        ],
        (err, data) => {
            if (errorHandler(err, callback)) return;

            console.log("Updated task: " + updatedTask);
            callback(null, data);
        }
    )
}

Task.delete = (id, callback) => {
    sql.query(
        `DELETE FROM tasks WHERE id=?`,
        id,
        (err, data) => {
            if (errorHandler(err, callback)) return;

            console.log("Deleted task: " + id);
            callback(null, data);
        }
    )
}

Task.findByGroup = (groupId, callback) => {
    sql.query(
        `SELECT * FROM tasks WHERE group_id=?`,
        groupId,
        (err, data) => {
            if (errorHandler(err, callback)) return;

            callback(null, data);
        }
    )
}

Task.findByWorker = (workerId, callback) => {
    sql.query(
        `SELECT * FROM tasks WHERE worker_id=?`,
        workerId,
        (err, data) => {
            if (errorHandler(err, callback)) return;

            callback(null, data);
        }
    )
}