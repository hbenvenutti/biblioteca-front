export interface RegistrationData {
  email: string;
  name: string;
  lastName: string;
}

export interface ErrorKeys {
  error: boolean
  upper: boolean,
  lower: boolean,
  min: boolean,
  number: boolean,
  symbol: boolean,
  sequence: boolean,
}
export interface ValidationProviderInterface {
  validateRegistrationData(data:RegistrationData): Promise<boolean>;
  validatePassword(password: string): Promise<ErrorKeys>;
}
