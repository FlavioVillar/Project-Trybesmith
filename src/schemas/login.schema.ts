import Joi, { ValidationResult } from 'joi';
import IUserCredentials from '../interfaces/user.credentials.interface';

const loginSchema = (data: IUserCredentials): ValidationResult => {
  const schema = Joi.object({
    username: Joi.string().required().messages({
      'string.empty': '"username" is required',
      'string.required': '"username" is required',
    }),
    password: Joi.string().required().messages({
      'string.empty': '"password" is required',
      'string.required': '"password" is required',
    }),
  });
  const { error, value } = schema.validate(data);

  if (error) throw error;

  return value;
};

export default loginSchema;