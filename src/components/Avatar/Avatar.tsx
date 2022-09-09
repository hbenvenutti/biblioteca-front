import React from 'react';

import avatarPlaceholder from '../../assets/avatar.jpg';
import { Container } from './Avatar.styles';

export const Avatar = () => (
  <Container
    className="avatar"
    src={avatarPlaceholder} 
    alt="avatar" 
  />
)
