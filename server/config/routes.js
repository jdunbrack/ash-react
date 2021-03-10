module.exports = function(app) {
    app.use('/members', require('./routers/members'));
}