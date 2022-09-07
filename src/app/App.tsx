import React from 'react';
import ContextProvider from './ContextProvider';
import LangSwitcher from './lang-switcher/LangSwitcher';
import Logo from './logo/Logo';
import MainContainer from './MainContainer';

const App: React.FC = () =>   {
  return (
    <ContextProvider>
      <LangSwitcher />
      <Logo/>
      <MainContainer />
    </ContextProvider>
  );
}

export default App;
