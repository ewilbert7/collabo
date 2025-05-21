import React from 'react';
import { ArrowUpRight, ArrowDownRight, RefreshCw } from 'lucide-react';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'checkout',
      icon: ArrowUpRight,
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-100',
      item: 'Sony A7III Camera',
      client: 'Studio 54 Productions',
      time: '2 hours ago',
      status: 'Checked Out'
    },
    {
      id: 2,
      type: 'checkin',
      icon: ArrowDownRight,
      iconColor: 'text-green-500',
      bgColor: 'bg-green-100',
      item: 'DJI Ronin Gimbal',
      client: 'FrameWorks Media',
      time: '5 hours ago',
      status: 'Returned'
    },
    {
      id: 3,
      type: 'reservation',
      icon: RefreshCw,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-100',
      item: 'Lighting Kit (5-piece)',
      client: 'Alexander Studios',
      time: '1 day ago',
      status: 'Reserved'
    },
    {
      id: 4,
      type: 'checkin',
      icon: ArrowDownRight,
      iconColor: 'text-green-500',
      bgColor: 'bg-green-100',
      item: 'Canon C70 Camera',
      client: 'Visual Apex',
      time: '1 day ago',
      status: 'Returned'
    },
    {
      id: 5,
      type: 'checkout',
      icon: ArrowUpRight,
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-100',
      item: 'Sennheiser Wireless Mic Set',
      client: 'Soundscape Audio',
      time: '2 days ago',
      status: 'Checked Out'
    }
  ];

  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Activity
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Item
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {activities.map((activity) => (
              <tr key={activity.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 h-8 w-8 rounded-full ${activity.bgColor} flex items-center justify-center`}>
                      <activity.icon className={`h-4 w-4 ${activity.iconColor}`} />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{activity.item}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{activity.client}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{activity.time}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${activity.type === 'checkout' ? 'bg-orange-100 text-orange-800' : 
                      activity.type === 'checkin' ? 'bg-green-100 text-green-800' : 
                      'bg-blue-100 text-blue-800'}`}>
                    {activity.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivity;