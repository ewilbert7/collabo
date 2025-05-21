import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RevenueChart: React.FC = () => {
  const data = [
    { name: 'Jan', revenue: 2500, bookings: 15, utilization: 65 },
    { name: 'Feb', revenue: 3200, bookings: 20, utilization: 72 },
    { name: 'Mar', revenue: 4100, bookings: 25, utilization: 78 },
    { name: 'Apr', revenue: 3800, bookings: 22, utilization: 75 },
    { name: 'May', revenue: 4500, bookings: 28, utilization: 82 },
    { name: 'Jun', revenue: 5200, bookings: 32, utilization: 85 },
    { name: 'Jul', revenue: 4800, bookings: 30, utilization: 83 },
    { name: 'Aug', revenue: 5500, bookings: 35, utilization: 87 },
    { name: 'Sep', revenue: 6200, bookings: 40, utilization: 90 },
    { name: 'Oct', revenue: 5800, bookings: 38, utilization: 88 },
    { name: 'Nov', revenue: 6500, bookings: 42, utilization: 91 },
    { name: 'Dec', revenue: 7200, bookings: 48, utilization: 93 },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-md">
          <p className="font-medium text-gray-700">{`${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={`item-${index}`} style={{ color: entry.color }}>
              {entry.name === 'revenue' ? `Revenue: $${entry.value}` : 
               entry.name === 'bookings' ? `Bookings: ${entry.value}` :
               `Utilization: ${entry.value}%`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#3B82F6" activeDot={{ r: 8 }} name="Revenue ($)" />
        <Line yAxisId="right" type="monotone" dataKey="bookings" stroke="#10B981" name="Bookings" />
        <Line yAxisId="right" type="monotone" dataKey="utilization" stroke="#F59E0B" name="Utilization (%)" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;