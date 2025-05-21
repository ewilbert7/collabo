import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  color: 'blue' | 'green' | 'amber' | 'indigo' | 'red';
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon,
  color 
}) => {
  const getColorClasses = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-100 text-blue-600';
      case 'green':
        return 'bg-green-100 text-green-600';
      case 'amber':
        return 'bg-amber-100 text-amber-600';
      case 'indigo':
        return 'bg-indigo-100 text-indigo-600';
      case 'red':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-blue-100 text-blue-600';
    }
  };

  const getChangeColor = () => {
    switch (changeType) {
      case 'positive':
        return 'text-green-600';
      case 'negative':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
      <div className="flex items-center">
        <div className={`p-3 rounded-full ${getColorClasses()}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="ml-5">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <div className="flex items-end space-x-1">
            <span className="text-2xl font-semibold text-gray-800">{value}</span>
            <span className={`text-sm ${getChangeColor()}`}>
              {change}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;