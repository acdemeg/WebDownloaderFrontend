import axios from 'axios';
import { ResponseDto } from '../Types';

class AppServiceData {

  private readonly base: string = "http://localhost:8080";
  public readonly zipDonwloadApi: string = `${this.base}/zip?taskId=`;

  private async getResourse(url: string, params: any): Promise<ResponseDto> {
    const res = await axios.get(`${this.base}${url}`, params)
      .catch(err => err.response);
    return res.data; 
  }

  public async statusTask(taskId: string, lang?: string) {
    return await this.getResourse('/status', { params: { taskId, lang } });
  }

  public async requireDownload(uri: string) {
    return await this.getResourse('/require', { params: { uri: uri } });
  }

  public async estimateSize(uri: string) {
    return await this.getResourse('/estimate', { params: { uri: uri } });
  }

  public async discoverSize(taskId: string) {
    return await this.getResourse('/size', { params: { taskId: taskId } });
  }

  public async mapSite(uri: string) {
    return await this.getResourse('/map', { params: { uri: uri } });
  }
}


export default new AppServiceData();