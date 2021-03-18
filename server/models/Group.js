const sql = require('../db');
const errorHandler = require('./helper');

const Group = function(group) {
    this.id = group.id || null;
    this.name = group.name;
    this.owner = group.owner;
    this.inviteCode = group.inviteCode;
    this.members = group.members;
}

Group.create = (group, callback) => {
    sql.query(
        `INSERT INTO groups VALUES (name, owner, invite_code, members) VALUES (?,?,?,?)`, 
        [
            group.name,
            group.owner,
            group.inviteCode,
            group.members
        ],
        (err, data) => {
            if (errorHandler(err, callback)) return;

            console.log('Created new group: ' + {...data, id: data.insertId})
            callback(null, data);
        }
    )
}

Group.findById = (id, callback) => {
    sql.query(
        `SELECT * FROM groups WHERE id=?`, id, (err, data) => {
            if (errorHandler(err, callback)) return;

            callback(null, data);
        }
    )
}

Group.findByInviteCode = (inviteCode, callback) => {
    sql.query(
        `SELECT * FROM groups WHERE invite_code=?`, inviteCode, (err, data)=> {
            if (errorHandler(err, callback)) return;

            callback(null, data);
        }
    )
}

Group.findByMemberId = (memberId, callback) => {
    sql.query(
        `SELECT * FROM groups WHERE ? IN members`, memberId, (err, data) => {
            if (errorHandler(err, callback)) return;

            callback(null, data);
        }
    )
}

Group.findMembers = (id, callback) => {
    sql.query(
        `SELECT groups.member_id, members.* FROM groups LEFT JOIN members ON groups.member_id=members.member_id WHERE group_id=?`,
        id,
        (err, data) => {
            if (errorHandler(err, callback)) return;

            callback(null, data);
        }
    )
}

Group.update = (updatedGroup, callback) => {
    sql.query(
        `UPDATE members SET name=?, owner=?, invite_code=?, members=? WHERE id=?`,
        [
            updatedGroup.name,
            updatedGroup.owner,
            updatedGroup.inviteCode,
            updatedGroup.members,
            updatedGroup.id
        ],
        (err, data) => {
            if (errorHandler(err, callback)) return;

            console.log("Updated group: " + updatedGroup);
            callback(null, data);
        }
    )
}

Group.delete = (id, callback) => {
    sql.query(
        `DELETE FROM groups WHERE id=?`, id, (err, data) => {
            if (errorHandler(err, callback)) return;

            console.log("Deleted group: " + id);
            callback(null, data);
        }
    )
}

module.exports = Group;