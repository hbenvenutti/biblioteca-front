import React from 'react';
import { AuthenticationButton } from '../AuthenticationButton';
import {Books} from 'phosphor-react';
import { Container, Content } from './styles';

// ---------------------------------------------------------------------------------------------- //

export function Header() {
  return ( 
  <>
    <Container>
      <Content>
        <div className="title">
          <Books size={30}/>
          <h1> Biblioteca </h1>
        </div>

        <AuthenticationButton/>
      </Content>
    </Container>
  </>
  );
}
