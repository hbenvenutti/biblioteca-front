import React from 'react';
import {PencilSimpleLine} from 'phosphor-react';

import { Container } from './styles';
import { Avatar } from '../Avatar/Avatar';
import cover from '../../assets/cover.jpg'
import { useAuthentication } from '../../hooks/useAuthentication';
import { capitalize } from '../../utils/capitalize';

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

        <strong>{`${capitalize(user.name)} ${capitalize(user.lastName)}`}</strong>
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
