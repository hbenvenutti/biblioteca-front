import React, { useState } from 'react';
import { Container } from "./SearchInput.style";

export const SearchInput = () => {
  const [ searchText, setSearchText ] = useState(''); 
  
  return (
    <Container 
      type="text" 
      placeholder="Pesquisa" 
      onChange={(e) => setSearchText(e.target.value)}
    />
  )
}
