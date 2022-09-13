import React from 'react';
import { useBooks } from '../../hooks/useBooks';
import { Content } from './styles';

interface PageProps {
  onChangePublisher: (value: string) => void
  onChangeEdition: (value: string) => void
}

export const Page2 = (props: PageProps) => {
  const { bookToEdit } = useBooks();
  
  return (
    <Content>
      <div>
        <label htmlFor='publisher'>Editora:</label>
        <input 
          id='publisher' 
          defaultValue={bookToEdit ? bookToEdit.publisher : ''} 
          onChange={(e) => props.onChangePublisher(e.target.value)}
        />
      </div>
      
      <div>
        <label htmlFor='edition'>Edição:</label>
        <input 
          id='edition' 
          defaultValue={bookToEdit ? bookToEdit.publisher : ''} 
          onChange={(e) => props.onChangeEdition(e.target.value)}
        />
      </div>
    </Content>
  )
}
