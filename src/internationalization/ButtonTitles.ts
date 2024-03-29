import { type Internationalization } from '../app/Types'
import { ENG, RUS } from '../app/Constants'

export const titleButtonList: Internationalization = {
  [ENG]: {
    GET_STATUS_TASK: ' Status Task',
    START_DOWNLOAD: ' Start Download',
    ESTIMATE_SIZE: ' Estimate Size',
    BUILD_SITE_MAP: ' Build Site Map',
    GET_ZIP: ' Get Zip',
    GET_SIZE: ' Get Size',
    GET_SITE_MAP: ' Get Site Map',
    COPY: 'Copy',
    CLOSE: 'Close'
  },
  [RUS]: {
    GET_STATUS_TASK: ' Статус Задачи',
    START_DOWNLOAD: ' Начать Загрузку',
    ESTIMATE_SIZE: ' Оценка размера',
    BUILD_SITE_MAP: ' Построить карту',
    GET_ZIP: ' Получить архив',
    GET_SIZE: ' Получить размер',
    GET_SITE_MAP: ' Получить карту',
    COPY: 'Копировать',
    CLOSE: 'Закрыть'
  }
}
