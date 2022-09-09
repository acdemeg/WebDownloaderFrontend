
export interface MenuButtonProps {
  bgColor?: string,
  title: string,
  Icon: React.ForwardRefExoticComponent<any>,
  action: string
  hanlder: () => void
}
