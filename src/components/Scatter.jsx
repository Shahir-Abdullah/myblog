import React from "react";
import Chart from "./Chart";
import EChart from "./EChart";

export default ({ config, resize }) => {
  const { data } = config;

  let option = {
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 10,
        data: [
          [1, 8],
          [1, 5],
          [1, 11],
          [1, 25],
          [2, 6],
          [2, 11],
          [2, 16],
          [2, 18],
          [2, 14],
          [2, 21],
          [3, 26],
          [4, 8],
          [5, 9],
          [6, 10],
          [7, 7],
          [7, 1],
          [7, 2],
          [7, 3],
          [7, 4],
          [8, 11],
          [3, 7],
          [4, 8],
          [5, 8],
          [6, 9],
          [7, 7],
          [8, 4],
          [9, 10],
          [10, 4],
          [11, 5],
          [12, 2],
          [1, 23],
        ],
        type: "scatter",
      },
    ],
  };

  return (
    <Chart config={config} resize={resize}>
      {data && <EChart option={option} config={config} resize={resize} />}
    </Chart>
  );
};
