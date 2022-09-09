import styled from "styled-components";

export const Container = styled.div`
  max-width: 27rem;
  background: var(--gray-800);
  border-radius: 8px;
  padding: 2.5rem;

  .header {
    display: flex;
    /* grid-template-columns: 10rem 1fr; */
    justify-content: space-between;
    /* gap: 2rem; */
  
  align-items: flex-start; 
  }

  .bookInfo strong {
    display: block;
  }

  .bookInfo span {
    margin-top: 0.5rem;
    display: block;
  }

  img {
    width: 10rem; 
    /* height: calc(3rem + 12px); */
    border-radius: 8px;
    border: 4px solid var(--gray-800);
    outline: 2px solid var(--pink-800);
  }

  footer {
    border-top: 1px solid var(--gray-600);
    margin-top: 1.5rem;
    padding: 1rem 1rem 1rem;
  }
`
