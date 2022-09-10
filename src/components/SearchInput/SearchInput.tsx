import React, { useState } from 'react';
import { useBooks } from '../../hooks/useBooks';
import { Container } from "./SearchInput.style";

export const SearchInput = () => {
  const [ searchText, setSearchText ] = useState(''); 
  
  const { searchBooks } = useBooks();
  
  const onChange = (text: string) => {
    setSearchText(text);
    searchBooks(searchText);
  }

  return (
    <Container 
      type="text" 
      placeholder="Pesquisa" 
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
