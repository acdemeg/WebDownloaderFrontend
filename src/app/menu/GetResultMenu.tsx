import React from 'react'
import MenuButton from './MenuButton'
import { FileZipOutlined, ApartmentOutlined, SaveOutlined } from '@ant-design/icons'
import { GET_SIZE, GET_ZIP, GET_SITE_MAP, ONE_TIME_INFO_SIZE_HEADER } from '../Constants'
import { useContextProvider } from '../ContextProvider'
import { titleButtonList } from '../../internationalization/ButtonTitles'
import ApiServiceData from '../api/ApiServiceData'
import { type IShowOneTimeInfo, type ContextState } from '../Types'
import fileLoader from '../FileLoader'

const GetResultMenu: React.FC<IShowOneTimeInfo> = ({ showOneTimeInfo }) => {
  const context: ContextState = useContextProvider()

  return (
    <div className='flex flex-col justify-evenly'>
      <MenuButton
        action={GET_ZIP}
        title={titleButtonList[context.lang][GET_ZIP]}
        Icon={FileZipOutlined}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        hanlder={async () => { await fileLoader(context) }} />
      <MenuButton
        action={GET_SIZE}
        title={titleButtonList[context.lang][GET_SIZE]}
        Icon={SaveOutlined}
        hanlder={() => {
          showOneTimeInfo(
            ONE_TIME_INFO_SIZE_HEADER,
            ApiServiceData.discoverSize.bind(ApiServiceData)
          )
        }} />
      <MenuButton
        action={GET_SITE_MAP}
        title={titleButtonList[context.lang][GET_SITE_MAP]}
        Icon={ApartmentOutlined}
        hanlder={() => { context.setSiteMap({ ...context.siteMap, visible: true }) }}
      />
    </div>
  )
}

export default GetResultMenu
