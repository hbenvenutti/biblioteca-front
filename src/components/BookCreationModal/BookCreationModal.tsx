import React, { ReactNode, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useModals } from '../../hooks/useModals';
import { Container } from './styles';
import { Page } from './Page';
import { SynopsisPage } from './SynopsisPage';
import { apiProvider } from '../../providers/api-provider/ApiProviderFactory';

// ---------------------------------------------------------------------------------------------- //
interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  edition: string;
  synopsis: string
}

export const BookCreationModal = () => {
  Modal.setAppElement('#root');
  
  const {isCreateBookModalOpen, closeCreateBookModal} = useModals();

  // *** ---- States ------------------------------------------------------------------------ *** //
  const [title, setTitle] = useState('');
  const [publisher, setPublisher] = useState('');
  const [author, setAuthor] = useState('');
  const [edition, setEdition] = useState('');
  const [synopsis, setSynopsis] = useState('');
  
  const [page, setPage] = useState<ReactNode>();
  const [pageCounter, setPageCounter] = useState<number>(1);

  // *** ---- Pages ------------------------------------------------------------------------- *** //
  const page1 = <Page
    key='page1' 
    label1={`Título:`} 
    label2={`Autor:`}
    onChange1={setTitle}
    onChange2={setAuthor}
    defaultValue1={title}
    defaultValue2={author}
  />

  const page2 = <Page 
    key='page2'
    label1={'Editora:'} 
    label2={'Edição:'}
    onChange1={setPublisher}
    onChange2={setEdition}
    defaultValue1={publisher}
    defaultValue2={edition}
  />
  
  const page3 = <SynopsisPage text={synopsis} onChange={setSynopsis}/>

  // *** ---- Functions --------------------------------------------------------------------- *** //
  const onRequestClose = () => {
    resetAllStates();
    closeCreateBookModal();
    return;
  }

  const resetAllStates = () => {
    setPage(page1);
    setPageCounter(1);
    setTitle('');
    setAuthor('');
    setPublisher('');
    setEdition('');
    setSynopsis('');
  }

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    await apiProvider.addBook({title,author, edition, publisher, synopsis})
    
    onRequestClose();
    return;
  }

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

  // *** ---- Effects ----------------------------------------------------------------------- *** //
  useEffect(() => {
    resetAllStates();
  }, [isCreateBookModalOpen])

  // *** ---- TSX --------------------------------------------------------------------------- *** //
  return (
    <Modal
      overlayClassName="react-modal-overlay" 
      className="create-book-modal" 
      isOpen={isCreateBookModalOpen} 
      onRequestClose={onRequestClose}
    >
      <Container onSubmit={handleSubmit}>
        <strong>Adicionar Livro</strong>
          {page}

          <div className='button-container'>
            {(pageCounter <= 1) && <button type="button" onClick={onRequestClose}>Cancelar</button>}
            {(pageCounter > 1) && <button type="button" onClick={previousPage}>Voltar</button>}
            {(pageCounter !== 3) && <button type="button" onClick={nextPage}>Próximo</button>}
            {(pageCounter === 3) && <button type='submit'>Enviar</button>}
          </div>
      </Container>
    </Modal>
  )
}
