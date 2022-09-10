import React from 'react';
import Modal from 'react-modal';
import { useBooks } from '../../hooks/useBooks';
import { useModals } from '../../hooks/useModals';
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

  const {activeBook} = useBooks();
  const {isUpdateBookModalOpen, closeUpdateBookModal} = useModals()

  return (
    <Modal 
      overlayClassName="react-modal-overlay" 
      className="update-book-modal" isOpen={isUpdateBookModalOpen} 
      onRequestClose={closeUpdateBookModal}
    >

    </Modal>
  );
}
