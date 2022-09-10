import React from 'react';
import { useBooks } from '../../hooks/useBooks';
import { Book } from '../Book/Book';

export const BookList = () => {
  const {books} = useBooks()
  
  return (
    <>
      {
        books.map(book => {
          return (
            <Book key={book.id} book={book}/>
          )
        })
      }
    </>
  )
}
