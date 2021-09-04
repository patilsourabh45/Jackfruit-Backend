const mongoose = require('mongoose');
const UserDataSchema = require('../schema/UserData');

const UserData = mongoose.model('UserData', UserDataSchema);

module.exports = UserData;