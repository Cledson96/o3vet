import Joi from "joi";

export const schema = Joi.object({
  nome: Joi.string().required(),
  email: Joi.string().email().required(),
  senha: Joi.string().required(),
  telefone: Joi.string().required(),
  cpf: Joi.string().required(),
  data_nascimento: Joi.date().required(),
});
