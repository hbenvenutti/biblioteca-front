import React, { useState } from 'react';
import { AuthenticationModal } from './components/AuthenticationModal/AuthenticationModal';
import { BookCreationModal } from './components/BookCreationModal/BookCreationModal';

import { BookDeleteModal } from './components/BookDeleteModal/BookDeleteModal';
import { BookList } from './components/BookList/BookList';
import { Header } from './components/Header';
import { RegistrationModal } from './components/RegistrationModal/RegistrationModal';
import { RightPanel } from './components/RightPanel/RightPanel';
import { Sidebar } from './components/Sidebar/Sidebar';
import { AuthenticationProvider, useAuthentication } from './hooks/useAuthentication';
import { BooksProvider } from './hooks/useBooks';
import { ModalsProvider } from './hooks/useModals';
import { Content } from './styles/App.styles';
import { GlobalStyle } from './styles/Global';

// ---------------------------------------------------------------------------------------------- //

const App = () => {
  return (
    <>
      <AuthenticationProvider>
      <BooksProvider>
      <ModalsProvider>
        
        <Header />
        <Content>
          <Sidebar/>
          
          <main>
            <BookList/>
          </main>

          <RightPanel />

        </Content>
      
      
        <GlobalStyle/>
        
        <BookCreationModal/>
        <BookDeleteModal/>
        <AuthenticationModal />
        <RegistrationModal />
        
      </ModalsProvider>
      </BooksProvider>
      </AuthenticationProvider>
    </>
  )
}

export { App };
