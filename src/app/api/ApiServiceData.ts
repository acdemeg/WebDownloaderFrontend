import axios from 'axios'
import { type IMapSite, type ResponseDto } from '../Types'

class ApiServiceData {
  private readonly base: string = 'http://localhost:8080'

  private async getResourse(url: string, params: any): Promise<any> {
    const res = await axios.get(`${this.base}${url}`, params)
      .catch(err => err.response)
    return res.data
  }

  public getZip(fileName: string): void {
    window.location.href = `${this.base}/zip?fileName=${fileName}`
  }

  public async statusTask(taskId: string, lang?: string): Promise<ResponseDto> {
    return await this.getResourse('/status', { params: { taskId, lang } })
  }

  public async requireDownload(uri: string): Promise<ResponseDto> {
    return await this.getResourse('/require', { params: { uri } })
  }

  public async findZip(taskId: string, lang?: string): Promise<ResponseDto> {
    return await this.getResourse('/find', { params: { taskId, lang } })
  }

  public async estimateSize(uri: string): Promise<ResponseDto> {
    return await this.getResourse('/estimate', { params: { uri } })
  }

  public async discoverSize(taskId: string, lang?: string): Promise<ResponseDto> {
    return await this.getResourse('/size', { params: { taskId, lang } })
  }

  public async mapSite(uri: string): Promise<ResponseDto> {
    return await this.getResourse('/map', { params: { uri } })
  }

  public async getChart(taskId: string, lang?: string): Promise<IMapSite> {
    return await this.getResourse('/graph', { params: { taskId, lang } })
  }
}

export default new ApiServiceData()
