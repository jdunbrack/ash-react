const express = require('express')
const app = express();

const bodyParser = require('body-parser')

// parse JSON and urlenc data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Simple error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});
    // do not call next(), res already sent
    return;
});

// Hand over app to set up routes
require('./server/config/routes')(app)

app.listen(3000, () => { console.log("Server listening on localhost:3000")});