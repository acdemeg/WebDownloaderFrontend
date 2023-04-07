
export interface ContextState {
  lang: Extract<keyof Internationalization, string>
  setLanguage: (lang: string) => void
  input: string
  setInput: (input: string) => void
  actionDescription: string
  setDescription: (desc: string) => void
  oneTimeInfoData: OneTimeInfoType
  setOneTimeInfoData: (oneTimeInfoData: OneTimeInfoType) => void
}

export interface Children { children: React.ReactNode }

export type Internationalization = {
  [language: string]: {
    [actionType: string]:  string
   }
}

export interface ResponseDto {
  statusCode: number
  result: string
}

export type ApiMethod = (param1: string, param2?: string) => Promise<ResponseDto>

export interface OneTimeInfoType {
  headerType: string
  value: string
  textColor: string
  visible: boolean
  apiMethod: ApiMethod
  click: number
}
