
export type ContextState = {
  actionDescription: string,
  setDescription: (desc: string) => void,
  lang: string,
  setLanguage: (lang: string) => void
}

export type Children = { children: React.ReactNode }

export type Internationalization = {
  [language: string]: {
    [actionType: string]:  string
   }
  }
