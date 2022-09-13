import React, { useState } from 'react';
import { useBooks } from '../../hooks/useBooks';
import { Container } from "./SearchInput.style";

export const SearchInput = () => {
  
  const { getBooks } = useBooks();
  
  const onChange = (text: string) => {
    getBooks(text.toLocaleLowerCase());
  }

  return (
    <Container 
      type="text" 
      placeholder="Pesquisa" 
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
