import React, { useEffect } from 'react';
import ApiServiceData from '../api/ApiServiceData';
import { useContextProvider } from '../ContextProvider';

const DownloadFileIframe: React.FC = () =>   {

  const {fileURL, lang} = useContextProvider();

  let fileName: string = "";
  let isActive: boolean = false

  useEffect(() => {

    //FIXME 
    console.log('DownloadFileIframe')

    ApiServiceData.findZip(fileURL, lang).then(
      response => {
        if(response.statusCode < 300){ 
          fileName = response.result;
          isActive = true;
        }
        else{
          //SET ERROR IN ON_TIME_INFO
          isActive = false;
        }
      }
    )
  })

  return (
    {isActive} ?
      <iframe title='Trick for download file' style={{display: 'none'}} src={fileName} /> : null
  );
}

export default DownloadFileIframe;