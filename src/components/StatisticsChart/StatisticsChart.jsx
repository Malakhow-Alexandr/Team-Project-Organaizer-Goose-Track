import React from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from 'recharts';

// const renderCustomizedLabel = props => {
//   const { x, y, width, value } = props;
//   const radius = 15;
//   <g>
//     <text
//       x={x + 2 + width / 2}
//       y={y - radius}
//       fill="#FFFFFF"
//       textAnchor="middle"
//       dominantBaseline="middle"
//     >
//       {`${value}%`}
//     </text>
//   </g>;
// };

const data = [
  {
    name: 'To Do',
    by_Month: 4000,
    by_Day: 2400,
    amt: 2400,
  },
  {
    name: 'In Progress',
    by_Month: 3000,
    by_Day: 1398,
    amt: 2210,
  },
  {
    name: 'Done',
    by_Month: 2000,
    by_Day: 9800,
    amt: 2290,
  },
];

export const StatisticsChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 10,
        }}
        barCategoryGap={75}
        barGap={10}
        barSize={27}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(255, 210, 221)" stopOpacity={0} />
            <stop
              offset="100%"
              stopColor="rgb(255, 210, 221)"
              stopOpacity={1}
            />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="colorUv1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(62, 133, 243)" stopOpacity={0} />
            <stop offset="100%" stopColor="rgb(62, 133, 243)" stopOpacity={1} />
          </linearGradient>
        </defs>
        <CartesianGrid />

        <XAxis dataKey="name" tick={false} />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="by_Day"
          maxBarSize={27}
          barSize={27}
          minPointSize={22}
          radius={[0, 0, 10, 10]}
          fill="url(#colorUv)"
        >
          <LabelList dataKey="by_Day" position="top" />
        </Bar>
        <Bar
          dataKey="by_Month"
          barSize={27}
          fill="url(#colorUv1)"
          radius={[0, 0, 10, 10]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
