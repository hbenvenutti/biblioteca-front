import React, { ReactNode, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useBooks } from '../../hooks/useBooks';
import { useModals } from '../../hooks/useModals';
import { Container } from './styles';
// import { Container } from './styles';

// ---------------------------------------------------------------------------------------------- //

interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  edition: string;
  synopsis: string
}

// ---------------------------------------------------------------------------------------------- //

export const BookUpdateModal = () => {
  Modal.setAppElement('#root');
  
  const {isUpdateBookModalOpen, closeUpdateBookModal} = useModals();

  if (isUpdateBookModalOpen) {
    const {activeBook} = useBooks();
    const [newTitle, setTitle] = useState(activeBook!.title);
    const [newPublisher, setPublisher] = useState('');
    const [newAuthor, setAuthor] = useState('');
    const [newEdition, setEdition] = useState('');
    const [newSynopsis, setSynopsis] = useState('');
  
    console.log('modal active book: ', activeBook);
    console.log('newTitle: ', newTitle);
  
    const page1 = (
      <>
        <label>Título</label>
        <input value={ activeBook!.title } onChange={(e) => setTitle(e.target.value)}/>
  
        <label>Author</label>
        <input onChange={(e) => setAuthor(e.target.value)}/>
      </>
    );
  
    const page2 = (
      <>
        <label>Editora</label>
        <input value={activeBook?.publisher} onChange={(e) => setPublisher(e.target.value)}/>
  
        <label>Edição</label>
        <input onChange={(e) => setEdition(e.target.value)}/>
      </>
    );
    
    const page3 = (
      <>
        <label>Sinopse</label>
        <textarea onChange={(e) => setSynopsis(e.target.value)}/>
      </>
    );
  
  
    const [page, setPage] = useState<ReactNode>(page1);
    const [pageCounter, setPageCounter] = useState<number>(1);
  
    const nextPage = () => {
      if (pageCounter === 1) {
        setPage(page2);
        setPageCounter(2);
  
        return;
      }
  
      if (pageCounter === 2) {
        setPage(page3);
        setPageCounter(3);
        return;
      }
  
      return;
    }
  
    const previousPage = () => {
      if (pageCounter === 2) {
        setPage(page1);
        setPageCounter(1);
      }
  
      if (pageCounter === 3) {
        setPage(page2);
        setPageCounter(2);
      }
    };
  
    const handleSubmit = () => {
      setPage(page1);
      closeUpdateBookModal();
    }
  
    return (
      <Modal 
        overlayClassName="react-modal-overlay" 
        className="update-book-modal" isOpen={isUpdateBookModalOpen} 
        onRequestClose={closeUpdateBookModal}
      >
        <Container>
          <strong>Alteração de livro</strong>
          {page}
  
          {(pageCounter !== 1) && <button onClick={previousPage}>Voltar</button>}
  
          {(pageCounter !== 3) && <button onClick={nextPage}>Próxima</button>}
          {(pageCounter === 3) && <button onClick={handleSubmit}>Enviar</button>}
        </Container>
  
      </Modal>
    );
    
  }

  return (<></>);
  
}
