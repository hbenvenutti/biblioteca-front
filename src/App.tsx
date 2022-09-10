import React, { useState } from 'react';

import { Book } from './components/Book/Book';
import { Header } from './components/Header';
import { SearchInput } from './components/SearchInput/SearchInput';
import { Sidebar } from './components/Sidebar/Sidebar';
import { AuthenticationProvider } from './hooks/useAuthentication';
import { Content } from './styles/App.styles';
import { GlobalStyle } from './styles/Global';

const App = () => {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false)

  return (
    <>
      <AuthenticationProvider>
        <Header />
        <Content>
          <Sidebar 
            email='huambenvenutti@gmail.com'
            name='Huam'
            lastName='Benvenutti'
          />
          
          <main>
            <div className='bookList'>
              <Book />
              <Book />
              <Book />
            </div>
          </main>


          <SearchInput />
        </Content>
      
      <GlobalStyle />
      </AuthenticationProvider>
    </>
  )
}

export { App };
