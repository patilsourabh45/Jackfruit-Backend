const express = require('express');
const app = express();
const cors = require('cors');
const Db = require('./database/db');

const UserDataRoutes = require('./routes/UserData');
const UserRoutes = require('./routes/user');
const AuthRoutes = require('./routes/auth');
const SignupRoutes = require('./routes/signup');

app.use('/userdata', UserDataRoutes);
app.use(cors());
app.use('/user', UserRoutes);
app.use('/auth', AuthRoutes);
app.use('/signup', SignupRoutes);

app.listen(7000, () => {
  Db.connect()
  .then(() => console.log('Connection successfull!'))
  .catch((err) => console.log(`Error found! ${err}`));

  console.log('Started Listening!');
});