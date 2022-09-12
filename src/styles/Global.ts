import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --gray-100: #e1e1e6;
    --gray-300: #c4c4cc;
    --gray-400: #8d8d99;
    --gray-600: #323238;
    --gray-700: #29292e;
    --gray-800: #202024;
    --gray-900: #121214;
  
    --green-500: #00875f;

    --pink-050: #fff1f2;
    --pink-100: #ffe4e6;
    --pink-200: #fbcfe8;
    --pink-300: #f9a8d4;
    --pink-400: #f472b6;
    --pink-500: #ec4899;
    --pink-600: #db2777;
    --pink-700: #be185d;
    --pink-800: #9d174d;
    --pink-900: #831843;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    /* Font Size reaction */
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }

    @media (max-width: 520px) {
      font-size: 80.5%;
    }
  }

  body {
    background: var(--gray-900);
    color: var(--gray-300);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }


  .react-modal-overlay{
      background: rgba(0, 0, 0, 0.7);
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      display: flex;
      align-items: center;
      justify-content: center;
  }

  .delete-book-modal {
    background: var(--gray-800);
    width: 27rem;
    height: 14rem;
    padding: 1.5rem;
    border-radius: 8px;
    color: var(--gray-300);
  }

  .update-book-modal {
    background: var(--gray-800);
    color: var(--gray-300);
    width: 30rem;
    height: 25rem;
    padding: 2rem;
    border-radius: 8px;
  }

  .authentication-modal {
    background: var(--gray-800);
    color: var(--gray-300);
    width: 30rem;
    height: 25rem;
    padding: 2rem;
    border-radius: 8px;
  };

  .registration-modal {
    background: var(--gray-800);
    color: var(--gray-300);
    width: 35rem;
    height: 38rem;
    padding: 2rem;
    border-radius: 8px;
  };
`;
