/***
Form Validation with Joi and validation of nested data

Developing Schemas
*/

// Joi is being used for form validation
const joi = require('joi');

const arrayString = ['banana' , 'apple', 'pineapple'];
const arrayObjects = [{example : 'example_1'}, {example : 'example_2'}];
const userInput = {
  personalInfo : {
    streetAddress : 'Ameerpet',
    city : 'Hyderabad',
    state : 'TL'
  },
  // preferences : arrayString
  preferences : arrayObjects
}

const personalInfoSchema = joi.object().keys({
  streetAddress : joi.string().trim().required(),
  city : joi.string().trim().required(),
  state : joi.string().trim().length(2).required()
});

// const preferencesSchema = joi.array().items(joi.string())
const preferencesSchema = joi.array().items(joi.object().keys({
  example : joi.string().required()
}));

const schema = joi.object().keys({
  personalInfo : personalInfoSchema,
  preferences : preferencesSchema
})

joi.validate(userInput, schema, (err, result) => {
  if(err){
    console.log(err);
  }
  else {
    console.log(result);
  }
})
