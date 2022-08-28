import React from 'react';
import MenuButton from '../components/MenuButton';
import { SearchOutlined } from '@ant-design/icons';
import RunTaskMenu from './RunTasksMenu';
import GetResultMenu from './GetResultMenu';
import DescriptionMenu from './DescriptionMenu';
import { GET_STATUS_TASK } from '../Constants';


const Menu: React.FC = () =>   {
  return (
    <div className='w-full h-72 flex justify-evenly'>
      <RunTaskMenu />
      <div className='flex flex-col justify-around items-center w-1/3'>
        <MenuButton action={GET_STATUS_TASK} title=' Status Task' Icon={SearchOutlined}/>
        <DescriptionMenu />
      </div>
      <GetResultMenu />
    </div>
  );
}

export default Menu;
