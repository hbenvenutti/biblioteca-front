import React from 'react';
import { useBooks } from '../../hooks/useBooks';
import { Content } from './styles';

interface SynopsisPageProps {
  onChange: (value: string) => void;
}

export const SynopsisPage = (props: SynopsisPageProps) => {
  const {bookToEdit} = useBooks();

  return (
    <Content>
      <div>
        <label>Sinopse</label>
        <textarea 
          defaultValue={bookToEdit ? bookToEdit.synopsis : ''} 
          onChange={(e) => props.onChange(e.target.value)}
        />
      </div>
    </Content>
  )
}
