const mongoose = require('mongoose'), 
      Task = mongoose.model('Task');

const tasks = require('../controllers/tasks.js')

module.exports = function(app){

    //  root
    app.get('/tasks', function(req, res){
        tasks.index(req, res);
    });

    // create
    app.post('/task/', function(req, res){
        console.log("I am at routes.js - create");
        tasks.create(req, res);
    });

    // show
    app.get('/task/:id/', function(req, res){
        tasks.show(req, res);
    });

    // remove
    app.delete('/task/:id', function(req, res){
        tasks.remove(req, res);
    });

     // update
     app.put('/task/', function(req, res){
        console.log("I am at routes.js - update");
        tasks.update(req, res);
    });

}        