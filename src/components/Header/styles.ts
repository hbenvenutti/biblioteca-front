import styled from 'styled-components';

export const Container = styled.header`
  background: var(--gray-800);
  height: 5rem;
`;

export const Content = styled.div`
    max-width: 70rem;
    padding: 1rem 1rem;
    margin: 0 auto;
  
    display: flex;
    align-items: center;
    justify-content: space-between;

  .title {
    display: flex;
    align-items: center;
  }
`;
