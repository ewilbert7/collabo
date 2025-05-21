import React from 'react';
import { Phone, Mail, Calendar, Clock } from 'lucide-react';
import { ClientType } from '../../types';

interface ClientCardProps {
  client: ClientType;
}

const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-5">
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-lg">
            {client.name.charAt(0)}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">{client.name}</h3>
            <p className="text-sm text-gray-500">{client.company}</p>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm">
            <Mail className="w-4 h-4 mr-2 text-gray-400" />
            <span className="text-gray-600">{client.email}</span>
          </div>
          <div className="flex items-center text-sm">
            <Phone className="w-4 h-4 mr-2 text-gray-400" />
            <span className="text-gray-600">{client.phone}</span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="w-4 h-4 mr-2 text-gray-400" />
            <span className="text-gray-600">Client since: {new Date(client.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="w-4 h-4 mr-2 text-gray-400" />
            <span className="text-gray-600">Last activity: {new Date(client.lastActivity).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
            client.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
          }`}>
            {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
          </span>
          <div className="flex space-x-2">
            <button className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded">
              View
            </button>
            <button className="text-sm px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded">
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;