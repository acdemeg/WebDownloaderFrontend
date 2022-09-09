import React from 'react';
import MenuButton from './MenuButton';
import { SearchOutlined } from '@ant-design/icons';
import RunTaskMenu from './RunTasksMenu';
import GetResultMenu from './GetResultMenu';
import DescriptionMenu from './DescriptionMenu';
import { GET_STATUS_TASK, ONE_TIME_INFO_STATUS_HEADER } from '../Constants';
import { useContextProvider } from '../ContextProvider';
import { titleButtonList } from '../internationalization/ButtonTitles';


const Menu: React.FC = () =>   {

  const {lang, input, oneTimeInfoData, setOneTimeInfoData} = useContextProvider();

  const showOneTimeInfo = () => {
    if(input !== ""){
      setOneTimeInfoData({
        ...oneTimeInfoData,
        visible: true, 
        headerType: ONE_TIME_INFO_STATUS_HEADER
      })
    }
  }

  return (
    <div className='w-full h-72 flex justify-evenly'>
      <RunTaskMenu />
      <div className='flex flex-col justify-around items-center w-1/3'>
        <MenuButton 
           action={GET_STATUS_TASK}
           title={titleButtonList[lang][GET_STATUS_TASK]}
           Icon={SearchOutlined}
           hanlder={showOneTimeInfo}/>
        <DescriptionMenu />
      </div>
      <GetResultMenu />
    </div>
  );
}

export default Menu;


