import styled from "styled-components";

export const Container = styled.button`
  /* background: var(--pink-700); */
  background: transparent;
  border-radius: 50px;
  width: 2.5rem;
  height: 2.5rem;
  color: var(--pink-800);
  border: 2px solid var(--pink-800);
  padding: 0.5rem;


  transition: color 0.15s, background-color 0.15s;

  :hover {
    color: var(--pink-100);
    background: var(--pink-800);
  }
`
