import React, { useContext, useState } from 'react'
import { type Children, type ContextState, type OneTimeInfoType } from './Types'
import { RUS } from './Constants'
import { actionsDescList } from './internationalization/ActionDescriptions'
import ApiServiceData from './api/ApiServiceData'

const initialState: ContextState = {
  lang: RUS,
  setLanguage: () => {},
  input: '',
  setInput: () => {},
  actionDescription: actionsDescList.Rus.DEFAULT,
  setDescription: () => {},
  oneTimeInfoData: {
    headerType: '', value: '', textColor: 'blue', visible: false, apiMethod: ApiServiceData.statusTask, click: 0
  },
  setOneTimeInfoData: () => {}
}

const Context = React.createContext<ContextState>(initialState)

export const useContextProvider = (): ContextState => {
  return useContext<ContextState>(Context)
}

const ContextProvider: React.FC<Children> = ({ children }) => {
  const [lang, setLang] = useState<string>(initialState.lang)
  const [input, setInput] = useState<string>(initialState.input)
  const [actionDescription, setDescription] = useState<string>(initialState.actionDescription)
  const [oneTimeInfoData, setOneTimeInfoData] = useState<OneTimeInfoType>(initialState.oneTimeInfoData)

  const setLanguage = (lang: string): void => {
    setLang(lang)
    setDescription(actionsDescList[lang].DEFAULT)
  }

  return (
    <Context.Provider value={{
      input,
      setInput,
      lang,
      setLanguage,
      actionDescription,
      setDescription,
      oneTimeInfoData,
      setOneTimeInfoData
    }}>
          {children}
    </Context.Provider>
  )
}

export default ContextProvider
