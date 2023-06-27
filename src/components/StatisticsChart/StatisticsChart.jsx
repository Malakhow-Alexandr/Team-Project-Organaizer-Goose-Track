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

const customLabel = props => {
  const { x, y, width, value } = props;
  const radius = 15;
  const labelY = y - (y === 0 ? radius : 0);

  return (
    <g>
      <text
        x={x + 2 + width / 2}
        y={labelY}
        fill="#111111"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {`${value}%`}
      </text>
    </g>
  );
};

const data = [
  {
    name: 'To Do',
    by_Month: 3000,
    by_Day: 2000,
  },
  {
    name: 'In Progress',
    by_Month: 3000,
    by_Day: 1398,
  },
  {
    name: 'Done',
    by_Month: 2000,
    by_Day: 3400,
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
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" tickLine={false} tickMargin={16} />
        <YAxis
          type="number"
          position="left"
          axisLine={false}
          tickLine={false}
          tickCount={6}
          tickMargin={28}
        />
        <Tooltip
          itemStyle={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: '#ffffff',
          }}
        />
        <Bar
          dataKey="by_Day"
          maxBarSize={27}
          barSize={27}
          minPointSize={22}
          radius={[0, 0, 10, 10]}
          fill="url(#colorUv)"
        >
          <LabelList
            offset={10}
            dataKey="by_Day"
            position="top"
            content={customLabel}
          />
        </Bar>
        <Bar
          dataKey="by_Month"
          barSize={27}
          fill="url(#colorUv1)"
          radius={[0, 0, 10, 10]}
        >
          <LabelList dataKey="by_Month" position="top" content={customLabel} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
