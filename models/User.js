var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  age: Number,
  location: String,
  gender: String
});

var User = mongodb.mongoose.model("User", UserSchema);

var UserDAO = function(){};

UserDAO.prototype.save = function(obj, callback){
  var instance = new User(obj);
  console.log("Save method");
  instance.save(function(err) {
    console.log(err);
    callback(err);
  });
}

module.exports = new UserDAO();
