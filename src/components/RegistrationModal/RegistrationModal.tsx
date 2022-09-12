import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useModals } from '../../hooks/useModals';
import { apiProvider } from '../../providers/api-provider/ApiProviderFactory';
import { validationProvider } from '../../providers/validation-provider/ValidationProviderFactory';
import { ListItem } from './ListItem';
import { Container } from './styles';

export const RegistrationModal = () => {
  const {isRegistrationModalOpen, closeRegistrationModal} = useModals()

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  
  // *** ---- DataError --------------------------------------------------------------------- *** //
  const [passwordsMatchError, setPasswordsMatchError] = useState(false);
  const [minLengthError, setMinLengthError] = useState(false);
  const [upperCaseError, setUpperCaseError] = useState(false);
  const [lowerCaseError, setLowerCaseError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [symbolError, setSymbolError] = useState(false);
  const [sequenceError, setSequenceError] = useState(false);

  const handleSubmit = async (event: any) => {
    if (password != passwordConfirmation) {
      setPasswordsMatchError(true);
    }

    const passwordValidationResult = await validationProvider.validatePassword(password);
    const dataValidationResult = await validationProvider.validateRegistrationData({email, name, lastName})
    
    if (passwordValidationResult.error) {
      setMinLengthError(passwordValidationResult.min);
      setUpperCaseError(passwordValidationResult.upper);
      setLowerCaseError(passwordValidationResult.lower);
      setNumberError(passwordValidationResult.number);
      setSymbolError(passwordValidationResult.symbol);
      setSequenceError(passwordValidationResult.sequence);

      return;
    }

    if (dataValidationResult && !passwordValidationResult.error) {
      console.log('sucesso')
      await apiProvider.createUser({name, lastName, email, password, passwordConfirmation})
      
      resetAllStates();
      closeRegistrationModal();
      return;
    }
  }

  const resetAllStates = () => {
    setEmail('');
    setName('');
    setLastName('');
    setPassword('');
    setPasswordConfirmation('');
    
    setPasswordsMatchError(false);
    setMinLengthError(false);
    setUpperCaseError(false);
    setLowerCaseError(false);
    setNumberError(false);
    setSymbolError(false);
    setSequenceError(false);  
  };


  return (
    <Modal
      overlayClassName="react-modal-overlay" 
      className="registration-modal" 
      isOpen={isRegistrationModalOpen} 
      onRequestClose={closeRegistrationModal}
    >

      <Container>
        <strong>Cadastro</strong>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type='email' id='email'/>
          </div>

          <div className='section'>
            <div className='input-group'>
              <label htmlFor="name">Nome</label>
              <input onChange={(e) => setName(e.target.value)} type='text' id='name'/>
            </div>

            <div className='input-group'>
              <label htmlFor="last-name">Sobrenome</label>
              <input onChange={(e) => setLastName(e.target.value)} type='text' id='last-name'/>
            </div>
          </div>

          <div className='section'>
            <div className='input-group'>
              <label>Senha</label>
                <input onChange={(e) => setPassword(e.target.value)} type="text" id='password'/>
            </div>
            
            <div className='input-group'>
              <label>Confirme a senha</label>
              <input 
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                type="password"
                id='password-confirmation'
              />
              
            </div>
          </div>

          <ul>
            <ListItem key='3' error={passwordsMatchError} text='As senhas devem combinar.'/>
            <ListItem key='1' error={minLengthError} text='A senha deve conter no mínimo 8 caracteres.'/>
            <ListItem key='5' error={lowerCaseError} text='A senha deve conter no mínimo 1 letra minúscula.'/>
            <ListItem key='2' error={upperCaseError} text='A senha deve conter no mínimo 1 letra maiúscula.'/>
            <ListItem key='4' error={numberError} text='A senha deve conter no mínimo 1 número.'/>
            <ListItem key='6' error={symbolError} text='A senha deve conter no mínimo 1 símbolo. (#@$)'/>
            <ListItem key='7' error={sequenceError} text='A senha não deve conter sequências (123 | abc).'/>
          </ul>

          <div className='button-container'>  
            <button type='submit' className='send'>Enviar</button>
          </div>
        </form>
      </Container>
    </Modal>
  )
}
