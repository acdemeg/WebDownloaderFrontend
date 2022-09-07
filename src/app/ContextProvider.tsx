import React, { useContext, useState } from 'react';
import { Children, ContextState } from './Types';
import { RUS } from './Constants';
import { actionsDescList } from './internationalization/action-titles';

const Context = React.createContext<ContextState>({
  actionDescription: "",
  setDescription: () => {},
  lang: "",
  setLanguage: () => {}
});

export const useContextProvider = () => {
  return useContext(Context);
}

const ContextProvider: React.FC<Children> = ({ children }) =>   {

  const [lang, setLang] = useState<string>(RUS);
  const [description, setDescription] = useState<string>(actionsDescList.Rus.DEFAULT);

  const setLanguage = (lang: string) => {
    setLang(lang);
    setDescription(actionsDescList[lang].DEFAULT);
  }

  return (
    <Context.Provider value={{
      actionDescription: description,
      setDescription,
      lang: lang,
      setLanguage
    }}>
          {children}
    </Context.Provider>
  );
}

export default ContextProvider;
