var express = require('express');
var router = express.Router();
var User = require('./../models/User.js');

/* GET users list. */
router.get('/', function(req, res) {
  var db = req.db,
      collection = db.get('userlist');
  collection.find({}, {}, function(err, docs) {
    if (err) throw err;
    res.json(docs);
  });
});

router.post('/', function(req, res) {
  // var db = req.db,
  //     collection = db.get('userlist');
  // collection.insert(req.body, function(err, result) {
  //   res.status((err) ? 400 : 201);
  //   if (err !== null) res.send({ msg: err });
  //   res.send();
  // });
  console.log("Postei");
  // console.log(req.body);
  User.save(req.body, function(err) {
    if(err) {
      res.status(400);
      res.send({'success':false,'err':err});
    } else {
      res.status(201);
      res.send({'success':true});
    }
  });
});

router.delete('/:username', function(req, res) {
  var db = req.db,
      collection = db.get('userlist');

  collection.remove({ 'username' : req.params.username}, function(err) {
    res.status(err ? 400 : 200);
    if (err) res.send({msg: err});
    res.send();
  });
});

module.exports = router;
