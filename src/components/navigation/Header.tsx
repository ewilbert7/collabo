import React, { useState } from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const { user } = useAuth();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality
  };

  return (
    <header className="z-10 py-4 bg-white shadow-sm">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="p-1 mr-3 -ml-1 rounded-md md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500">
              <Menu className="w-6 h-6 text-gray-500" />
            </button>
            <h2 className="text-lg font-medium text-gray-800">
              Welcome back, {user?.name || 'User'}
            </h2>
          </div>

          <div className="flex items-center ml-4 md:ml-6">
            <form 
              onSubmit={handleSearchSubmit}
              className={`relative transition-all duration-300 ease-in-out ${
                isSearchActive ? 'w-64' : 'w-40'
              }`}
            >
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchActive(true)}
                onBlur={() => setIsSearchActive(false)}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="w-4 h-4 text-gray-500" />
              </div>
            </form>

            <button className="p-1 ml-3 text-gray-500 rounded-full hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <Bell className="w-6 h-6" />
              <span className="absolute top-2 right-2 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;