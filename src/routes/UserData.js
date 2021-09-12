const express = require('express');
const router = express.Router();
const UserDataService= require('../service/UserDataService')

router.get('/', (req, res) => {
  UserDataService.fetchUserData()
  .then(UserData => {

    res.send(UserData)
  })
  .catch(error => {
    res.send(error);
  });
});

router.post('/', (req, res) => {
  UserDataService.createUserData(req.query.fname,
  req.query.lname, req.query.mobilenumber, req.query.basic, req.query.lta, req.query.hra, req.query.fa, req.query.investments, req.query.rent, req.query.citytype, req.query.medicalpolicy, req.query.applicablehra, req.query.totaltaxableincome)

    .then(() => {
    console.log('UserData created successfully!')
    res.send('Data Sent successfully!');

  })
  .catch((err) => {
    console.log(`Error in creation ${err}`);
    res.send('UserData not created, due to error');
  });

});

router.get('/hello', (req, res) => {
  res.send('Hello end point called for UserData');
})


module.exports = router;