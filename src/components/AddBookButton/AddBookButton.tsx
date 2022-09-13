import React from 'react';
import { Container } from './AddBookButton.style';
import { Plus } from 'phosphor-react';
import { useModals } from '../../hooks/useModals';

export const AddBookButton = () => {
  const {openCreateBookModal} = useModals()

  return (
    <Container onClick={openCreateBookModal}>
      <Plus weight='bold' size={18}/>
    </Container>
  )
}
