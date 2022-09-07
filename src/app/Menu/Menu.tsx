import React from 'react';
import MenuButton from './MenuButton';
import { SearchOutlined } from '@ant-design/icons';
import RunTaskMenu from './RunTasksMenu';
import GetResultMenu from './GetResultMenu';
import DescriptionMenu from './DescriptionMenu';
import { GET_STATUS_TASK } from '../Constants';
import { Internationalization } from '../Types';


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


export const titleButtonList: Internationalization = {
  Eng: {
    GET_STATUS_TASK: " Status Task",
    START_DOWNLOAD : " Start Download",
    ESTIMATE_SIZE : " Estimate Size'",
    BUILD_SITE_MAP : " Build Site Map",
    GET_ZIP : " Get Zip",
    GET_SIZE : " Get Size",
    GET_SITE_MAP : " Get Site Map"
  },
  Rus: {
    GET_STATUS_TASK: " Статус Задачи",
    START_DOWNLOAD : " Начать Загрузку",
    ESTIMATE_SIZE : " Оценка размера",
    BUILD_SITE_MAP : " Построить карту",
    GET_ZIP : " Получить архив",
    GET_SIZE : " Получить размер",
    GET_SITE_MAP : " Получить карту"
  }
}