import React from 'react';
import Modal from 'react-modal';
import { useBooks } from '../../hooks/useBooks';
import { useModals } from '../../hooks/useModals';
import { Container } from './styles';

// ---------------------------------------------------------------------------------------------- //

export const BookDeleteModal = () => {
  Modal.setAppElement('#root');

  const {activeBook} = useBooks()
  const {isDeleteBookModalOpen, closeDeleteBookModal} = useModals()

  return (
    <Modal 
      overlayClassName="react-modal-overlay" 
      className="delete-book-modal" 
      isOpen={isDeleteBookModalOpen} 
      onRequestClose={closeDeleteBookModal}
    >
    <Container>
      <strong>Remover Livro</strong> 
      <p>
        Você tem certeza que gostaria de remover 
        <br/>
        <span>{activeBook?.title}</span> ?
      </p>
      
      <div className="button-container">
        <button 
          onClick={ closeDeleteBookModal } 
          className="cancel"
        >
          Cancelar
        </button>

        <button 
          onClick={undefined}
          className="delete"
        >
          Remover
        </button>
      </div>
    </Container>
    </Modal>
  );
}


