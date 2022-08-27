import React from 'react';
import Btn from '../components/Btn';
import { SearchOutlined } from '@ant-design/icons';
import RunTaskMenu from './RunTasksMenu';
import GetResultMenu from './GetResultMenu';
import DescriptionMenu from './DescriptionMenu';


const Menu: React.FC = () =>   {
  return (
    <div className='w-full h-72 flex justify-evenly'>
      <RunTaskMenu />
      <div className='flex flex-col justify-around items-center w-1/3'>
        <Btn title=' Status Task' Icon={SearchOutlined}/>
        <DescriptionMenu />
      </div>
      <GetResultMenu />
    </div>
  );
}

export default Menu;
