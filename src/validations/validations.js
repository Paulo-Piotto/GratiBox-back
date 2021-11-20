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
  userId: joi.number().required(),
  type: joi.string().min(6).required(),
  deliveryDate: joi.string().min(2).required(),
  products: joi.string().min(4).required(),
  signDate: joi.date().required(),
});

const deliveryValidation = joi.object({
  userId: joi.number().required(),
  fullName: joi.string().min(3).required(),
  adress: joi.string().min(3).required(),
  cep: joi.string().min(8).required(),
  city: joi.string().min(3).required(),
  state: joi.string().min(2).required(),
});

export {
  loginValidation,
  registerValidation,
  planValidation,
  deliveryValidation,
};
