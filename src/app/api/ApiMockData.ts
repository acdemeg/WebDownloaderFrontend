import axios, { AxiosResponse } from 'axios';

class AppMockData {

  base: string = "http://localhost:8080";

  async getResourse(url: string): Promise<AxiosResponse> {
    const res: Promise<AxiosResponse> = await axios.get(url)
      .catch(err => err);
    return res;
  }


  async getZip() {
    const res = await this.getResourse(`${this.base}/zip?taskId=c8f36044-7e22-49d1-ac30-b3168cf5a4cc`);
    console.log(res)
    return res;
  }

}

export default new AppMockData();