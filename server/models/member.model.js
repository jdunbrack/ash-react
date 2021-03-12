const e = require('express');
const sql = require('../db');

const Member = function (member) {
    this.firstName = member.firstName;
    this.lastName = member.lastName;
    this.email = member.email;
    this.password = member.password;
    this.groupId = member.groupId;
}

const responseHandler = (err, callback) => {
    if (err) {
        console.log("Error! ", err);
        callback(err, null);
        return true;
    }
    callback(null, data)
    return false;
}

Member.create = (newMember, callback) => {
    sql.query(
        `INSERT INTO members (first_name, last_name, email, password, group_id) VALUES (?,?,?,?,?)`,
        [
            newMember.firstName,
            newMember.lastName,
            newMember.email,
            newMember.password,
            newMember.groupId
        ],
        (err, data) => {
            if (errorHandler(err, callback)) return;

            console.log("Created member: ", {id: data.insertId, ...newMember});
            callback(null, {id: data.insertId, ...newMember});
        })
};

Member.findAll = (callback) => {
    sql.query(
        `SELECT * FROM members LIMIT 100`,
        (err, data) => {
            if (errorHandler(err, callback)) return;

            console.log("Found members.")
            callback(null, data);
        }
    )
}

Member.findById = (id, callback) => {
    sql.query(
        `SELECT * FROM members WHERE id=?`, id,
        (err, data) => {
            if (errorHandler(err, callback)) return;

            callback(null, data);
        }
    )
}

Member.update = (id, updatedMember, callback) => {
    sql.query(
        `UPDATE members SET first_name=?, last_name=?, email=?, password=?, groupId=? WHERE id=?`,
        [
            updatedMember.firstName,
            updatedMember.lastName,
            updatedMember.email,
            updatedMember.password,
            updatedMember.groupId,
            id
        ],
        (err, data) => {
            if (err) {
                errorHandler(err);
                callback(err, null);
                return;
            }

            callback(null, data);
        }
    )
}

Member.delete = (id, callback) => {
    sql.query(
        `DELETE FROM members WHERE id=?`, id,
        (err, data) => {
            if (err) {
                errorHandler(err);
                callback(err, null);
                return;
            }

            callback(null, data);
        }
    )
}

Member.findByGroupId = (groupId, callback) => {
    sql.query(
        `SELECT * FROM members WHERE group_id=?`, group_id,
        (err, data) => {
            if (err) {
                errorHandler(err);
                callback(err, null);
                return;
            }
        }
    )
}

module.exports = Member;