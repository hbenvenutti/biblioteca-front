import React, { createContext, ReactNode, useContext, useState } from "react";

// ---------------------------------------------------------------------------------------------- //

interface BooksContextData {}

interface BooksProps {
  children: ReactNode;
}

// ---------------------------------------------------------------------------------------------- //

const BooksContext = 
  createContext<BooksContextData>({} as BooksContextData);

export const BooksProvider = ({children}: BooksProps) => {
  const [books, setBooks] = useState([])
};
  
export const useBooks = () => {
  const context = useContext(BooksContext);
  
  return context;
}
