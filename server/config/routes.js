module.exports = function(app) {
    app.use('/members', require('./routers/members.routes'));
    app.use('/groups', require('./routers/groups.routes'));
    app.use('/transactions', require('./routers/transactions.routes'));
    app.use('/tasks', require('./routers/tasks.routes'));
}