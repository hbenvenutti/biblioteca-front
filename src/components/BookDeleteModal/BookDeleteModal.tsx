import React from 'react';
import Modal from 'react-modal';
import { useBooks } from '../../hooks/useBooks';
import { Container, ModalStyles } from './styles';

interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  edition: string;
  synopsis: string
}

interface BookDeleteModalProps {
  isOpen: boolean;
  // book: Book;
  onRequestClose: () => void
}

export const BookDeleteModal = (props: BookDeleteModalProps) => {
  Modal.setAppElement('#root');
  const {activeBook} = useBooks()

  return (
    <Modal overlayClassName="react-modal-overlay" className="delete-book-modal" isOpen={props.isOpen} onRequestClose={props.onRequestClose}>
    <Container>
      <strong>Remover Livro</strong> 
      <p>Você tem certeza que gostaria de remover <br/><span>{activeBook?.title}</span> ?</p>
      
      <div className="button-container">
        <button 
          onClick={ props.onRequestClose } 
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


