module.exports = function(app) {
    app.use('/members', require('./routers/members.routes'));
    app.use('/groups/', require('./routers/groups.routes'));
}