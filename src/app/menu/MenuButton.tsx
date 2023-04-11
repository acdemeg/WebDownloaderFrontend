import React from 'react'
import { Button } from 'antd'
import { useContextProvider } from '../ContextProvider'
import { type MenuButtonProps } from '../Types'
import { actionsDescList } from '../../internationalization/ActionDescriptions'

const MenuButton: React.FC<MenuButtonProps> = ({ title, Icon, action, hanlder }) => {
  const { lang, setDescription } = useContextProvider()

  return (
    <div onMouseEnter={() => { setDescription(actionsDescList[lang][action]) }}
      onMouseLeave={() => { setDescription(actionsDescList[lang].DEFAULT) }}
      onClick={hanlder}>
      <Button
        className={'rounded-md h-11 w-48 text-lg hover:text-white'}
        icon={<Icon style={{ fontSize: '28px' }} />}>
        {title}
      </Button>
    </div>
  )
}

export default MenuButton
