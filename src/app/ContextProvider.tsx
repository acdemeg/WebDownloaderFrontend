import React, { useContext, useState } from 'react';

type T = {
  description: string,
  setDescription: (desk: string) => void
}

const Context = React.createContext<T>({
  description: "",
  setDescription: () => {}
});

export const useContextProvider = () => {
  return useContext(Context);
}

type Children = { children: React.ReactNode }

const ContextProvider: React.FC<Children> = ({ children }) =>   {

  const [state, setState] = useState<string>("default");

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
