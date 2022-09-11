import React, { ReactNode, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useModals } from '../../hooks/useModals';
import { Page } from './Page'
import { Container } from './styles';
import { SynopsisPage } from './SynopsisPage';

// ---------------------------------------------------------------------------------------------- //

interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  edition: string;
  synopsis: string
}

interface BookUpdateModalProps {
  book: Book;
}

// ---------------------------------------------------------------------------------------------- //
export const BookUpdateModal = (props: BookUpdateModalProps) => {
  Modal.setAppElement('#root');
  
  const {isUpdateBookModalOpen, closeUpdateBookModal} = useModals();

  // *** ---- States ------------------------------------------------------------------------ *** //
  const [newTitle, setTitle] = useState(props.book.title);
  const [newPublisher, setPublisher] = useState(props.book.publisher);
  const [newAuthor, setAuthor] = useState(props.book.author);
  const [newEdition, setEdition] = useState(props.book.edition);
  const [newSynopsis, setSynopsis] = useState(props.book.synopsis);
  
  const [page, setPage] = useState<ReactNode>();
  const [pageCounter, setPageCounter] = useState<number>(1);

  // *** ---- Pages ------------------------------------------------------------------------- *** //
  const page1 = <Page
    key='page1' 
    label1={`Título`} 
    label2={`Autor`}
    onChange1={setTitle}
    onChange2={setAuthor}
    defaultValue1={newTitle}
    defaultValue2={newAuthor}
  />

  const page2 = <Page 
    key='page2'
    label1={`Editora: ${newPublisher}`} 
    label2={`Edição: ${newEdition}`}
    onChange1={setPublisher}
    onChange2={setEdition}
    defaultValue1={props.book.publisher}
    defaultValue2={props.book.edition}
/>
  
  const page3 = <SynopsisPage text={newSynopsis} onChange={setSynopsis}/>
  
  // *** ---- Functions --------------------------------------------------------------------- *** //
  const nextPage = () => {
    if (pageCounter === 0) {
      setPage(page1);
      setPageCounter(1);

      return;
    }
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
    onRequestClose();
  }
  
  const onRequestClose = () => {
    setPage(page1);
    setPageCounter(1);
    closeUpdateBookModal();
  };

  // *** ---- Effects ----------------------------------------------------------------------- *** //
  useEffect(() => {
    setPage(page1);
    setTitle(props.book.title)
    setAuthor(props.book.author)
    setPublisher(props.book.publisher)
    setEdition(props.book.edition)
    setSynopsis(props.book.synopsis)
  }, [isUpdateBookModalOpen])

  // *** ---- TSX --------------------------------------------------------------------------- *** //
  return (
    <Modal 
      overlayClassName="react-modal-overlay" 
      className="update-book-modal" isOpen={isUpdateBookModalOpen} 
      onRequestClose={onRequestClose}
    >
      <Container>
        <strong>Alterar Livro</strong>
        <div className='content'>
          {page}
        </div>

        <div className='button-container'>
          {(pageCounter <= 1) && <button onClick={closeUpdateBookModal}>Cancelar</button>}
          {(pageCounter > 1) && <button onClick={previousPage}>Voltar</button>}
          {(pageCounter !== 3) && <button onClick={nextPage}>Próximo</button>}
          {(pageCounter === 3) && <button onClick={handleSubmit}>Enviar</button>}
        </div>
      </Container>

    </Modal>
  ); 
}
