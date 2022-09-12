import * as yup from 'yup';
import yupPassword from 'yup-password';

import { ErrorKeys, RegistrationData, ValidationProviderInterface } from "./ValidationProviderInterface";

export class ValidationProvider implements ValidationProviderInterface {
  constructor() {
  }

  async validateRegistrationData(data: RegistrationData): Promise<boolean> {
    const schema = yup
      .object()
      .shape({
        email: yup.string().email().required(),
        name: yup.string().strict().required(),
        lastName: yup.string().strict().required(),
      })

    return await schema.isValid(data);
  }

  async validatePassword(password: string): Promise<ErrorKeys> {
    yupPassword(yup);
    const errorKeys = {
      error: false,
      upper: false,
      lower: false,
      min: false,
      number: false,
      symbol: false,
      sequence: false,
    }

    const schema = yup
    .string()
    .password()
    .min(8, 'min')
    .max(30)
    .minLowercase(1,'lower')
    .minUppercase(1, 'upper')
    .minNumbers(1, 'number')
    .minRepeating(3, 'sequence')
    .minSymbols(1, 'symbol')
    
    try {
      await  schema.validate(password, {abortEarly: false});

      return errorKeys;
    } 
    catch (e: any) {
      const errors = e.errors 

      errors.map((error: keyof typeof errorKeys) => errorKeys[error] = true)

      errorKeys.error = true;

      return errorKeys;
    }
  };

}
