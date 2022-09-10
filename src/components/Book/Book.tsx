import React, { useState } from 'react';
import { Container } from './styles';
import { Trash, PencilSimpleLine } from 'phosphor-react'
import bookCover from '../../assets/book.jpg';
import { useAuthentication } from '../../hooks/useAuthentication';
import { BookDeleteModal } from '../BookDeleteModal/BookDeleteModal';
import { useBooks } from '../../hooks/useBooks';

// ---------------------------------------------------------------------------------------------- //
interface Book {
  id: string;
  title: string;
  publisher: string;
  author: string;
  edition: string;
  synopsis: string;
}
interface BookProps {
  book: Book;
  openDeleteModal: () => void;
}

export const Book = (props: BookProps) => {
  const { authentication } = useAuthentication();
  const { updateBookData } = useBooks();
  
  
  
  const onOpenDeleteModal = () => {
    console.log(props.book)
    updateBookData(props.book);
    props.openDeleteModal();
  }



  return (
    <>
      <Container>
        <div className="header">
          <div className="bookInfo">
            <strong>{props.book.title}</strong>
            <span>J.R.R. Tolkien</span>
          </div>

          <div className='edition'>
            <img src={bookCover} alt="book cover" />
            <span>{props.book.publisher}</span>
            <p>{props.book.edition}</p>
          </div>

        </div>
        <footer>
          <article>
            <p>
              {props.book.synopsis}
            </p>
          </article>

          <div className='buttonContainer'>
            {authentication && <button className='edit'><PencilSimpleLine size={25} /></button>}
            {authentication && <button onClick={onOpenDeleteModal} className='delete'><Trash size={25} /></button>}
          </div>
        </footer>

      </Container>
    </>
  )
}
