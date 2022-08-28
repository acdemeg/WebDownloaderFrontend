import React from 'react';
import { Button } from 'antd';
import { useContextProvider } from '../ContextProvider';
import { MenuButtonProps } from '../Interfaces';
import { actionsDeskList } from '../Menu/DescriptionMenu';


const MenuButton: React.FC<MenuButtonProps> = ({ title, Icon, action }) => {

  const {setDescription} = useContextProvider();

  return (
    <div onMouseEnter={() => setDescription(actionsDeskList[action])}
         onMouseLeave={() => setDescription(actionsDeskList["DEFAULT"])}>
      <Button
        className={`rounded-md h-11 w-44 text-lg hover:text-white`} 
        icon={<Icon style={{ fontSize: '28px'}}/>}>
        {title}
      </Button>
    </div>
  );
}

export default MenuButton;
