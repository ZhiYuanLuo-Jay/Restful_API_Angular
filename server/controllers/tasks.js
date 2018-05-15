const mongoose = require('mongoose'),
Task = mongoose.model('Task');

module.exports = 
{
    index: function(req, res){
        Task.find({}, function(err, tasks){
            if(err){
            console.log("Returned error", err);
            res.json({message: "Error", error: err})
            }
            else {
            res.json({message: " Show all, Success", data: tasks})
            }
        })
    },

    create: function(req, res){
        var task = new Task();
        console.log(req.body);
        task.title = req.params.title;
        console.log(req.params.title);
        task.description = req.params.description;
        task.completed = req.params.completed;

        task.save(function(err){
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            }
            else
            {
                res.json({message:"New Task added" ,data: task});
            }
        })
    },

    show: function(req, res){
        console.log('req.parmas', req.params);
        Task.findOne({_id: req.params.id}, function(err, data){
            if(err){
                console.log("Got an error", err.message);
                res.json({message: "Error", error: err});
            } else if(!data) {
                res.json({message: "MongoDB could not find one."});
            }
            else {
                res.json({message:"Success", info:data});
            }
        })
    },

    remove: function(req, res){
        // console.log('req.parmas', req.params);
        Task.remove({_id: req.params.id}, function(err, data){
            if(err){
                console.log("Got an error", err.message);
                res.json({message: "Error", error: err});
            } else {
                res.json({message:"Success", info:data});
            }
        })
    },
    
    update: function(req, res){
        // console.log('req.parmas', req.params);
        Task.findOne({_id: req.params.id}, function(err, data){
            if(err){
                console.log("Got an error", err.message);
                res.json({message: "Error", error: err});
            } else if(!data) {
                res.json({message: "MongoDB could not find one."});
            } else {
                data.title = req.params.title;
                data.description = req.params.description;
                data.completed = req.params.completed;
                data.save(function(err){
                    if(err){
                        console.log("Got an error", err.message);
                        res.json({message: "Error", error: err});
                    } else {
                        res.json({message:"Success", info:data});
                    }
                })
            }
        })
    },
}

