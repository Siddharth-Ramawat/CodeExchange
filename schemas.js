const joi = require('joi');

const signupSchema = joi.object.keys({
  firstName : joi.string().trim().required(),
  lastName : joi.string().trim().required(),,
  email : joi.string().trim().email().required(),
  sex : joi.string().trim().required(),
  birthday_day : joi.string().trim().required(),
  birthday_month : joi.string().trim().required(),
  birthday_year : joi.string().trim().required()
});

const signinSchema = joi.object.keys({
  email_id : joi.string().trim().email().required(),
  password : joi.string().min(5).max(32).required()
});
//
// joi.validate(userInput, schema, (err, result) => {
//   if(err){
//     console.log(err);
//   }
//   else {
//     console.log(result);
//   }
// })
