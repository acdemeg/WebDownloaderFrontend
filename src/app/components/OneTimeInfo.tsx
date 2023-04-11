import { Button } from 'antd'
import React, { useEffect } from 'react'
import { useContextProvider } from '../ContextProvider'
import { titleButtonList } from '../../internationalization/ButtonTitles'
import { CLOSE, COPY, ONE_TIME_INFO_ERROR_HEADER } from '../Constants'
import { common } from '../../internationalization/Captions'

const OneTimeInfo: React.FC = () => {
  const { lang, input, setInput, oneTimeInfoData, setOneTimeInfoData } = useContextProvider()

  useEffect(() => {
    console.log('oneTimeInfo effect')
    if (oneTimeInfoData.click !== 0) {
      oneTimeInfoData.apiMethod(input, lang).then(
        response => {
          if (response.statusCode < 400) {
            setOneTimeInfoData({
              ...oneTimeInfoData,
              value: response.result,
              textColor: 'green',
              visible: true
            })
          } else {
            setOneTimeInfoData({
              ...oneTimeInfoData,
              headerType: ONE_TIME_INFO_ERROR_HEADER,
              value: response.result,
              textColor: 'red',
              visible: true
            })
          }
          setInput('')
        }
      ).catch(err => { console.log(err) })
    }
    // eslint-disable-next-line
  }, [oneTimeInfoData.click])

  const buttonClasses = 'border-2 border-solid mx-3 rounded-md h-11 w-48 text-lg'

  return oneTimeInfoData.visible
    ? (
      <div className="border-2 border-solid text-slate-300 text-2xl h-48 w-1/2 min-w-[48rem]
               max-w-4xl mx-auto my-4 rounded-xl flex flex-col justify-evenly items-center">
        <span className="text-3xl">{common[lang][oneTimeInfoData.headerType]}</span>
        <span className={`text-${oneTimeInfoData.textColor}-500`}>{oneTimeInfoData.value}</span>
        <div>
          <Button
            className={`${buttonClasses} hover:text-blue-400 hover:border-blue-400`}
            onClick={() => { navigator.clipboard.writeText(oneTimeInfoData.value).catch(e => { console.log(e) }) }}>
            {titleButtonList[lang][COPY]}
          </Button>
          <Button danger
            className={`${buttonClasses} hover:text-red-400 hover:border-red-400`}
            onClick={() => { setOneTimeInfoData({ ...oneTimeInfoData, visible: false }) }}>
            {titleButtonList[lang][CLOSE]}
          </Button>
        </div>
      </div>
    )
    : null
}

export default OneTimeInfo
