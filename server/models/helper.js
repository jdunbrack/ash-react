// Reusable error log/callback for model methods.

module.exports = function (err, callback) {
    if (err) {
        console.log("Error! ", err);
        callback(err, null);
        return true;
    }
    return false;
}