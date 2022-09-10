import React from 'react';
import { BiLogIn } from 'react-icons/bi';
import { useAuthentication } from '../../hooks/useAuthentication';
import { Container } from './styles';

// interface ButtonProps {
//   onClickFunction: () => void;
// }

export const AuthenticationButton = () => {
  const { authentication, logout, login } = useAuthentication()

  const text = authentication ? 'Logout' : 'Login';
  
  const onClick = () => {
    if (authentication) {
      logout();
      return;
    }

    login();
  }
  
  return (
    <Container type="button" onClick={onClick}>
      <BiLogIn />
      {text}
    </Container>
  )
};
