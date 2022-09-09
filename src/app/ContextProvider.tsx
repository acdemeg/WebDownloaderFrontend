import React, { useContext, useState } from 'react';
import { Children, ContextState } from './Types';
import { RUS } from './Constants';
import { actionsDescList } from './internationalization/ActionDescriptions';

const Context = React.createContext<ContextState>({
  lang: "",
  setLanguage: () => {},
  input: "",
  setInput: () => {},
  actionDescription: "",
  setDescription: () => {},
  fileURL: "",
  setFileURL: () => {}
});

export const useContextProvider = () => {
  return useContext(Context);
}

const ContextProvider: React.FC<Children> = ({ children }) =>   {

  const [lang, setLang] = useState<string>(RUS);
  const [input, setInput] = useState<string>("");
  const [actionDescription, setDescription] = useState<string>(actionsDescList.Rus.DEFAULT);
  const [fileURL, setFileURL] = useState<string>("");

  const setLanguage = (lang: string) => {
    setLang(lang);
    setDescription(actionsDescList[lang].DEFAULT);
  }

  return (
    <Context.Provider value={{
      input,
      setInput,
      lang,
      setLanguage,
      actionDescription,
      setDescription,
      fileURL,
      setFileURL

    }}>
          {children}
    </Context.Provider>
  );
}

export default ContextProvider;
