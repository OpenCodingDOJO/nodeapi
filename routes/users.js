var express = require('express');
var router = express.Router();
var User = require('./../models/User.js');

/* GET users list. */
router.get('/', function(req, res) {
  // User.find({}, function);
  User.find({}, function(err, docs) {
    if (err) throw err;
    res.status(200);
    res.json(docs);
  });
});

router.get('/:username', function(req, res) {
  User.findOne({"username" : req.params.username}, function(err, user) {
    if (err) throw err;
    res.status(200);
    res.json(user);
  });
});

router.post('/', function(req, res) {
  // console.log(req.body);
  new User(req.body).save(req.body, function(err) {
    if(err) {
      res.send({'success':false,'err':err});
    } else {
      res.status(201);
      res.send({'success':true});
    }
  });
});

router.delete('/:username', function(req, res) {
  User.remove({ 'username' : req.params.username}, function(err) {
    if(err) {
      res.status(400);
      res.send({'success':false,'err':err});
    } else {
      res.status(200);
      res.send({'success':true});
    }
  });
});

module.exports = router;
