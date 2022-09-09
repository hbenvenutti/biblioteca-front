import styled from "styled-components";
import {Container} from '../components/Book/styles'

export const Content = styled.div`
  max-width: 70rem;
  margin: 2rem auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 256px 1fr;
  gap: 2rem;
  
  align-items: flex-start;

  ${Container} + ${Container} {
    margin-top: 1rem;
  }
`
