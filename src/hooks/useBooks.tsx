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
  searchBooks: (searchText: string) => Promise<void>;
  getBooks: (searchText?: string) => Promise<void>;
};

interface BooksProps {
  children: ReactNode;
};


// ---------------------------------------------------------------------------------------------- //
const initialBookList = await apiProvider.listAllBooks();

const BooksContext = 
  createContext<BooksContextData>({} as BooksContextData);

export const BooksProvider = ({children}: BooksProps) => {
  const [books, setBooks] = useState<Book[]>(initialBookList ? initialBookList : []);

  const searchBooks = async (searchText: string) => {
    console.log('Procurando por ', searchText);
    getBooks(searchText)
  }

  const getBooks = async (search?: string) => {
    let response;

    if (search) {
      response = await apiProvider.findBooks(search);

    }
    
    else {
      response = await apiProvider.listAllBooks();
    }

    console.log(search);
    console.log('response:', response);

    if (response) {
      setBooks(response);
      return;
    }
  }

  return (
    <BooksContext.Provider value={{books, searchBooks, getBooks}}>
      {children}
    </BooksContext.Provider>
  )
};
  
export const useBooks = () => {
  const context = useContext(BooksContext);
  
  return context;
}
