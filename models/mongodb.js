var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27020/nodeapi');
exports.mongoose = mongoose;
