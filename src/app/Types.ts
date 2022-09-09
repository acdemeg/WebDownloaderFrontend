
export type ContextState = {
  lang: string,
  setLanguage: (lang: string) => void,
  input: string,
  setInput: (input: string) => void,
  actionDescription: string,
  setDescription: (desc: string) => void,
  fileURL: string,
  setFileURL: (fileURL: string) => void
}

export type Children = { children: React.ReactNode }

export type Internationalization = {
  [language: string]: {
    [actionType: string]:  string
   }
  }
