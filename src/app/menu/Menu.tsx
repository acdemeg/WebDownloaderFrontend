import React from 'react'
import MenuButton from './MenuButton'
import { SearchOutlined } from '@ant-design/icons'
import RunTaskMenu from './RunTasksMenu'
import GetResultMenu from './GetResultMenu'
import DescriptionMenu from './DescriptionMenu'
import { GET_STATUS_TASK, ONE_TIME_INFO_BODY_MOCK, ONE_TIME_INFO_STATUS_HEADER } from '../Constants'
import { useContextProvider } from '../ContextProvider'
import { titleButtonList } from '../../internationalization/ButtonTitles'
import ApiServiceData from '../api/ApiServiceData'
import { type ApiMethod } from '../Types'
import { common } from '../../internationalization/Captions'

const Menu: React.FC = () => {
  const { lang, input, oneTimeInfoData, setOneTimeInfoData } = useContextProvider()

  const showOneTimeInfo = (headerType: string, apiMethod: ApiMethod): void => {
    if (input !== '') {
      setOneTimeInfoData({
        ...oneTimeInfoData,
        visible: true,
        headerType,
        apiMethod,
        value: common[lang][ONE_TIME_INFO_BODY_MOCK],
        textColor: 'blue',
        click: Math.random()
      })
    }
  }

  return (
    <div className='w-full h-72 flex justify-evenly'>
      <RunTaskMenu showOneTimeInfo={showOneTimeInfo} />
      <div className='flex flex-col justify-around items-center w-1/3'>
        <MenuButton
          action={GET_STATUS_TASK}
          title={titleButtonList[lang][GET_STATUS_TASK]}
          Icon={SearchOutlined}
          hanlder={() => {
            showOneTimeInfo(
              ONE_TIME_INFO_STATUS_HEADER,
              ApiServiceData.statusTask.bind(ApiServiceData)
            )
          }} />
        <DescriptionMenu />
      </div>
      <GetResultMenu showOneTimeInfo={showOneTimeInfo} />
    </div>
  )
}

export default Menu
