import React, { useState } from 'react';
import { AddBookButton } from './components/AddBookButton/AddBookButton';

import { Book } from './components/Book/Book';
import { BookDeleteModal } from './components/BookDeleteModal/BookDeleteModal';
import { Header } from './components/Header';
import { RightPanel } from './components/RightPanel/RightPanel';
import { SearchInput } from './components/SearchInput/SearchInput';
import { Sidebar } from './components/Sidebar/Sidebar';
import { AuthenticationProvider, useAuthentication } from './hooks/useAuthentication';
import { BooksProvider } from './hooks/useBooks';
import { Content } from './styles/App.styles';
import { GlobalStyle } from './styles/Global';

const synopsis = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. \
                  Facilis unde eligendi incidunt, iste inventore et obcaecati consectetur,\
                  sapiente, qui animi praesentium in eum architecto ab.\
                  Ducimus ex nam illo corporis!'

const publisher = 'Harper Collins';
const author =  'J.R.R. Tolkien';
const edition = '1ª edição';

const book1 = {
    id: '1',
    title: 'O senhor dos anéis: A sociedade do anel',
    author,
    publisher,
    edition,
    synopsis, 
}

const book2 = {
  id: '2',
  title: 'O senhor dos anéis: As duas torres',
  author,
  edition,
  publisher,
  synopsis, 
}

const book3 = {
  id: '3',
  title: 'O senhor dos anéis: O retorno do rei',
  author,
  publisher,
  edition,
  synopsis, 
}

const App = () => {
  const books = [book1, book2, book3];

  const [isAuthModalOpen, setAuthModalOpen] = useState(false)
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const {authentication} = useAuthentication();
  console.log(authentication)

  const openDeleteBookModal = () => {
    setDeleteModalOpen(true);
  }

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  }

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
              {
                books.map(book => {
                  return <Book key={book.id} openDeleteModal={openDeleteBookModal} book={book}/>
                })
              }
            </div>
          </main>
          <RightPanel />

        </Content>
      
      
      <GlobalStyle />

      <BookDeleteModal 
          isOpen={isDeleteModalOpen} 
          onRequestClose={closeDeleteModal}
      />

      </BooksProvider>
      </AuthenticationProvider>
    </>
  )
}

export { App };
