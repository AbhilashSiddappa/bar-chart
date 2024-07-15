// FloatingBarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const FloatingBarChart = () => {
  const data = {
    labels: ['All', 'Served', 'Denied', 'Transformed', 'Flagged'],
    datasets: [
      {
        label: 'Count',
        data: [
          { x: 'All', y: [0, 100] },
          { x: 'Served', y: [20, 80] },
          { x: 'Denied', y: [80, 60] },
          { x: 'Transformed', y: [60, 40] },
          { x: 'Flagged', y: [40, 20] },
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
        borderRadius:5,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 20,
          padding: 10,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          padding: 10,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      datalabels: {
        anchor: 'center',
        align: 'center',
        formatter: (value) => value[1] - value[0], // Display the difference between the two values
        color: 'white',
        font: {
          weight: 'bold',
        },
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default FloatingBarChart;
