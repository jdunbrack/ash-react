const sql = require('../db');
const errorHandler = require('./helper');

const Group = function(group) {
    this.id = group.id;
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

}

Group.findMembers = (id, callback) => {

}

Group.update = (updatedGroup, callback) => {

}

Group.delete = (id, callback) => {
    
}