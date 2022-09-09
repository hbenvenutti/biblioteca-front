import React from 'react';
import { LoginButton } from '../LoginButton';
import { LogoutButton } from '../LogoutButton';
import {Books} from 'phosphor-react';
import { Container, Content } from './styles';

interface HeaderProps {
  logged: boolean;
}

export function Header(props: HeaderProps) {
  const button = props.logged ? <LogoutButton/> : <LoginButton />

  return <>
    <Container>
      <Content>
        <div className="title">
          <Books size={30}/>
          <h1> Biblioteca </h1>
        </div>

        {button}
      </Content>
    </Container>
  </>;
}
