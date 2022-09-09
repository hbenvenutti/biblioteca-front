import React from 'react';
import { Container } from './styles';
import bookCover from '../../assets/book.jpg';
export const Book = () => (
  <Container>
    <div className="header">

      <div className="bookInfo">
        <strong>O senhor dos anéis: O retorno do rei</strong>
        <span>J.R.R. Tolkien</span>
      </div>

      <div className='edition'>
        <img src={bookCover} alt="book cover" />
        <span>Harper Collins</span>
        <p>1ª Edição</p>
      </div>
    </div>
    <footer>
      <article>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Possimus repellat illo atque harum sed. 
          Similique repudiandae qui quisquam, 
          laudantium amet rerum quidem reiciendis porro exercitationem dolor ab, 
          tempore molestiae id!
        </p>
      </article>
    </footer>
  </Container>
)
