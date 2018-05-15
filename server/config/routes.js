const mongoose = require('mongoose'), 
      Task = mongoose.model('Task');

const tasks = require('../controllers/tasks.js')

module.exports = function(app){

    //  root
    app.get('/tasks', function(req, res){
        tasks.index(req, res);
    });

    // create
    app.post('/task/:title/:description/:completed', function(req, res){
        tasks.create(req, res);
    });

    // show
    app.get('/task/:id/', function(req, res){
        tasks.show(req, res);
    });

    // remove
    app.delete('/task/:id/', function(req, res){
        tasks.remove(req, res);
    });

     // update
     app.put('/task/:id/:title/:description/:completed', function(req, res){
        tasks.update(req, res);
    });

}        