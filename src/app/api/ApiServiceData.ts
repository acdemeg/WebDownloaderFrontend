import axios from 'axios'
import { type IMapSite, type ResponseDto } from '../Types'
import { type Edge, type Node } from 'reactflow'

class ApiServiceData {
  private readonly base: string = 'http://localhost:8080'

  private async getResourse(url: string, params: any): Promise<ResponseDto> {
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

  public async discoverSize(taskId: string): Promise<ResponseDto> {
    return await this.getResourse('/size', { params: { taskId } })
  }

  public async mapSite(uri: string): Promise<ResponseDto> {
    return await this.getResourse('/map', { params: { uri } })
  }

  public async getChart(uri: string): Promise<IMapSite> {
    // const res = await axios.get(`${this.base}${'/map'}`, { params: { uri } })
    //   .catch(err => err.response)


    const position = { x: 0, y: 0 };
    const edgeType = 'smoothstep';

    const initialNodes: Node[] = [
      {
        id: '1',
        type: 'input',
        data: { label: 'node' },
        position,
        className: '!bg-yellow-400'
      },
      {
        id: '2',
        data: { label: 'node 2' },
        position,
        className: '!bg-green-400'
      },
      {
        id: '2a',
        type: 'output',
        data: { label: 'node 2a' },
        position,
        className: '!bg-blue-400'
      },
      {
        id: '2b',
        type: 'output',
        data: { label: 'node 2b' },
        position,
        className: '!bg-blue-400'
      },
      {
        id: '2c',
        type: 'output',
        data: { label: 'node 2c' },
        position,
        className: '!bg-blue-400'
      },
      {
        id: '3',
        data: { label: 'node 3' },
        position,
        className: '!bg-green-400'
      },
      {
        id: '4',
        data: { label: 'node 4' },
        position,
        className: '!bg-blue-400'
      },
      {
        id: '5',
        data: { label: 'node 5' },
        position,
        className: '!bg-blue-400'
      },
      {
        id: '6',
        type: 'output',
        data: { label: 'output' },
        position,
      }
    ];

    const initialEdges: Edge[] = [
      { id: 'e12', source: '1', target: '2', type: edgeType },
      { id: 'e13', source: '1', target: '3', type: edgeType },
      { id: 'e22a', source: '2', target: '2a', type: edgeType },
      { id: 'e22b', source: '2', target: '2b', type: edgeType },
      { id: 'e22c', source: '2', target: '2c', type: edgeType },
      { id: 'e46', source: '4', target: '6', type: edgeType },
      { id: 'e56', source: '5', target: '6', type: edgeType },
      { id: '3-4', source: '3', target: '4', type: edgeType },
      { id: '3-5', source: '3', target: '5', type: edgeType },

    ];

    return {
      statusCode: 200,
      nodes: initialNodes,
      edges: initialEdges
    }
  }
}

export default new ApiServiceData()
