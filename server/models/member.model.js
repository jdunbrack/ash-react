const sql = require('../db');

const Member = function (member) {
    this.firstName = member.firstName;
    this.lastName = member.lastName;
    this.email = member.email;
    this.password = member.password;
    this.groupId = member.groupId;
}

const errorHandler = (err) => {
    console.log("Error! ", err);
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
            if (err) {
                errorHandler(err);
                callback(err, null);
                return;
            }
            console.log("Created member: ", {id: data.insertId, ...newMember})
            callback(null, {id: data.insertId, ...newMember});
        })
};

Member.findAll = (callback) => {
    sql.query(
        `SELECT * FROM members LIMIT 100`,
        (err, data) => {
            if (err) {
                errorHandler(err)
                callback(err, null)
                return;
            }

            console.log("Found members.")
            callback(null, data)
        }
    )
}

module.exports = Member;