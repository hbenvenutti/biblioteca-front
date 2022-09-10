import React from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';
import { AddBookButton } from '../AddBookButton/AddBookButton';
import { SearchInput } from '../SearchInput/SearchInput';
import { Container } from './styles';

export const RightPanel = () => {
  const {authentication} = useAuthentication();
  
  return (
    <Container>
      <SearchInput />
      {authentication && <AddBookButton />}
    </Container>
  )
}

