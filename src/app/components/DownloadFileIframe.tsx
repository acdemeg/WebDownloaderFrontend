import React, { useEffect, useState } from 'react';
import ApiServiceData from '../api/ApiServiceData';
import { ONE_TIME_INFO_DOWNLOAD_HEADER, ONE_TIME_INFO_ERROR_HEADER } from '../Constants';
import { useContextProvider } from '../ContextProvider';

const DownloadFileIframe: React.FC = () =>   {

  const {fileURL, lang, input, setInput, oneTimeInfoData, setOneTimeInfoData} = useContextProvider();

  const [fileName, setFileName] = useState<string>("");
  const [isActive, setActive] = useState<boolean>(false);

  useEffect(() => {
    if(input !== "") {
      ApiServiceData.findZip(fileURL, lang).then(
        response => {
          if(response.statusCode < 400) {
            setFileName(response.result);
            setOneTimeInfoData({
              ...oneTimeInfoData,
              visible: true, 
              headerType: ONE_TIME_INFO_DOWNLOAD_HEADER
            });
            setActive(true);
          }
          else {
            setOneTimeInfoData({
              ...oneTimeInfoData,
              visible: true, 
              headerType: ONE_TIME_INFO_ERROR_HEADER
            });
            setActive(false);
          }
          setInput("");
        }
      )}
    // eslint-disable-next-line
  },[fileURL])

  return (
    isActive ?
      <iframe 
        title='Trick for download file'
        style={{display: 'none'}}
        src={ApiServiceData.ZIP_DONWLOAD_API + fileName} /> : null
  );
}

export default DownloadFileIframe;