import React from 'react';
import MenuButton from './MenuButton';
import {  CloudDownloadOutlined, HddOutlined, ForkOutlined } from '@ant-design/icons';
import { START_DOWNLOAD, ESTIMATE_SIZE, BUILD_SITE_MAP, ONE_TIME_INFO_TASK_HEADER } from '../Constants';
import { titleButtonList } from '../internationalization/ButtonTitles';
import { useContextProvider } from '../ContextProvider';
import { IShowOneTimeInfo } from '../Interfaces';
import ApiServiceData from '../api/ApiServiceData';

const RunTaskMenu: React.FC<IShowOneTimeInfo> = ({ showOneTimeInfo }) =>   {

  const { lang } = useContextProvider();

  return (
    <div className='flex flex-col justify-evenly'>
      <MenuButton action={START_DOWNLOAD} title={titleButtonList[lang][START_DOWNLOAD]} Icon={CloudDownloadOutlined} 
           hanlder={() => showOneTimeInfo(
            ONE_TIME_INFO_TASK_HEADER,
            ApiServiceData.requireDownload.bind(ApiServiceData)
            )}/>
      <MenuButton action={ESTIMATE_SIZE} title={titleButtonList[lang][ESTIMATE_SIZE]} Icon={HddOutlined} 
           hanlder={() => showOneTimeInfo(
            ONE_TIME_INFO_TASK_HEADER,
            ApiServiceData.estimateSize.bind(ApiServiceData)
            )}/>
      <MenuButton action={BUILD_SITE_MAP} title={titleButtonList[lang][BUILD_SITE_MAP]} Icon={ForkOutlined} 
           hanlder={() => showOneTimeInfo(
            ONE_TIME_INFO_TASK_HEADER,
            ApiServiceData.mapSite.bind(ApiServiceData)
            )}/>       
    </div>
  );
}

export default RunTaskMenu;
