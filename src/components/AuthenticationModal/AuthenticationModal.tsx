import React, { ReactNode, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useAuthentication } from '../../hooks/useAuthentication';
import { useModals } from '../../hooks/useModals';
import { Container } from './styles';

// ---------------------------------------------------------------------------------------------- //

export const AuthenticationModal = () => {
  // *** ---- Contexts ---------------------------------------------------------------------- *** //
  const {isAuthenticationModalOpen, closeAuthenticationModal, openRegistrationModal} = useModals()
  const { login } = useAuthentication()
  
  // *** ---- States ------------------------------------------------------------------------ *** //
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>('');

  // *** ---- Functions --------------------------------------------------------------------- *** //
  const handleChangeToRegistration = () => {
    openRegistrationModal();
    closeAuthenticationModal();
  }

  const onRequestClose = () => {
    setEmail('');
    setPassword('');
    closeAuthenticationModal();
  }
  
  const onSubmit = async (e: any) => {
    e.preventDefault();
    // console.log(email);
    // console.log(password);
    const loginResult = await login({email, password});

    if (loginResult) {
      console.log('login')
      onRequestClose()
      return;
    }

    return;
  };

  // *** ---- TSX --------------------------------------------------------------------------- *** //
  return (
    <Modal
      overlayClassName="react-modal-overlay" 
      className="authentication-modal" 
      isOpen={isAuthenticationModalOpen} 
      onRequestClose={onRequestClose}
    > 
      <Container>
        <form onSubmit={onSubmit} className='content'>
          <strong>Login</strong>
          <div>
            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type='email' id='email'/>
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" id='password'/>
          </div>

          <div className='button-container'>
            <button className='send' type='submit'>Enviar</button>
          </div>
        </form>

        <div className='button-container'>
          {/* <button onClick={() => {setPage(loginPage)}}>Login</button> */}
          <button onClick={handleChangeToRegistration}>Registre-se</button>
        </div>
      </Container>
    </Modal>
  )
}
