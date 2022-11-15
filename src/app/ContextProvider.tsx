import React, { useContext, useState } from 'react';
import { Children, ContextState, OneTimeInfoType } from './Types';
import { RUS } from './Constants';
import { actionsDescList } from './internationalization/ActionDescriptions';
import ApiServiceData from './api/ApiServiceData';


const initialState = {
  lang: RUS,
  setLanguage: () => {},
  input: "",
  setInput: () => {},
  actionDescription: actionsDescList.Rus.DEFAULT,
  setDescription: () => {},
  fileURL: "",
  setFileURL: () => {},
  oneTimeInfoData: {
    headerType: "", value: "", visible: false, apiMethod: ApiServiceData.statusTask, click: 0
  },
  setOneTimeInfoData: () => {}
}

const Context = React.createContext<ContextState>(initialState);

export const useContextProvider = () => {
  return useContext(Context);
}

const ContextProvider: React.FC<Children> = ({ children }) =>   {

  const [lang, setLang] = useState<string>(initialState.lang);
  const [input, setInput] = useState<string>(initialState.input);
  const [actionDescription, setDescription] = useState<string>(initialState.actionDescription);
  const [fileURL, setFileURL] = useState<string>(initialState.fileURL);
  const [oneTimeInfoData, setOneTimeInfoData] = useState<OneTimeInfoType>(initialState.oneTimeInfoData);

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
      setFileURL,
      oneTimeInfoData,
      setOneTimeInfoData
    }}>
          {children}
    </Context.Provider>
  );
}

export default ContextProvider;
