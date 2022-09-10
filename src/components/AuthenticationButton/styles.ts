import styled from 'styled-components';

export const Container = styled.button`
  /* width: 100%; */
  background: transparent;
  color: var(--pink-700);
  border: 1px solid var(--pink-700);
  border-radius: 8px;
  padding: 0 1.5rem;
  height: 3.125rem;
  width: 7.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  transition: color 0.2s, background-color 0.2s;

  text-decoration: none;
  
  /* display: block; aplica width 100% automaticamente */
  
  :hover {
    background: var(--pink-700);
    color: var(--white);
  }
`;
