import React from 'react';
import { ENG, RUS } from '../Constants';
import { useContextProvider } from '../ContextProvider';

const LangSwitcher: React.FC = () =>   {

  const {lang, setLanguage} = useContextProvider();

  return (
    <div className="switch mr-0">
      <input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox" 
        onClick={() => setLanguage((lang === ENG) ? RUS : ENG)}/>
      <label htmlFor="language-toggle"/>
      <span className="on">RUS</span>
      <span className="off">ENG</span>
  </div>
  );
}

export default LangSwitcher;
