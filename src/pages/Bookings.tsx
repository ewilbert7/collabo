import React, { useState } from 'react';
import { PlusCircle, Calendar, List, Grid, Search, Filter } from 'lucide-react';
import { mockBookingData } from '../data/mockData';
import BookingListItem from '../components/bookings/BookingListItem';

const Bookings: React.FC = () => {
  const [view, setView] = useState<'list' | 'calendar' | 'grid'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');

  // Filter bookings
  const filteredBookings = mockBookingData.filter(booking => {
    const matchesSearch = 
      booking.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    
    const today = new Date();
    const bookingDate = new Date(booking.startDate);
    const isUpcoming = bookingDate > today;
    const isPast = bookingDate < today;
    
    const matchesDate = 
      dateFilter === 'all' || 
      (dateFilter === 'upcoming' && isUpcoming) ||
      (dateFilter === 'past' && isPast) ||
      (dateFilter === 'today' && 
        bookingDate.getDate() === today.getDate() &&
        bookingDate.getMonth() === today.getMonth() &&
        bookingDate.getFullYear() === today.getFullYear());
    
    return matchesSearch && matchesStatus && matchesDate;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Bookings</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center transition-colors">
          <PlusCircle className="w-4 h-4 mr-2" />
          Create Booking
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mb-6">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search bookings..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="w-4 h-4 text-gray-500" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                className="border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="upcoming">Upcoming</option>
                <option value="active">Active</option>
                <option value="returned">Returned</option>
                <option value="late">Late</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <select
                className="border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              >
                <option value="all">All Dates</option>
                <option value="today">Today</option>
                <option value="upcoming">Upcoming</option>
                <option value="past">Past</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-2">
            <button
              className={`p-2 rounded-md ${
                view === 'list' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setView('list')}
              title="List View"
            >
              <List className="w-5 h-5" />
            </button>
            <button
              className={`p-2 rounded-md ${
                view === 'grid' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setView('grid')}
              title="Grid View"
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              className={`p-2 rounded-md ${
                view === 'calendar' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setView('calendar')}
              title="Calendar View"
            >
              <Calendar className="w-5 h-5" />
            </button>
          </div>
        </div>

        {view === 'list' && (
          <div className="space-y-4">
            {filteredBookings.map(booking => (
              <BookingListItem key={booking.id} booking={booking} />
            ))}
            
            {filteredBookings.length === 0 && (
              <div className="py-8 text-center">
                <p className="text-gray-500">No bookings found matching your criteria.</p>
              </div>
            )}
          </div>
        )}

        {view === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBookings.map(booking => (
              <div key={booking.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-gray-900">{booking.client}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    booking.status === 'active' ? 'bg-green-100 text-green-800' :
                    booking.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                    booking.status === 'returned' ? 'bg-gray-100 text-gray-800' :
                    booking.status === 'late' ? 'bg-red-100 text-red-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
                </div>
                <div className="space-y-1 mb-3">
                  {booking.items.slice(0, 2).map((item, index) => (
                    <div key={index} className="text-sm">
                      <span className="font-medium">{item.name}</span> x{item.quantity}
                    </div>
                  ))}
                  {booking.items.length > 2 && (
                    <div className="text-sm text-gray-500">
                      +{booking.items.length - 2} more items
                    </div>
                  )}
                </div>
                <div className="flex justify-end space-x-2">
                  <button className="text-xs px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded">
                    View
                  </button>
                  <button className="text-xs px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded">
                    Edit
                  </button>
                </div>
              </div>
            ))}
            
            {filteredBookings.length === 0 && (
              <div className="col-span-full py-8 text-center">
                <p className="text-gray-500">No bookings found matching your criteria.</p>
              </div>
            )}
          </div>
        )}

        {view === 'calendar' && (
          <div className="border rounded-lg overflow-hidden">
            <div className="p-4 text-center border-b">
              <h3 className="font-medium">April 2025</h3>
            </div>
            <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-700 border-b">
              <div className="py-2">Sun</div>
              <div className="py-2">Mon</div>
              <div className="py-2">Tue</div>
              <div className="py-2">Wed</div>
              <div className="py-2">Thu</div>
              <div className="py-2">Fri</div>
              <div className="py-2">Sat</div>
            </div>
            <div className="grid grid-cols-7 text-sm border-b divide-x divide-y">
              {/* This is just a placeholder calendar UI - in a real app, this would be dynamic */}
              {[...Array(35)].map((_, i) => {
                const day = i - 2; // Offset to start calendar on the right day
                return (
                  <div key={i} className={`min-h-[120px] p-2 ${day <= 0 || day > 30 ? 'bg-gray-50 text-gray-400' : ''}`}>
                    <div className="font-medium mb-1">{day > 0 && day <= 30 ? day : ''}</div>
                    {day === 14 && (
                      <div className="bg-blue-100 text-blue-800 text-xs p-1 rounded mb-1 truncate">
                        Studio 54 - Cameras
                      </div>
                    )}
                    {day === 15 && (
                      <div className="bg-green-100 text-green-800 text-xs p-1 rounded mb-1 truncate">
                        FrameWorks - Lighting
                      </div>
                    )}
                    {day === 18 && (
                      <div className="bg-amber-100 text-amber-800 text-xs p-1 rounded mb-1 truncate">
                        SoundScape - Audio
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;