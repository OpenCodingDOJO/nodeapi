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

var User = mongodb.mongoose.model("User", UserSchema);

// exports.UserSchema = UserSchema;
module.exports = User;
