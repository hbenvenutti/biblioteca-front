import React, { createContext, ReactNode, useContext, useState } from "react";

// ---------------------------------------------------------------------------------------------- //

interface Book {
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

const BooksContext = 
  createContext<BooksContextData>({} as BooksContextData);

export const BooksProvider = ({children}: BooksProps) => {
  const [books, setBooks] = useState<Book[]>([]);
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
