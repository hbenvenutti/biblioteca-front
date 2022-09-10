import React from 'react';
import { Container } from './styles';
import { Trash, PencilSimpleLine } from 'phosphor-react'
import bookCover from '../../assets/book.jpg';
import { useAuthentication } from '../../hooks/useAuthentication';

// ---------------------------------------------------------------------------------------------- //
interface BookProps {
  id: string;
  title: string;
  publisher: string;
  author: string;
  edition: string;
  synopsis: string;
}

export const Book = (props: BookProps) => {
  const { authentication } = useAuthentication();

  return (
    <Container>

      <div className="header">

        <div className="bookInfo">
          <strong>{props.title}</strong>
          <span>J.R.R. Tolkien</span>
        </div>

        <div className='edition'>
          <img src={bookCover} alt="book cover" />
          <span>{props.publisher}</span>
          <p>{props.edition}</p>
        </div>

      </div>
      <footer>
        <article>
          <p>
            {props.synopsis}
          </p>
        </article>

        <div className='buttonContainer'>
          {authentication && <button className='edit'><PencilSimpleLine size={25} /></button>}
          {authentication && <button className='delete'><Trash size={25} /></button>}
        </div>
      </footer>
    </Container>
  )
}
