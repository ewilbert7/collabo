import React from 'react';
import { Calendar, Clock, ArrowRight, Edit, Trash2, CheckCircle } from 'lucide-react';
import { BookingType } from '../../types';

interface BookingListItemProps {
  booking: BookingType;
}

const BookingListItem: React.FC<BookingListItemProps> = ({ booking }) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'returned':
        return 'bg-gray-100 text-gray-800';
      case 'late':
        return 'bg-red-100 text-red-800';
      case 'cancelled':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
        <div className="p-4 md:col-span-2 border-b md:border-b-0 md:border-r">
          <div className="flex justify-between">
            <h3 className="font-medium text-gray-900">{booking.client}</h3>
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(booking.status)}`}>
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </span>
          </div>
          
          <div className="mt-2 space-y-1">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2 text-gray-400" />
              {new Date(booking.startDate).toLocaleDateString()} 
              <ArrowRight className="w-3 h-3 mx-1" /> 
              {new Date(booking.endDate).toLocaleDateString()}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-2 text-gray-400" />
              Duration: {booking.duration} days
            </div>
          </div>
        </div>
        
        <div className="p-4 md:col-span-2 lg:col-span-3 border-b md:border-b-0 md:border-r">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Booked Items:</h4>
          <div className="space-y-1">
            {booking.items.map((item, index) => (
              <div key={index} className="text-sm flex justify-between">
                <span>{item.name}</span>
                <span className="text-gray-600">x{item.quantity}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-4 flex md:flex-col items-center justify-between">
          <div className="text-sm text-gray-700">
            ₦{booking.cost.toLocaleString()}
          </div>
          <div className="flex md:mt-3 space-x-2">
            {booking.status === 'active' && (
              <button
                className="p-1 text-green-600 hover:text-green-800 rounded"
                title="Mark as Returned"
              >
                <CheckCircle className="w-5 h-5" />
              </button>
            )}
            <button
              className="p-1 text-gray-600 hover:text-gray-800 rounded"
              title="Edit Booking"
            >
              <Edit className="w-5 h-5" />
            </button>
            <button
              className="p-1 text-red-600 hover:text-red-800 rounded"
              title="Cancel Booking"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingListItem;