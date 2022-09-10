import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  input {
    border: 4px solid var(--gray-800);
    outline: 2px solid var(--pink-800);
    border-radius: 8px;
  }

  textarea {
    border: 4px solid var(--gray-800);
    outline: 2px solid var(--pink-800);
    border-radius: 8px;
  }
`
