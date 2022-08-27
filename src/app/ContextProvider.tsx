import React, { useContext, useState } from 'react';
import { Children, ContextState } from './Types';

const Context = React.createContext<ContextState>({
  description: "",
  setDescription: () => {}
});

export const useContextProvider = () => {
  return useContext(Context);
}

const ContextProvider: React.FC<Children> = ({ children }) =>   {

  const [state, setState] = useState<string>("");

  const setDescription = (desk: string) => {
    setState(desk);
  }

  return (
    <Context.Provider value={{
      description: state,
      setDescription
    }}>
          {children}
    </Context.Provider>
  );
}

export default ContextProvider;
