import React from 'react';
import { Edit, Trash2, BookOpen } from 'lucide-react';
import { InventoryItemType } from '../../types';

interface InventoryItemProps {
  item: InventoryItemType;
}

const InventoryItem: React.FC<InventoryItemProps> = ({ item }) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'checked-out':
        return 'bg-orange-100 text-orange-800';
      case 'reserved':
        return 'bg-blue-100 text-blue-800';
      case 'maintenance':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="w-12 h-12 bg-gray-200 rounded-md overflow-hidden">
          {item.imageUrl ? (
            <img 
              src={item.imageUrl} 
              alt={item.name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No image
            </div>
          )}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{item.name}</div>
        <div className="text-xs text-gray-500">{item.model}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{item.category}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{item.serialNumber}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(item.status)}`}>
          {item.status.charAt(0).toUpperCase() + item.status.slice(1).replace('-', ' ')}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex space-x-2">
          <button 
            className="text-blue-600 hover:text-blue-900"
            title="Book Item"
          >
            <BookOpen className="w-4 h-4" />
          </button>
          <button 
            className="text-gray-600 hover:text-gray-900"
            title="Edit Item"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button 
            className="text-red-600 hover:text-red-900"
            title="Delete Item"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default InventoryItem;