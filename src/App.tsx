import React, { useState } from 'react';

import { Book } from './components/Book/Book';
import { Header } from './components/Header';
import { SearchInput } from './components/SearchInput/SearchInput';
import { Sidebar } from './components/Sidebar/Sidebar';
import { AuthenticationProvider } from './hooks/useAuthentication';
import { BooksProvider } from './hooks/useBooks';
import { Content } from './styles/App.styles';
import { GlobalStyle } from './styles/Global';

const App = () => {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false)

  return (
    <>
      <AuthenticationProvider>
      <BooksProvider>
        
        <Header />
        <Content>
          <Sidebar 
            email='huambenvenutti@gmail.com'
            name='Huam'
            lastName='Benvenutti'
          />
          
          <main>
            <div className='bookList'>
              <Book 
                id='1'
                title='O senhor dos anéis: As duas Torres'
                author='J.R.R. Tolkien'
                edition='1ª Edição'
                publisher='Harper Collins'
                synopsis='Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                          Facilis unde eligendi incidunt, iste inventore et obcaecati consectetur, 
                          sapiente, qui animi praesentium in eum architecto ab. 
                          Ducimus ex nam illo corporis!'
              />
              <Book 
                id='2'
                title='O senhor dos anéis: A sociedade do anel'
                author='J.R.R. Tolkien'
                edition='1ª Edição'
                publisher='Harper Collins'
                synopsis='Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                          Facilis unde eligendi incidunt, iste inventore et obcaecati consectetur, 
                          sapiente, qui animi praesentium in eum architecto ab. 
                          Ducimus ex nam illo corporis!'
              />
              <Book 
                id='3'
                title='O senhor dos anéis: O retorno do rei'
                author='J.R.R. Tolkien'
                edition='1ª Edição'
                publisher='Harper Collins'
                synopsis='Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                          Facilis unde eligendi incidunt, iste inventore et obcaecati consectetur, 
                          sapiente, qui animi praesentium in eum architecto ab. 
                          Ducimus ex nam illo corporis!'
              />
            </div>
          </main>


          <SearchInput />
        </Content>
      
      <GlobalStyle />
      </BooksProvider>
      </AuthenticationProvider>
    </>
  )
}

export { App };
