
export type ContextState = {
  lang: string,
  setLanguage: (lang: string) => void,
  input: string,
  setInput: (input: string) => void,
  actionDescription: string,
  setDescription: (desc: string) => void,
  fileURL: string,
  setFileURL: (fileURL: string) => void,
  oneTimeInfoData: OneTimeInfoType
  setOneTimeInfoData: (oneTimeInfoData: OneTimeInfoType) => void,
}

export type Children = { children: React.ReactNode }

export type Internationalization = {
  [language: string]: {
    [actionType: string]:  string
   }
}

export type ResponseDto = { 
  statusCode: number,
  result: string
}

export type ApiMethod = (param1: string, param2?: string) => Promise<ResponseDto>;

export type OneTimeInfoType = {
  headerType: string,
  value: string,
  visible: boolean,
  apiMethod: ApiMethod,
  click: number
}
