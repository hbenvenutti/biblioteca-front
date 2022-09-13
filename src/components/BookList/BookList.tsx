import React, { useEffect, useState } from 'react';
import { useBooks } from '../../hooks/useBooks';
import { Book } from '../Book/Book';

interface BookInterface {
  id: string;
  title: string;
  author: string;
  publisher: string;
  edition: string;
  synopsis: string;
};

export const BookList = () => {
  const { books } = useBooks();

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
