// app/routes.js

// Models
var Agent = require('./models/Agent');
var Operation = require('./models/Operation');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/agents', function(req, res) {
        // use mongoose to get all nerds in the database
        Agent.find(function(err, agents) {

            // if there is an error retrieving, send the error. 
                            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(agents); // return all nerds in JSON format
        });
    });
    app.post('/api/agents', function(req, res) {
        // use mongoose to get all nerds in the database
        Agent.create(req.body, function(err, agent) {

            // if there is an error retrieving, send the error. 
                            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(agent); // return all nerds in JSON format
        });
    });
    app.get('/api/agents/:unpId', function(req, res) {
        var unpId = req.params.unpId;

        // use mongoose to get all nerds in the database
        Agent.find({unpId: unpId}, function(err, agents) {

            // if there is an error retrieving, send the error. 
                            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(agents); // return all nerds in JSON format
        });
    });

    app.get('/api/operations', function(req, res) {

        // use mongoose to get all nerds in the database
        Operation.find(function(err, operations) {

            // if there is an error retrieving, send the error. 
                            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(operations); // return all nerds in JSON format
        });
    });

    app.post('/api/operations', function(req, res) {

        // use mongoose to get all nerds in the database
        Operation.create(req.body, function(err, operations) {

            // if there is an error retrieving, send the error. 
                            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(operations); // return all nerds in JSON format
        });
    });
    app.get('/api/operations/:operationId', function(req, res) {

        var operationId = req.params.operationId;

        // use mongoose to get all nerds in the database
        Operation.find({operationId: operationId}, function(err, operations) {

            // if there is an error retrieving, send the error. 
                            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(operations); // return all nerds in JSON format
        });
    });
    app.get('/api/operationsbyagent/:unpId', function(req, res) {

        var unpId = req.params.unpId;

        // use mongoose to get all nerds in the database
        Operation.find({unpId: unpId}, function(err, operations) {

            // if there is an error retrieving, send the error. 
                            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(operations); // return all nerds in JSON format
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('/*', function(req, res) {
        var path = require('path');
        res.sendfile(path.resolve('public/index.html')); // load our public/index.html file
    });

};
