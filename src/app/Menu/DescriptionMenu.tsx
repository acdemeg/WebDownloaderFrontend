import React from 'react';
import { useContextProvider } from '../ContextProvider';
import { ActionsDesk } from '../Types';

const DescriptionMenu: React.FC = () => {
  
  const { description } = useContextProvider();

  return (
    <div className='w-full h-52 border-solid border-4 border-black rounded p-1 break-words bg-sky-700 text-green-500'>
      {'> ' + description}
    </div>
  );
}

export default DescriptionMenu;

export const actionsDeskList: ActionsDesk = {
  DEFAULT : "",
  GET_STATUS_TASK: "GET_STATUS_TASK",
  START_DOWNLOAD : "START_DOWNLOAD",
  ESTIMATE_SIZE : "ESTIMATE_SIZE",
  BUILD_SITE_MAP : "BUILD_SITE_MAP",
  GET_ZIP : "GET_ZIP",
  GET_SIZE : "GET_SIZE",
  GET_SITE_MAP : "GET_SITE_MAP",
}