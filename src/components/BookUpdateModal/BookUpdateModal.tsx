import React, { ReactNode, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useBooks } from '../../hooks/useBooks';
import { useModals } from '../../hooks/useModals';
import { apiProvider } from '../../providers/api-provider/ApiProviderFactory';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
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
export const BookUpdateModal = () => {
  Modal.setAppElement('#root');
  
  const {isUpdateBookModalOpen, closeUpdateBookModal} = useModals();
  const {getBooks, bookToEdit} = useBooks();

  // *** ---- States ------------------------------------------------------------------------ *** //
  const [newTitle, setTitle] = useState('');
  const [newPublisher, setPublisher] = useState('');
  const [newAuthor, setAuthor] = useState('');
  const [newEdition, setEdition] = useState('');
  const [newSynopsis, setSynopsis] = useState('');
  
  const [page, setPage] = useState<ReactNode>();
  const [pageCounter, setPageCounter] = useState<number>(1);

  // *** ---- Pages ------------------------------------------------------------------------- *** //
  const page1 = <Page1
    key='page1' 
    onChangeTitle={setTitle}
    onChangeAuthor={setAuthor}
  />

  const page2 = <Page2
    key='page2'
    onChangePublisher={setPublisher}
    onChangeEdition={setEdition}
  />
  
  const page3 = <SynopsisPage onChange={setSynopsis}/>
  
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

  const handleSubmit = async (event:any) => {
    event.preventDefault();

    await apiProvider.updateBook({
      id: bookToEdit!.id,
      title: newTitle,
      author: newAuthor,
      edition: newEdition,
      publisher: newPublisher,
      synopsis: newSynopsis
    });

    getBooks();
    onRequestClose();
  }
  
  const onRequestClose = () => {
    resetAllStates();

    closeUpdateBookModal();
  };

  const resetAllStates = () => {
    setPage(page1);
    setPageCounter(1);
    setTitle('');
    setAuthor('');
    setPublisher('');
    setEdition('');
    setSynopsis('');
  }

  // *** ---- Effects ----------------------------------------------------------------------- *** //
  useEffect(() => {
    if (isUpdateBookModalOpen && bookToEdit) {
      console.log('useffect: ', bookToEdit);
      setPage(page1);
      setTitle(bookToEdit.title)
      setAuthor(bookToEdit.author)
      setPublisher(bookToEdit.publisher)
      setEdition(bookToEdit.edition)
      setSynopsis(bookToEdit.synopsis)
      return;
    }

    resetAllStates();
  }, [isUpdateBookModalOpen])

  // *** ---- TSX --------------------------------------------------------------------------- *** //
  return (
    <Modal key='1'
      overlayClassName="react-modal-overlay" 
      className="update-book-modal" 
      isOpen={isUpdateBookModalOpen} 
      onRequestClose={onRequestClose}
    >
      <Container onSubmit={handleSubmit}>
        <strong>Alterar Livro</strong>
        <div className='content'>
          {page}
        </div>

        <div className='button-container'>
          {(pageCounter <= 1) && <button type='button' onClick={closeUpdateBookModal}>Cancelar</button>}
          {(pageCounter > 1) && <button type='button' onClick={previousPage}>Voltar</button>}
          {(pageCounter !== 3) && <button type='button' onClick={nextPage}>Próximo</button>}
          {(pageCounter === 3) && <button type='submit'>Enviar</button>}
        </div>
      </Container>

    </Modal>
  ); 
}
