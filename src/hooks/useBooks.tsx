import React, { createContext, ReactNode, useContext, useState } from "react";

// ---------------------------------------------------------------------------------------------- //

interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  edition: string;
  synopsis: string;
};

interface BooksContextData {
  books: Book[];
  searchBooks: (searchText: string) => Promise<void>;
  updateBookData: (book: Book) => void;
  activeBook: Book | undefined;
};

interface BooksProps {
  children: ReactNode;
};

// ---------------------------------------------------------------------------------------------- //
const synopsis = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. \
                  Facilis unde eligendi incidunt, iste inventore et obcaecati consectetur,\
                  sapiente, qui animi praesentium in eum architecto ab.\
                  Ducimus ex nam illo corporis!'

const publisher = 'Harper Collins';
const author =  'J.R.R. Tolkien';
const edition = '1ª edição';

const book1 = {
    id: '1',
    title: 'O senhor dos anéis: A sociedade do anel',
    author,
    publisher,
    edition,
    synopsis, 
}

const book2 = {
  id: '2',
  title: 'O senhor dos anéis: As duas torres',
  author,
  edition,
  publisher,
  synopsis, 
}

const book3 = {
  id: '3',
  title: 'O senhor dos anéis: O retorno do rei',
  author,
  publisher,
  edition,
  synopsis, 
}

// ---------------------------------------------------------------------------------------------- //

const BooksContext = 
  createContext<BooksContextData>({} as BooksContextData);

export const BooksProvider = ({children}: BooksProps) => {
  const [books, setBooks] = useState<Book[]>([book1, book2, book3]);
  const [activeBook, setActiveBook] = useState<Book>();

  const searchBooks = async (searchText: string) => {
    console.log('Procurando por ', searchText);
    const result: Book[] = [];

    setBooks(result);
  }

  const updateBookData = (book: Book): void => {
    setActiveBook(book);
  }

  return (
    <BooksContext.Provider value={{books, searchBooks, updateBookData, activeBook}}>
      {children}
    </BooksContext.Provider>
  )
};
  
export const useBooks = () => {
  const context = useContext(BooksContext);
  
  return context;
}
