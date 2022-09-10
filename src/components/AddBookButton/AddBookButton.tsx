import React from 'react';
import { Container } from './AddBookButton.style';
import { Plus } from 'phosphor-react';

export const AddBookButton = () => {
  return (
    <Container>
      <Plus weight='bold' size={18}/>
    </Container>
  )
}
