import React from 'react';
import { Button } from 'antd';
import { useContextProvider } from '../ContextProvider';

interface BtnProps {
  bgColor?: string,
  title: string,
  Icon: React.ForwardRefExoticComponent<any>,

}

const Btn: React.FC<BtnProps> = ({ title, Icon }) => {

  const {setDescription} = useContextProvider();

  return (
    <div>
      <Button
        onClick={() => setDescription(title)} 
        className={`rounded-md h-11 w-44 text-lg hover:text-white`} 
        icon={<Icon style={{ fontSize: '28px'}}/>}>
        {title}
      </Button>
    </div>
  );
}

export default Btn;
