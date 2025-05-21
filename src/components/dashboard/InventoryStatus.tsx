import React from 'react';

const InventoryStatus: React.FC = () => {
  const inventoryCategories = [
    { name: 'Cameras', available: 24, total: 30, color: 'bg-blue-500' },
    { name: 'Lenses', available: 42, total: 50, color: 'bg-green-500' },
    { name: 'Lighting', available: 18, total: 25, color: 'bg-yellow-500' },
    { name: 'Audio', available: 12, total: 20, color: 'bg-purple-500' },
    { name: 'Stabilizers', available: 8, total: 15, color: 'bg-pink-500' },
  ];

  return (
    <div className="space-y-4">
      {inventoryCategories.map((category, index) => {
        const percentAvailable = (category.available / category.total) * 100;
        
        return (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
              <span className="text-sm text-gray-500">
                {category.available} / {category.total}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className={`h-2.5 rounded-full ${category.color}`} 
                style={{ width: `${percentAvailable}%` }}
              ></div>
            </div>
          </div>
        );
      })}
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Status Overview</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-green-50 p-3 rounded-md border border-green-100">
            <div className="text-xl font-semibold text-green-700">156</div>
            <div className="text-xs text-green-600">Available Items</div>
          </div>
          <div className="bg-orange-50 p-3 rounded-md border border-orange-100">
            <div className="text-xl font-semibold text-orange-700">48</div>
            <div className="text-xs text-orange-600">Checked Out</div>
          </div>
          <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
            <div className="text-xl font-semibold text-blue-700">32</div>
            <div className="text-xs text-blue-600">Reserved</div>
          </div>
          <div className="bg-red-50 p-3 rounded-md border border-red-100">
            <div className="text-xl font-semibold text-red-700">12</div>
            <div className="text-xs text-red-600">Maintenance</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryStatus;