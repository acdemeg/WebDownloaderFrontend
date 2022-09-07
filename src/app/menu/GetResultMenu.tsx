import React from 'react';
import MenuButton from './MenuButton';
import { FileZipOutlined, ApartmentOutlined, SaveOutlined } from '@ant-design/icons';
import { GET_SIZE, GET_ZIP, GET_SITE_MAP } from '../Constants';
import { useContextProvider } from '../ContextProvider';
import { titleButtonList } from '../internationalization/button-titles';

const GetResultMenu: React.FC = () =>   {

  const {lang} = useContextProvider();

  return (
    <div className='flex flex-col justify-evenly'>
      <MenuButton action={GET_ZIP} title={titleButtonList[lang][GET_ZIP]} Icon={FileZipOutlined}/>
      <MenuButton action={GET_SIZE} title={titleButtonList[lang][GET_SIZE]} Icon={SaveOutlined}/>
      <MenuButton action={GET_SITE_MAP} title={titleButtonList[lang][GET_SITE_MAP]} Icon={ApartmentOutlined}/>
    </div>
  );
}

export default GetResultMenu;
