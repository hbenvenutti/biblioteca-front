import React from 'react';
import { BiLogIn } from 'react-icons/bi';
import { useAuthentication } from '../../hooks/useAuthentication';
import { useModals } from '../../hooks/useModals';
import { Container } from './styles';

// interface ButtonProps {
//   onClickFunction: () => void;
// }

export const AuthenticationButton = () => {
  const { authentication, logout, login } = useAuthentication();
  const {openAuthenticationModal} = useModals()

  const text = authentication ? 'Logout' : 'Login';
  
  const onClick = () => {
    if (authentication) {
      logout();
      return;
    }

    openAuthenticationModal();
    // login();
  }
  
  return (
    <Container type="button" onClick={onClick}>
      <BiLogIn />
      {text}
    </Container>
  )
};
