var User = require('./../models/User.js');

var UserController = {
  findAll: function (req, res) {
    console.log("Função findAll");
    User.find({}, function(err, docs) {
      if (err) throw err;
      res.status(200);
      res.json(docs);
    });
  },
  findByUsername: function(req, res) {
    User.findOne({"username" : req.params.username}, function(err, user) {
      if (err) throw err;
      res.status(200);
      res.json(user);
    });
  },
  add: function (req, res) {
    new User(req.body).save(req.body, function(err) {
      if(err) {
        res.send({'success':false,'err':err});
      } else {
        res.status(201);
        res.send({'success':true});
      }
    });
  },
  update: function(req, res) {
    User.update({ 'username' : req.params.username}, req.body, function(err, numberAffected) {
      if (err) throw err;
      res.status(202);
      res.send({'success': true});
    });
  },
  delete: function(req, res) {
    User.remove({ 'username' : req.params.username}, function(err) {
      if(err) {
        res.status(400);
        res.send({'success':false,'err':err});
      } else {
        res.status(200);
        res.send({'success':true});
      }
    });
  }
}

module.exports = UserController;
