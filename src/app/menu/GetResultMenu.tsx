import React from 'react';
import MenuButton from './MenuButton';
import { FileZipOutlined, ApartmentOutlined, SaveOutlined } from '@ant-design/icons';
import { GET_SIZE, GET_ZIP, GET_SITE_MAP } from '../Constants';
import { useContextProvider } from '../ContextProvider';
import { titleButtonList } from '../internationalization/ButtonTitles';
import ApiServiceData from '../api/ApiServiceData';

const GetResultMenu: React.FC = () =>   {

  const {lang, input, setFileURL} = useContextProvider();

  return (
    <div className='flex flex-col justify-evenly'>
      <MenuButton action={GET_ZIP} title={titleButtonList[lang][GET_ZIP]} Icon={FileZipOutlined} 
        hanlder={() => setFileURL(`${ApiServiceData.zipDonwloadApi}${input}`)}/>
      <MenuButton action={GET_SIZE} title={titleButtonList[lang][GET_SIZE]} Icon={SaveOutlined} 
        hanlder={() => {}}/>
      <MenuButton action={GET_SITE_MAP} title={titleButtonList[lang][GET_SITE_MAP]} Icon={ApartmentOutlined} 
        hanlder={() => {}}/>
    </div>
  );
}

export default GetResultMenu;
