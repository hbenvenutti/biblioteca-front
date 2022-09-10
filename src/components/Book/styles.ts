import styled from "styled-components";

export const Container = styled.div`
  /* max-width: 27rem; */
  background: var(--gray-800);
  border-radius: 8px;
  padding:  2.5rem 2.5rem 0.05rem;

  .buttonContainer {
    height: 2.5rem;
    display: flex;
    justify-content: right;
  }

  .delete {
    background: transparent;
    color: var(--gray-300);
    border: 0px;
    margin-right: -30px;

    transition: color 0.15s;
  }

  .delete:hover {
    color: var(--pink-800);
  }

  .header {
    display: flex;
    justify-content: space-between;
  
    align-items: flex-start; 
  }

  .bookInfo strong {
    display: block;
    line-height: 1.6;
    color: var(--pink-700);
  }

  .bookInfo span {
    margin-top: 0.5rem;
    display: block;
    color: var(--pink-400)
  }

  .bookInfo span + span {
    margin-top: 0.5rem;
    display: block;
  }

  .edition {
    margin-top: 0;
    display: flex;
    flex-direction: column;
  }

  .edition span {
    margin: auto;
    margin-top: 0.5rem;
    color: var(--pink-300)
  }

  .edition p {
    margin: 0.5rem auto;
    color: var(--pink-300);
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
