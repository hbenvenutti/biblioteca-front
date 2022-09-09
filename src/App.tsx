import React, { useState } from 'react';

import { BodyContainer } from './components/BodyContainer';
import { Book } from './components/Book/Book';
import { Header } from './components/Header';
import { Searchbar } from './components/Searchbar/Searchbar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Content } from './styles/App.styles';
import { GlobalStyle } from './styles/Global';

const App = () => {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false)
  const [authentication, setAuthentication] = useState(false);
  
  return (
    <>
      <Header logged={authentication}/>
      <Content>
        <Sidebar 
          email='huambenvenutti@gmail.com'
          name='Huam'
          lastName='Benvenutti'
          logged={authentication}
        />
        
        <main>
          <div className='bookList'>
            <Book />
            <Book />
            <Book />
          </div>
        </main>
        {/* <input /> */}
        <Searchbar />
      </Content>
      
      <GlobalStyle />
    </>
  )
}

export { App };
