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
  Label,
} from 'recharts';

import {
  CustomTooltip,
  CustomXAxisTick,
  CustomYAxisTick,
  BarCustomLabel,
  TitleCustomLabel,
} from './StatisticsChartCustomComponents';
const data = [
  {
    name: 'To Do',
    by_Month: 30,
    by_Day: 25,
  },
  {
    name: 'In Progress',
    by_Month: 35,
    by_Day: 25,
  },
  {
    name: 'Done',
    by_Month: 60,
    by_Day: 30,
  },
];

export const StatisticsChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 45,
          right: 10,
          left: 10,
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
        <CartesianGrid vertical={false} stroke="#E3F3FF" strokeWidth={1} />
        <XAxis
          dataKey="name"
          tickLine={false}
          tick={<CustomXAxisTick />}
          tickMargin={16}
        />
        <YAxis
          type="number"
          position="left"
          axisLine={false}
          ticks={[0, 20, 40, 60, 80, 100]}
          tickLine={false}
          tickCount={6}
          tickMargin={28}
          tick={<CustomYAxisTick />}
        >
          <Label
            value="Tasks"
            position="insideTop"
            angle={0}
            offset={-43}
            content={<TitleCustomLabel />}
          />
        </YAxis>
        <Tooltip cursor={false} content={<CustomTooltip />} />
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
            content={<BarCustomLabel />}
          />
        </Bar>
        <Bar
          dataKey="by_Month"
          barSize={27}
          fill="url(#colorUv1)"
          radius={[0, 0, 10, 10]}
        >
          <LabelList
            dataKey="by_Month"
            position="top"
            content={<BarCustomLabel />}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
