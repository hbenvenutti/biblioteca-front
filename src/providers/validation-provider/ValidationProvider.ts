import * as yup from 'yup';
import yupPassword from 'yup-password';

import { RegistrationData, ValidationProviderInterface } from "./ValidationProviderInterface";

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

  async validatePassword(password: string): Promise<void> {
    yupPassword(yup);

    const schema = yup
    .string()
    .password()
    .min(8)
    .max(30)
    .minUppercase(1)
    .minNumbers(1)
    .minRepeating(3)
    .minSymbols(1)
    
    try {
      console.log(password);
      console.log(schema);
      await  schema.validate(password, {abortEarly: false});
    } 
    catch (e: any) {
      console.log('error: ', e.errors);
    }
  };

}
