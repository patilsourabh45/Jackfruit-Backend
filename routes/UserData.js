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
  UserDataService.createUserData(req.query.FirstName,
  req.query.LastName, req.query.MobileNumber, req.query.Basic, req.query.LTA, req.query.HRA, req.query.FA, req.query.Investments, req.query.Rent, req.query.CityType, req.query.MedicalPolicy, req.query.ApplicableHRA, req.query.TotalTaxableIncome)

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