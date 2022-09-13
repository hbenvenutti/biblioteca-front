import React, { useState } from 'react';
import { Container } from './styles';
import { Trash, PencilSimpleLine } from 'phosphor-react'
import bookCover from '../../assets/book.jpg';
import { useAuthentication } from '../../hooks/useAuthentication';
import { BookDeleteModal } from '../BookDeleteModal/BookDeleteModal';
import { useBooks } from '../../hooks/useBooks';
import { useModals } from '../../hooks/useModals';
import { BookUpdateModal } from '../BookUpdateModal/BookUpdateModal';
import { capitalizeMany } from '../../utils/capitalize';

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
}

export const Book = (props: BookProps) => {
  const { authentication } = useAuthentication();
  const { updateBookToEdit } = useBooks();
  const {openDeleteBookModal, openUpdateBookModal} = useModals()
  
  const onOpenDeleteBookModal = () => {
    updateBookToEdit(props.book);
    openDeleteBookModal();
  }

  const onOpenUpdateBookModal = () => {
    updateBookToEdit(props.book);
    openUpdateBookModal();
  } 

  return (
    <>
      <Container>
        <div className="header">
          <div className="bookInfo">
            <strong>{capitalizeMany(props.book.title)}</strong>
            <span>{props.book.author.toUpperCase()}</span>
          </div>

          <div className='edition'>
            <img src={bookCover} alt="book cover" />
            <span>{capitalizeMany(props.book.publisher)}</span>
            <p>{capitalizeMany(props.book.edition)}</p>
          </div>

        </div>

        <footer>
          <article>
            <p>
              {props.book.synopsis}
            </p>
          </article>

          <div className='buttonContainer'>
            { authentication && 
              <button 
                onClick={onOpenUpdateBookModal} 
                className='edit'>
                  <PencilSimpleLine size={25} />
              </button>
            }

            { authentication && 
              <button 
                onClick={onOpenDeleteBookModal} 
                className='delete'>
                  <Trash size={25}/>
              </button>
            }
          </div>
        </footer>

      </Container>
    </>
  )
}
