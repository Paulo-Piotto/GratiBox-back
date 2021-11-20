import joi from 'joi';

const loginValidation = joi.object({
  email: joi.string().email().required(),
  password: joi.string().alphanum().min(5).required(),
});

const registerValidation = joi.object({
  name: joi.string().min(3).max(30).required(),
  email: joi.string().email().required(),
  password: joi.string().alphanum().min(5).required(),
});

const planValidation = joi.object({
  user_id: joi.string().min(3).max(30).required(),
  type: joi.string().min(6).required(),
  deleivery_date: joi.date().required(),
  products: joi.string().min(4).required(),
  sign_date: joi.date().required(),
});

export {
  loginValidation,
  registerValidation,
  planValidation,
};
