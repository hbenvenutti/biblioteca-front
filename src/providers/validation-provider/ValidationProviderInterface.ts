export interface RegistrationData {
  email: string;
  name: string;
  lastName: string;
}

export interface ValidationProviderInterface {
  validateRegistrationData(data:RegistrationData): Promise<boolean>;
  validatePassword(password: string): Promise<void>;
}
