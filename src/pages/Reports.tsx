import React, { useState } from 'react';
import { Download, Filter, Calendar } from 'lucide-react';
import { mockBookingData, mockInventoryData, mockClientData } from '../data/mockData';
import RevenueChart from '../components/reports/RevenueChart';
import TopItemsChart from '../components/reports/TopItemsChart';
import ClientActivityTable from '../components/reports/ClientActivityTable';

const Reports: React.FC = () => {
  const [dateRange, setDateRange] = useState('month');
  const [reportType, setReportType] = useState('revenue');

  // Calculate some stats for the dashboard
  const totalRevenue = mockBookingData.reduce((sum, booking) => sum + booking.cost, 0);
  const activeBookings = mockBookingData.filter(b => b.status === 'active').length;
  const topClients = [...mockClientData]
    .sort((a, b) => new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Reports & Analytics</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center transition-colors">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-gray-500 text-sm mb-1">Total Revenue</h3>
          <p className="text-3xl font-semibold text-gray-800">${totalRevenue.toFixed(2)}</p>
          <div className="mt-2 text-sm text-green-600">
            +12.5% from last period
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-gray-500 text-sm mb-1">Active Bookings</h3>
          <p className="text-3xl font-semibold text-gray-800">{activeBookings}</p>
          <div className="mt-2 text-sm text-green-600">
            +3 from last period
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-gray-500 text-sm mb-1">Equipment Utilization</h3>
          <p className="text-3xl font-semibold text-gray-800">76%</p>
          <div className="mt-2 text-sm text-green-600">
            +5% from last period
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mb-6">
          <div className="flex items-center">
            <h2 className="text-lg font-medium text-gray-800 mr-4">Performance Overview</h2>
            <div className="flex items-center space-x-2">
              <select
                className="border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
              >
                <option value="revenue">Revenue</option>
                <option value="bookings">Bookings</option>
                <option value="utilization">Utilization</option>
              </select>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <select
              className="border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
          </div>
        </div>
        
        <div className="h-80">
          <RevenueChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-800">Top Booked Items</h2>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                className="border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Categories</option>
                <option value="cameras">Cameras</option>
                <option value="lenses">Lenses</option>
                <option value="audio">Audio</option>
                <option value="lighting">Lighting</option>
              </select>
            </div>
          </div>
          
          <div className="h-64">
            <TopItemsChart />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-800">Client Activity</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700">
              View All
            </button>
          </div>
          
          <ClientActivityTable clients={topClients} />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-gray-800">Inventory Value Report</h2>
          <button className="text-sm px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded flex items-center">
            <Download className="w-4 h-4 mr-1" />
            Export
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Items Count
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Purchase Value
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Value
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Depreciation
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {['Cameras', 'Lenses', 'Audio', 'Lighting', 'Stabilizers'].map((category) => {
                const items = mockInventoryData.filter(item => item.category === category);
                const totalPurchase = items.reduce((sum, item) => sum + item.purchasePrice, 0);
                const totalCurrent = items.reduce((sum, item) => sum + item.currentValue, 0);
                const depreciation = totalPurchase - totalCurrent;
                const depreciationPercent = (depreciation / totalPurchase) * 100;
                
                return (
                  <tr key={category} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{items.length}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">${totalPurchase.toFixed(2)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">${totalCurrent.toFixed(2)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-red-600">
                        -${depreciation.toFixed(2)} ({depreciationPercent.toFixed(1)}%)
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;