import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useBooks } from '../../hooks/useBooks';
import { useModals } from '../../hooks/useModals';
import { apiProvider } from '../../providers/api-provider/ApiProviderFactory';
import { Container } from './styles';

// ---------------------------------------------------------------------------------------------- //

export const BookDeleteModal = () => {
  Modal.setAppElement('#root');

  const {bookToEdit, getBooks} = useBooks()
  const {isDeleteBookModalOpen, closeDeleteBookModal} = useModals()

  const handleSubmit = async (event :any): Promise<void> => {
    event.preventDefault();
    
    if (bookToEdit) {
      console.log(bookToEdit?.id);
      await apiProvider.deleteBook(bookToEdit?.id);
      await getBooks();
      closeDeleteBookModal();
    }
  }

  return (
    <Modal 
      overlayClassName="react-modal-overlay" 
      className="delete-book-modal" 
      isOpen={isDeleteBookModalOpen} 
      onRequestClose={closeDeleteBookModal}
    >
    <Container onSubmit={handleSubmit}>
      <strong>Remover Livro</strong> 
      <p>
        Você tem certeza que gostaria de remover 
        <br/>
        <span>{bookToEdit?.title}</span> ?
      </p>
      
      <div className="button-container">
        <button 
          onClick={ closeDeleteBookModal } 
          className="cancel"
        >
          Cancelar
        </button>

        <button 
          type='submit'
          className="delete"
        >
          Remover
        </button>
      </div>
    </Container>
    </Modal>
  );
}


