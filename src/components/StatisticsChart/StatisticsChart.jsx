import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '',
    },
  },
};

const labels = ['To Do', 'In Progress', 'Done'];

export const data = {
  labels,
  datasets: [
    {
      label: 'By Day',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 210, 221, 1), rgba(255, 210, 221, 1)',
      barThickness: 27,
    },
    {
      label: 'By Month',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(62, 133, 243, 1), rgba(62, 133, 243, 1)',
      barThickness: 27,
    },
  ],
};

export const StatisticsChart = () => {
  return <Bar options={options} data={data} />;
};
