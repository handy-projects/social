var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var botSchema = new Schema({
  phone: String,
  email: String,
  name:  String,
  acct_id: String,
  login: String,
  password: String,
  access_token: String,
  expires_in: Number,
  reg_dt: Date,
  last_login: Date
});

module.exports = mongoose.model('Bot', botSchema);
