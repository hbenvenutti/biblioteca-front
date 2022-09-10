import React from 'react';
import { Container } from './styles';
import { Trash } from 'phosphor-react'
import bookCover from '../../assets/book.jpg';
import { useAuthentication } from '../../hooks/useAuthentication';

export const Book = () => {
  const { authentication } = useAuthentication();

  return (
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
    
        <div className='buttonContainer'>
          {authentication && <button className='delete'><Trash size={25}/></button> }
        </div>
      </footer>
    </Container>
  )
}
