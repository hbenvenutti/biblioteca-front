import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: space-between;
  text-align: center;

  .button-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  .delete {
    color: var(--pink-800);
    font-weight: bold;
  }

  .delete:hover {
    border: 1px solid var(--pink-800);
  }

  .cancel:hover {
    border: 1px solid var(--gray-400);
  }

  strong {
    font-size: 1.25rem;
    font-weight: bold;
  }

  p {
    text-align: center;
  }

  span {
    color: var(--pink-800)
  }

  button {
    background: transparent;
    height: 4rem;
    width: 7rem;
    border: 0px;
    border-radius: 8px;
    color: var(--gray-300);
  }
`
export const ModalStyles = styled.div`
  background: var(--gray-800);
`
