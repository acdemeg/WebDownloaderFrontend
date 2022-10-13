import { ApiMethod } from "./Types";

export interface MenuButtonProps {
  bgColor?: string,
  title: string,
  Icon: React.ForwardRefExoticComponent<any>,
  action: string
  hanlder: () => void
}

export interface IShowOneTimeInfo {
  showOneTimeInfo: (headerType: string, apiMethod: ApiMethod) => void;
}
