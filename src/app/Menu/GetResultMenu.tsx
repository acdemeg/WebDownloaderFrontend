import React from 'react';
import MenuButton from '../components/MenuButton';
import { FileZipOutlined, ApartmentOutlined, SaveOutlined } from '@ant-design/icons';
import { GET_SIZE, GET_ZIP, GET_SITE_MAP } from '../Constants';

const GetResultMenu: React.FC = () =>   {
  return (
    <div className='flex flex-col justify-evenly'>
      <MenuButton action={GET_ZIP} title=' Get Zip' Icon={FileZipOutlined}/>
      <MenuButton action={GET_SIZE} title=' Get Size' Icon={SaveOutlined}/>
      <MenuButton action={GET_SITE_MAP} title=' Get Site Map' Icon={ApartmentOutlined}/>
    </div>
  );
}

export default GetResultMenu;
