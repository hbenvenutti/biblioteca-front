import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 890px) {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: center;
    }
`
