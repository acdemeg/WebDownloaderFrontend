
export type ContextState = {
  description: string,
  setDescription: (desk: string) => void
}

export type Children = { children: React.ReactNode }

export type Internationalization = {
   Eng: {
    [index: string]:  string
   },
   Rus: {
    [index: string]:  string
   }
  }
