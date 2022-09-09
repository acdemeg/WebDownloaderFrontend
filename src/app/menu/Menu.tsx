import React from 'react';
import MenuButton from './MenuButton';
import { SearchOutlined } from '@ant-design/icons';
import RunTaskMenu from './RunTasksMenu';
import GetResultMenu from './GetResultMenu';
import DescriptionMenu from './DescriptionMenu';
import { GET_STATUS_TASK } from '../Constants';
import { useContextProvider } from '../ContextProvider';
import { titleButtonList } from '../internationalization/ButtonTitles';


const Menu: React.FC = () =>   {

  const {lang} = useContextProvider();

  return (
    <div className='w-full h-72 flex justify-evenly'>
      <RunTaskMenu />
      <div className='flex flex-col justify-around items-center w-1/3'>
        <MenuButton 
           action={GET_STATUS_TASK}
           title={titleButtonList[lang][GET_STATUS_TASK]}
           Icon={SearchOutlined}
           hanlder={() => {}}/>
        <DescriptionMenu />
      </div>
      <GetResultMenu />
    </div>
  );
}

export default Menu;


