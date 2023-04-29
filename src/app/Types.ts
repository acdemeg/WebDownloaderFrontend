import { type Edge, type Node } from 'reactflow'

export interface ContextState {
  lang: Extract<keyof Internationalization, string>
  setLanguage: (lang: string) => void
  input: string
  setInput: (input: string) => void
  inputError: boolean
  setInputError: (error: boolean) => void
  actionDescription: string
  setDescription: (desc: string) => void
  oneTimeInfoData: OneTimeInfoType
  setOneTimeInfoData: (oneTimeInfoData: OneTimeInfoType) => void
  siteMap: IChartSite
  setSiteMap: (siteMap: IChartSite) => void
}

export interface MenuButtonProps {
  bgColor?: string
  title: string
  Icon: React.ForwardRefExoticComponent<any>
  action: string
  hanlder: () => void
}

export interface IShowOneTimeInfo {
  showOneTimeInfo: (headerType: string, apiMethod: ApiMethod) => void
}

export interface ResponseDto {
  statusCode: number
  result: string
}

export interface OneTimeInfoType {
  headerType: string
  value: string
  textColor: string
  visible: boolean
  apiMethod: ApiMethod
  click: number
}

export interface IMapSite {
  statusCode: number
  nodes: Node[]
  edges: Edge[]
}

export interface IChartSite {
  siteGraph: IMapSite
  visible: boolean
  apiMethod: ApiMapSite
  click: number
}

export interface Children { children: React.ReactNode }

export type Internationalization = Record<string, Record<string, string>>
export type ApiMethod = (param1: string, param2?: string) => Promise<ResponseDto>
export type ApiMapSite = (param1: string) => Promise<IMapSite>
