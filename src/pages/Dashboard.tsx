import React from 'react';
import { BarChart3, Package, Clock, AlertCircle, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatsCard from '../components/dashboard/StatsCard';
import RecentActivity from '../components/dashboard/RecentActivity';
import InventoryStatus from '../components/dashboard/InventoryStatus';
import BookingChart from '../components/dashboard/BookingChart';

const Dashboard: React.FC = () => {
  const stats = [
    { 
      title: 'Total Inventory', 
      value: '256', 
      change: '+5%', 
      changeType: 'positive', 
      icon: Package,
      color: 'blue' 
    },
    { 
      title: 'Active Bookings', 
      value: '24', 
      change: '+12%', 
      changeType: 'positive', 
      icon: Clock,
      color: 'green'
    },
    { 
      title: 'Low Stock Items', 
      value: '12', 
      change: '-3%', 
      changeType: 'negative', 
      icon: AlertCircle,
      color: 'amber'
    },
    { 
      title: 'Total Clients', 
      value: '128', 
      change: '+8%', 
      changeType: 'positive', 
      icon: Users,
      color: 'indigo'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-800">Booking Trends</h2>
            <div className="flex items-center space-x-2">
              <select className="text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
          </div>
          <BookingChart />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-800">Inventory Status</h2>
            <Link to="/inventory" className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center">
              View all
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <InventoryStatus />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-gray-800">Recent Activity</h2>
          <Link to="/bookings" className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center">
            View all
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        <RecentActivity />
      </div>
    </div>
  );
};

export default Dashboard;