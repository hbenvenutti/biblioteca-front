import React from 'react';
import {PencilSimpleLine} from 'phosphor-react';

import { Container } from './styles';
import { Avatar } from '../Avatar/Avatar';
import cover from '../../assets/cover.jpg'
import { useAuthentication } from '../../hooks/useAuthentication';

export const Sidebar = () => {
  const { authentication, user } = useAuthentication();

  if (!authentication) {
    return (
      <Container>
      <img 
        className="cover"
        src={cover} 
        alt="" 
      />
    
      <div className="profile">
        <Avatar />

        <strong>Usuário não autenticado</strong>
      </div>
    
      <footer />
    </Container>
    )
  }

  return (
    <Container>
      <img 
        className="cover"
        src={cover} 
        alt="" 
      />
    
      <div className="profile">
        <Avatar />

        <strong>{`${user.name} ${user.lastName}`}</strong>
        <span>{user.email}</span>
      </div>
    
      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </Container>
  )
}
