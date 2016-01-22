var express = require('express');
var router = express.Router();

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
  var db = req.db,
      collection = db.get('userlist');
  collection.insert(req.body, function(err, result) {
    res.status((err) ? 400 : 201);
    if (err !== null) res.send({ msg: err });
    res.send();
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
