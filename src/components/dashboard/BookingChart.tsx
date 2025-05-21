import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BookingChart: React.FC = () => {
  const data = [
    { name: 'Mon', cameras: 12, audio: 8, lighting: 6, other: 4 },
    { name: 'Tue', cameras: 18, audio: 12, lighting: 9, other: 7 },
    { name: 'Wed', cameras: 15, audio: 10, lighting: 12, other: 5 },
    { name: 'Thu', cameras: 20, audio: 15, lighting: 10, other: 8 },
    { name: 'Fri', cameras: 22, audio: 17, lighting: 14, other: 10 },
    { name: 'Sat', cameras: 10, audio: 8, lighting: 6, other: 3 },
    { name: 'Sun', cameras: 5, audio: 3, lighting: 2, other: 1 },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-md">
          <p className="font-medium text-gray-700">{`${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value} items`}
            </p>
          ))}
          <p className="font-medium text-gray-700 mt-1">
            {`Total: ${payload.reduce((sum: number, entry: any) => sum + entry.value, 0)} items`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="cameras" stackId="a" fill="#3B82F6" name="Cameras" />
          <Bar dataKey="audio" stackId="a" fill="#10B981" name="Audio" />
          <Bar dataKey="lighting" stackId="a" fill="#F59E0B" name="Lighting" />
          <Bar dataKey="other" stackId="a" fill="#8B5CF6" name="Other" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BookingChart;