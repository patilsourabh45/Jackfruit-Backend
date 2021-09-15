const serverless = require('serverless-http');
const express = require('express');
const app = express();
const cors = require('cors');
const Db = require('./database/db');

app.use(cors());
app.options('*', cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


const UserDataRoutes = require('./routes/UserData');
const UserRoutes = require('./routes/user');
const AuthRoutes = require('./routes/auth');
const SignupRoutes = require('./routes/signup');

app.use('/userdata', UserDataRoutes);

app.use('/user', UserRoutes);
app.use('/auth', AuthRoutes);
app.use('/signup', SignupRoutes);

app.listen(3006, () => {
  Db.connect()
  .then(() => console.log('Connection successfull!'))
  .catch((err) => console.log(`Error found! ${err}`));

  console.log('Started Listening!');
});

module.exports = {
  handler: serverless(app)
};
