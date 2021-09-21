const UserData = require('../database/model/UserData');

function createUserData(fname, lname, mobilenumber, basic, lta, hra, fa, investments, rent, citytype, medicalpolicy, applicablehra, totaltaxableincome) {

  const newUserData = UserData({ FirstName: fname, LastName: lname,MobileNumber:mobilenumber, Basic:basic,LTA:lta, HRA:hra, FA:fa, Investments:investments, Rent:rent, CityType:citytype,  MedicalPolicy:medicalpolicy, ApplicableHRA:applicablehra, TotalTaxableIncome:totaltaxableincome
  });
  
  return newUserData.save();
}

function fetchUserData() {
    return UserData.find();
  }

module.exports = {
  createUserData: createUserData,
  fetchUserData: fetchUserData
};