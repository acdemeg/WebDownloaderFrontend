import { Button } from 'antd'
import React, { useEffect } from 'react'
import { useContextProvider } from '../ContextProvider'
import { titleButtonList } from '../../internationalization/ButtonTitles'
import { CLOSE, COPY, ONE_TIME_INFO_ERROR_HEADER } from '../Constants'
import { common } from '../../internationalization/Captions'

const OneTimeInfo: React.FC = () => {
  const { lang, input, setInput, oneTimeInfoData, setOneTimeInfoData } = useContextProvider()

  useEffect(() => {
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

  return oneTimeInfoData.visible
    ? (
      <div className="container max-w-4xl w-1/2 h-48">
        <span className="text-3xl">{common[lang][oneTimeInfoData.headerType]}</span>
        <span className={`text-${oneTimeInfoData.textColor}-500`}>{oneTimeInfoData.value}</span>
        <div>
          <Button
            className='menu-button hover:text-blue-400 hover:border-blue-400'
            onClick={() => {
              navigator.clipboard.writeText(oneTimeInfoData.value).catch(e => {
                console.log(e);
                localStorage.setItem('oneTimeInfoData.value', oneTimeInfoData.value);
              })
            }}>
            {titleButtonList[lang][COPY]}
          </Button>
          <Button danger
            className='menu-button hover:text-red-400 hover:border-red-400'
            onClick={() => { setOneTimeInfoData({ ...oneTimeInfoData, visible: false }) }}>
            {titleButtonList[lang][CLOSE]}
          </Button>
        </div>
      </div>
    )
    : null
}

export default OneTimeInfo
