const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username:String,
  password:String,
  role:{ type:String, enum:['admin','teacher'], default:'teacher'}
});

module.exports = mongoose.model('User', UserSchema);
