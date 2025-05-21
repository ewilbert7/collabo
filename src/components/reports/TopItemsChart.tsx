import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TopItemsChart: React.FC = () => {
  const data = [
    { name: 'Sony A7III', bookings: 42 },
    { name: 'Canon C70', bookings: 38 },
    { name: 'Blackmagic URSA', bookings: 34 },
    { name: 'DJI Ronin 2', bookings: 30 },
    { name: 'Sennheiser MKH 416', bookings: 28 },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-md">
          <p className="font-medium text-gray-700">{`${label}`}</p>
          <p className="text-blue-600">{`Bookings: ${payload[0].value}`}</p>
          <p className="text-sm text-gray-500">{`Utilization: ${Math.round(payload[0].value * 100 / 52)}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="bookings" fill="#3B82F6" barSize={20} radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TopItemsChart;