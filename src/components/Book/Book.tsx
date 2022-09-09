import React from 'react';
import { Container } from './styles';
import bookCover from '../../assets/book.jpg';
export const Book = () => (
  <Container>
    <div className="header">

      <div className="bookInfo">
        <strong>O senhor dos anéis</strong>
        <span>J.R.R. Tolkien</span>
        <span>Harper Collins</span>
        <span>1ª Edição</span>
      </div>

      <img src={bookCover} alt="book cover" />
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
