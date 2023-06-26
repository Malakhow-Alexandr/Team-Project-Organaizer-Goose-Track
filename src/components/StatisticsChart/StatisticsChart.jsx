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
  scales: {
    x: { grid: { display: false } },
  },
  plugins: {
    legend: {
      position: 'top',
      display: false,
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
      backgroundColor: 'rgba(255, 210, 221, 0.6),rgba(255, 210, 221, 1.2)',
      barThickness: 27,
      categoryPercentage: 0.5,
      borderRadius: 10,
    },
    {
      label: 'By Month',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(62, 133, 243, 0.6), rgba(62, 133, 243, 1.2)',
      barThickness: 27,
      borderRadius: 10,
    },
  ],
};

export const StatisticsChart = () => {
  return <Bar options={options} data={data} />;
};
