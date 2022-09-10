import React, { useState } from 'react';

import { BookDeleteModal } from './components/BookDeleteModal/BookDeleteModal';
import { BookList } from './components/BookList/BookList';
import { BookUpdateModal } from './components/BookUpdateModal/BookUpdateModal';
import { Header } from './components/Header';
import { RightPanel } from './components/RightPanel/RightPanel';
import { Sidebar } from './components/Sidebar/Sidebar';
import { AuthenticationProvider, useAuthentication } from './hooks/useAuthentication';
import { BooksProvider } from './hooks/useBooks';
import { ModalsProvider } from './hooks/useModals';
import { Content } from './styles/App.styles';
import { GlobalStyle } from './styles/Global';

// ---------------------------------------------------------------------------------------------- //

const App = () => {
  const {authentication} = useAuthentication();
  console.log('authentication: ', authentication)

  return (
    <>
      <AuthenticationProvider>
      <BooksProvider>
      <ModalsProvider>
        
        <Header />
        <Content>
          <Sidebar 
            email='huambenvenutti@gmail.com'
            name='Huam'
            lastName='Benvenutti'
          />
          
          <main>
            <BookList/>
          </main>

          <RightPanel />

        </Content>
      
      
      <GlobalStyle/>
      <BookUpdateModal/> 
      
      <BookDeleteModal/>

      </ModalsProvider>
      </BooksProvider>
      </AuthenticationProvider>
    </>
  )
}

export { App };
