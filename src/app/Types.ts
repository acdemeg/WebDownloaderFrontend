
export type ContextState = {
  description: string,
  setDescription: (desk: string) => void
}

export type Children = { children: React.ReactNode }

export type ActionsDesk = { [index: string]:  string }