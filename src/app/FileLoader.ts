import { type ResponseDto, type ContextState } from './Types'
import ApiServiceData from './api/ApiServiceData'
import { ONE_TIME_INFO_DOWNLOAD_HEADER, ONE_TIME_INFO_ERROR_HEADER } from './Constants'

export default async function fileLoader (context: ContextState) {
  const { input, lang, oneTimeInfoData, setOneTimeInfoData } = context
  const response: ResponseDto = await ApiServiceData.findZip(input, lang)

  if (response.statusCode < 400) {
    setOneTimeInfoData({ ...oneTimeInfoData, headerType: ONE_TIME_INFO_DOWNLOAD_HEADER, visible: true })
    ApiServiceData.getZip(response.result)
  } else {
    setOneTimeInfoData({ ...oneTimeInfoData, headerType: ONE_TIME_INFO_ERROR_HEADER, visible: true })
  }
}
