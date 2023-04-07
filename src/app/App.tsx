import React from 'react';
import OneTimeInfo from './components/OneTimeInfo';
import ContextProvider from './ContextProvider';
import LangSwitcher from './lang-switcher/LangSwitcher';
import Logo from './logo/Logo';
import MainContainer from './main/MainContainer';

const App: React.FC = () => {
  return (
    <ContextProvider>
      <LangSwitcher />
      <Logo/>
      <MainContainer />
      <OneTimeInfo/>
    </ContextProvider>
  );
}

export default App;
