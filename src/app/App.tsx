import React from 'react'
// import OneTimeInfo from './components/OneTimeInfo'
// import LangSwitcher from './lang-switcher/LangSwitcher'
// import Logo from './logo/Logo'
// import MainContainer from './main/MainContainer'
import Sitemap from './sitemap/Sitemap'
import ContextProvider from './ContextProvider'

const App: React.FC = () => {
  return (
    <ContextProvider>
      {/* <LangSwitcher />
      <Logo />
      <MainContainer />
      <OneTimeInfo /> */}
      <Sitemap />
    </ContextProvider>
  )
}

export default App
