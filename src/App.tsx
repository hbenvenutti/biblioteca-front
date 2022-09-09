import React from 'react';

import { BodyContainer } from './components/BodyContainer';
import { Book } from './components/Book/Book';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Content } from './styles/App.styles';
import { GlobalStyle } from './styles/Global';

const App = () => {
  const logged = false;
  
  return (
    <>
      <Header logged={logged}/>
      {/* <BodyContainer /> */}
      <Content>
        <Sidebar 
          email='huambenvenutti@gmail.com'
          name='Huam'
          lastName='Benvenutti'
          logged={logged}
        />
        
        <main>
          <div className='bookList'>
            <Book />
            <Book />
            <Book />
          </div>
        </main>
      </Content>
      
      <GlobalStyle />
    </>
  )
}

export { App };
