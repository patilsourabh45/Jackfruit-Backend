const Schema = require('mongoose').Schema;

const userSchema = new Schema({
  name: String,
  email: {
    type : String,
    required: true},
  phonenumber:String,
  password: String,
  noOfOrders: { type: Number, "default": 0 },
  password: { type: String, required: true, "default": "Helloworld123#"}
});

module.exports = userSchema;