import React from 'react';

import { BodyContainer } from './components/BodyContainer';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Content } from './styles/App.styles';
import { GlobalStyle } from './styles/Global';

const App = () => {
  const logged = true;
  
  return (
    <>
      <Header logged={logged}/>
      {/* <BodyContainer /> */}
      <Content>
        <Sidebar />
        <main>
          <div>
            Livro
          </div>
        </main>
      </Content>
      
      <GlobalStyle />
    </>
  )
}

export { App };
