import React, { useState, useEffect } from 'react';
import { Graph } from '@antv/g6';
import type { GraphData } from '@antv/g6';
import { createGraph, prepareDataGraph } from './g6-helpers';

export interface UseScenarioGraph {
  success: boolean;
}
export interface ScenarioArgs {
  reference: React.RefObject<any>;
  data: GraphData;
  withIcons: boolean;
}

export function useScenarioGraph({
  data,
  reference,
  withIcons,
}: ScenarioArgs): UseScenarioGraph {
  let [graphInPlace, setGraphInPlace] = useState(false);
  let [graph, setGraph] = useState<Graph | null>(null);

  useEffect(() => {

		(async () => {
			if (reference.current !== null) {
				if (!graph) {
					graph = await createGraph({ reference, data, withIcons });
					setGraph(graph);
					setGraphInPlace(true);
				} else {
					graph?.changeData(prepareDataGraph(data, withIcons));
				}

				return () => {
					console.log('REFRESH GRAPH: ', new Date());
					graph?.changeData(prepareDataGraph(data, withIcons));
				};
			}
		})()

  }, [data]);

  return { success: graphInPlace };
}

export default useScenarioGraph;
