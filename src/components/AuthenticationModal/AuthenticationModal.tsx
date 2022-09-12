import React, { ReactNode, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useAuthentication } from '../../hooks/useAuthentication';
import { useModals } from '../../hooks/useModals';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
import { Container } from './styles';

// ---------------------------------------------------------------------------------------------- //

export const AuthenticationModal = () => {
  // *** ---- Contexts ---------------------------------------------------------------------- *** //
  const {isAuthenticationModalOpen, closeAuthenticationModal} = useModals()
  const { login } = useAuthentication()
  
  // *** ---- States ------------------------------------------------------------------------ *** //
  const [page, setPage] = useState<ReactNode>();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  // *** ---- Functions --------------------------------------------------------------------- *** //
  const submitLogin = () => {
    login();
    closeAuthenticationModal();
  }

  const onRequestClose = () => {
    closeAuthenticationModal();
  }

  // *** ---- Pages ------------------------------------------------------------------------- *** //
  const loginPage = <LoginPage 
    key='1' 
    onChange1={setEmail} 
    onChange2={setPassword} 
    onSubmit={submitLogin}
  />;
  
  const registerPage = <RegisterPage 
    key='2' 
    onChange1={setEmail} 
    onChange2={setName}
    onChange3={setLastName}
    onChange4={setPassword}
    onChange5={setPasswordConfirmation}
    onSubmit={() => {}}
  />;

  // *** ---- Effects ----------------------------------------------------------------------- *** //
  useEffect(() => {
    setPage(loginPage);
  }, [isAuthenticationModalOpen])

  // *** ---- TSX --------------------------------------------------------------------------- *** //
  return (
    <Modal
      overlayClassName="react-modal-overlay" 
      className="authentication-modal" 
      isOpen={isAuthenticationModalOpen} 
      onRequestClose={onRequestClose}
    > 
      <Container>
        { page }
        <div className='button-container'>
          <button onClick={() => {setPage(loginPage)}}>Login</button>
          <button onClick={() => {setPage(registerPage)}}>Registre-se</button>
        </div>
      </Container>
    </Modal>
  )
}
