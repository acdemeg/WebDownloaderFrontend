import React from 'react';
import { Button } from 'antd';
import { useContextProvider } from '../ContextProvider';
import { BtnProps } from '../Interfaces';


const Btn: React.FC<BtnProps> = ({ title, Icon }) => {

  const {setDescription} = useContextProvider();

  return (
    <div>
      <Button
        onMouseEnter={() => setDescription(title)}
        onMouseLeave={() => setDescription("")} 
        className={`rounded-md h-11 w-44 text-lg hover:text-white`} 
        icon={<Icon style={{ fontSize: '28px'}}/>}>
        {title}
      </Button>
    </div>
  );
}

export default Btn;
