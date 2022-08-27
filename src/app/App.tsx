import React from 'react';
import ContextProvider from './ContextProvider';
import Logo from './logo/Logo';
import MainContainer from './MainContainer';

const App: React.FC = () =>   {
  return (
    <ContextProvider>
      <Logo/>
      <MainContainer />
    </ContextProvider>
  );
}

export default App;
