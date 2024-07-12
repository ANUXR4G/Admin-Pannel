import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

// Mock dataset for demonstration
const dataset = [
  { store: 'GGN07', user: 30 },
  { store: 'NOD25', user: 99},
  { store: 'FRD11', user: 23},
  { store: 'GYB23', user: 20  },
  { store: 'GGN08', user: 40 },
  { store: 'GGN11', user: 50 },
  { store: 'NDL03', user: 90 },
  { store: 'NOD03', user: 70 },
];

const valueFormatter = (value) => `${value}`;

const chartSetting = {
  yAxis: [
    {
      label: 'Users',
    },
  ],
  xAxis: [
    { 
      scaleType: 'band', 
      dataKey: 'store', 
      tickPlacement: 'middle', 
      tickLabelPlacement: 'middle',
      label: 'Stores',  // Adding the label for x-axis
    },
  ],
  series: [{ dataKey: 'user', label: 'Users In Stores', valueFormatter, color: '#0fa4af' }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};

export default function Chartsdashboard() {
  return (
    <div style={{ width: '90%' }}>
      <BarChart
        dataset={dataset}
        {...chartSetting}
      />
    </div>
  );
}
