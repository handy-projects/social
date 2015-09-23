var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var botSchema = new Schema({
  phone: String,
  email: String,
  name:  String,
  acct_id: String,
  ava_url: String,
  login: String,
  password: String,
  access_token: String,
  expires_in: Number,
  reg_dt: Date,
  last_act_dt: Date
});

module.exports = mongoose.model('Bot', botSchema);
