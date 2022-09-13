import React from 'react';
import { useBooks } from '../../hooks/useBooks';
import { Content } from './styles';

interface PageProps {
  onChangeTitle: (value: string) => void
  onChangeAuthor: (value: string) => void
}

export const Page1 = (props: PageProps) => {
  const {bookToEdit} = useBooks()

  return (
    <Content>
      <div>
        <label htmlFor='title'>Título:</label>
        <input id='title' defaultValue={bookToEdit ? bookToEdit.title : ''} onChange={(e) => props.onChangeTitle(e.target.value)}/>
      </div>
      <div>
        <label htmlFor='author'>Autor:</label>
        <input id='author' defaultValue={bookToEdit ? bookToEdit.author : ''} onChange={(e) => props.onChangeAuthor(e.target.value)}/>
      </div>
    </Content>
  )
}
