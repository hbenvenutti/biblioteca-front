import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .send {
    background: transparent;
    color: var(--pink-800);
    border: 1px solid var(--pink-800);
    border-radius: 8px;
    height: 3rem;
    width: 5rem;

    transition: color 0.1s, background-color 0.1;
  }

  .send:hover {
    color: var(--gray-300);
    background: var(--pink-700);
  }

  .button-container {
    display: flex;
    justify-content: left;
    gap: 1rem;
  }

  button {
    color: var(--gray-300);
    background: transparent;
    border: 0;

    transition: color 0.1s;
  }

  button:hover {
    color: var(--pink-800);
  }

  input {
    margin: 0 2px;
    border: 4px solid var(--gray-800);
    outline: 2px solid var(--pink-800);
    border-radius: 8px;
    height: 2rem;
  }
`
// ---------------------------------------------------------------------------------------------- //

export const LoginContent = styled.div`
  margin: 0 5rem;
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 2rem;

  strong {
    font-size: 1.25rem;
    font-weight: bold;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .button-container {
    display: flex;
    flex-direction: row;
    justify-content: right;
  }
`
// ---------------------------------------------------------------------------------------------- //

export const RegisterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 2rem;

  strong {
    font-size: 1.25rem;
    font-weight: bold;
  }

  .section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
  }

  .button-container {
    display: flex;
    justify-content: right;
  }


`
