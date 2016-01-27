var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  age: Number,
  location: String,
  gender: String
});

var User = mongodb.mongoose.model("Teste", UserSchema);

UserSchema.statics.createInstance = function (firstName, lastName, username) {
  var User = mongoose.model('User');
  return new User({
    firstName: firstName,
    lastName: lastName,
    userName: username
  });
};


// var UserDAO = function(){};

// UserDAO.prototype.save = function(obj, callback){
//   var instance = new User(obj);
//   console.log("Save method");
//   instance.save(function(err) {
//     console.log(err);
//     callback(err);
//   });
// }

module.exports = User;
