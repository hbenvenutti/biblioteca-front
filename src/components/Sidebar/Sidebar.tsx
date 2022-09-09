import React from 'react';
import {PencilSimpleLine} from 'phosphor-react';

import { Container } from './styles';
import { Avatar } from '../Avatar/Avatar';
import cover from '../../assets/cover.jpg'

export const Sidebar = () => (
  <Container>
      <img 
        className="cover"
        src={cover} 
        alt="" 
      />
    
      <div className="profile">
        <Avatar />

        <strong>Huam Benvenutti</strong>
        <span>huambenvenutti@gmail.com</span>
      </div>
    
      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
  </Container>
)
