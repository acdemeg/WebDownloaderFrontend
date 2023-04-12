import React, { useEffect } from 'react'
import ReactFlow, {
  Controls,
  Background,
  ConnectionLineType,
  type Edge,
  type Node,
  Position
} from 'reactflow'
import dagre from 'dagre'
import { CloseOutlined } from '@ant-design/icons'
import 'reactflow/dist/style.css'
import { useContextProvider } from '../ContextProvider'


const dagreGraph = new dagre.graphlib.Graph()
dagreGraph.setDefaultEdgeLabel(() => ({}))

const getLayoutedElements = (nodes: Node[], edges: Edge[]): { nodes: Node[], edges: Edge[] } => {
  const nodeWidth = 172
  const nodeHeight = 36
  dagreGraph.setGraph({ rankdir: 'TB' })

  nodes.forEach((node) => {
    node.data.label = <a href='https://locallhost.com/' target='_blank' rel="noreferrer" className='hover:text-neutral-50'>link</a>
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight })
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target)
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id)
    node.targetPosition = Position.Top
    node.sourcePosition = Position.Bottom
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
};


const Sitemap: React.FC = () => {

  const { input, siteMap, setSiteMap } = useContextProvider()

  useEffect(() => {
    console.log('siteMap effect')
    if (siteMap.click !== 0) {
      siteMap.apiMethod(input).then(
        response => {
          if (response.statusCode < 400) {
            const graph = getLayoutedElements(response.nodes, response.edges)
            setSiteMap({
              ...siteMap, siteGraph: {
                nodes: graph.nodes,
                edges: graph.edges,
                statusCode: response.statusCode
              },
              visible: true
            })
          }
        }
      ).catch(err => { console.log(err) })
    }
  }, [siteMap.click])

  return (
    siteMap.visible ? (
      <div className="container relative w-full graph">
        <CloseOutlined
          className='absolute z-10 cursor-pointer right-0.5 top-0 text-4xl'
          onClick={() => { setSiteMap({ ...siteMap, visible: false }) }} />
        <ReactFlow
          nodes={siteMap.siteGraph.nodes}
          edges={siteMap.siteGraph.edges}
          connectionLineType={ConnectionLineType.SmoothStep}
          fitView={true}
          nodesConnectable={false}

        >
          <Controls />
          <Background gap={20} size={1} />
        </ReactFlow>
      </div>) : null
  );
}

export default Sitemap
