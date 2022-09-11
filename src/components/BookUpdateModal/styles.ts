import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  strong {
    font-size: 1.25rem;
    font-weight: bold;
  }

  .button-container {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: right;
  }

  button {
    background: transparent;
    font-weight: bold;
    height: 4rem;
    width: 7rem;
    border: 0px;
    border-radius: 8px;
    color: var(--gray-300);
  }

  button:hover {
    border: 1px solid var(--gray-300);
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 180px;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  input {
    margin: 0 2px;
    box-sizing: border-box;
    height: 2rem;
    border: 4px solid var(--gray-800);
    outline: 2px solid var(--pink-800);
    border-radius: 8px;
  }

  textarea {
    height: 10rem;
    resize: none;
    border: 4px solid var(--gray-800);
    outline: 2px solid var(--pink-800);
    border-radius: 8px;
  }
`
