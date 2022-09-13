import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { apiProvider } from "../providers/api-provider/ApiProviderFactory";

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
  bookToEdit: Book | undefined;
  getBooks: (searchText?: string) => Promise<void>;
  updateBookToEdit: (book: Book) => void;
};

interface BooksProps {
  children: ReactNode;
};


// ---------------------------------------------------------------------------------------------- //

const BooksContext = 
  createContext<BooksContextData>({} as BooksContextData);

export const BooksProvider = ({children}: BooksProps) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [bookToEdit, setBookToEdit] = useState<Book>()

  const updateBookToEdit = (book: Book): void => {
    setBookToEdit(book);
  }

  const getBooks = async (search?: string) => {
    let response;

    if (search) {
      response = await apiProvider.findBooks(search);

    }
    
    else {
      response = await apiProvider.listAllBooks();
    }

    if (response) {
      setBooks(response);
      return;
    }

    setBooks([]);
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <BooksContext.Provider value={{books, bookToEdit, getBooks, updateBookToEdit}}>
      {children}
    </BooksContext.Provider>
  )
};
  
export const useBooks = () => {
  const context = useContext(BooksContext);
  
  return context;
}
