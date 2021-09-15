const Schema = require('mongoose').Schema;

const UserDataSchema = new Schema({
  FirstName: String,
  LastName: String,
  MobileNumber:Number,
  Basic:Number,
  LTA:Number,
  HRA:Number,
  FA:Number,
  Investments:Number,
  Rent:Number,
  CityType:String,
  MedicalPolicy:Number,
  ApplicableHRA:Number,
  TotalTaxableIncome:Number
 
});

module.exports = UserDataSchema;