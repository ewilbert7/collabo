import React, { useState } from 'react';
import { Users, Shield, Bell, Sliders, FileText } from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  
  const tabClasses = (tabName: string) => 
    `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
      activeTab === tabName
        ? 'bg-blue-50 text-blue-600'
        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
    }`;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="flex border-b">
          <div className="w-64 border-r">
            <nav className="p-4 space-y-1">
              <button
                className={tabClasses('general')}
                onClick={() => setActiveTab('general')}
              >
                <Sliders className="w-5 h-5 mr-3" />
                <span>General</span>
              </button>
              <button
                className={tabClasses('users')}
                onClick={() => setActiveTab('users')}
              >
                <Users className="w-5 h-5 mr-3" />
                <span>User Management</span>
              </button>
              <button
                className={tabClasses('permissions')}
                onClick={() => setActiveTab('permissions')}
              >
                <Shield className="w-5 h-5 mr-3" />
                <span>Permissions</span>
              </button>
              <button
                className={tabClasses('notifications')}
                onClick={() => setActiveTab('notifications')}
              >
                <Bell className="w-5 h-5 mr-3" />
                <span>Notifications</span>
              </button>
              <button
                className={tabClasses('terms')}
                onClick={() => setActiveTab('terms')}
              >
                <FileText className="w-5 h-5 mr-3" />
                <span>Terms & Conditions</span>
              </button>
            </nav>
          </div>

          <div className="flex-1 p-6">
            {activeTab === 'general' && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-900">General Settings</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue="ClovaCreate Studio"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue="contact@clovacreate.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
                      Timezone
                    </label>
                    <select
                      id="timezone"
                      name="timezone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue="America/New_York"
                    >
                      <option value="America/New_York">Eastern Time (ET)</option>
                      <option value="America/Chicago">Central Time (CT)</option>
                      <option value="America/Denver">Mountain Time (MT)</option>
                      <option value="America/Los_Angeles">Pacific Time (PT)</option>
                      <option value="Europe/London">London (GMT)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="currency" className="block text-sm font-medium text-gray-700">
                      Currency
                    </label>
                    <select
                      id="currency"
                      name="currency"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue="NGN"
                    >
                      <option value="USD">US Dollar ($)</option>
                      <option value="EUR">Euro (€)</option>
                      <option value="GBP">British Pound (£)</option>
                      <option value="CAD">Canadian Dollar (C$)</option>
                      <option value="AUD">Australian Dollar (A$)</option>
                      <option value="NGN">Nigerian Naira (₦)</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium text-gray-900">User Management</h2>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Add New User
                  </button>
                </div>
                
                <div className="overflow-x-auto rounded-md border">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Role
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[
                        { id: 1, name: 'Admin User', email: 'admin@clovacreate.com', role: 'Admin', status: 'Active' },
                        { id: 2, name: 'Tsey Omatseye', email: 'tsey@clovacreate.com', role: 'Admin', status: 'Active' },
                        { id: 3, name: 'Eworitse Wilbert', email: 'eworitse@clovacreate.com', role: 'Staff', status: 'Active' },
                        { id: 4, name: 'Jane Smith', email: 'jane@clovacreate.com', role: 'Staff', status: 'Inactive' },
                      ].map((user) => (
                        <tr key={user.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                                {user.name.charAt(0)}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{user.email}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{user.role}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {user.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 mr-3">
                              Edit
                            </button>
                            {user.status === 'Active' ? (
                              <button className="text-red-600 hover:text-red-900">
                                Deactivate
                              </button>
                            ) : (
                              <button className="text-green-600 hover:text-green-900">
                                Activate
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'permissions' && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-900">Role Permissions</h2>
                
                <div className="border rounded-md overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b">
                    <h3 className="text-sm font-medium text-gray-700">Admin Role</h3>
                  </div>
                  <div className="p-4 space-y-4">
                    {[
                      'View all system data',
                      'Add/Edit/Delete inventory items',
                      'Add/Edit/Delete clients',
                      'Manage bookings',
                      'Generate reports',
                      'Manage users and permissions',
                      'Access system settings'
                    ].map((permission, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id={`admin-${index}`}
                            name={`admin-${index}`}
                            type="checkbox"
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                            defaultChecked
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor={`admin-${index}`} className="font-medium text-gray-700">
                            {permission}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border rounded-md overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b">
                    <h3 className="text-sm font-medium text-gray-700">Staff Role</h3>
                  </div>
                  <div className="p-4 space-y-4">
                    {[
                      'View inventory items',
                      'View client information',
                      'Create and manage bookings',
                      'View basic reports',
                      'Update personal profile',
                      'Check-in and check-out equipment'
                    ].map((permission, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id={`staff-${index}`}
                            name={`staff-${index}`}
                            type="checkbox"
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                            defaultChecked={index < 4}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor={`staff-${index}`} className="font-medium text-gray-700">
                            {permission}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-900">Notification Settings</h2>
                
                <div className="space-y-4">
                  <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">Booking Notifications</h3>
                        <p className="text-sm text-gray-500">Receive notifications about new bookings, returns, and cancellations</p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <label htmlFor="booking-toggle" className="flex items-center cursor-pointer">
                          <div className="relative">
                            <input type="checkbox" id="booking-toggle" className="sr-only" defaultChecked />
                            <div className="block bg-gray-200 w-10 h-6 rounded-full"></div>
                            <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">Inventory Alerts</h3>
                        <p className="text-sm text-gray-500">Get notified when inventory items are low or need maintenance</p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <label htmlFor="inventory-toggle" className="flex items-center cursor-pointer">
                          <div className="relative">
                            <input type="checkbox" id="inventory-toggle" className="sr-only" defaultChecked />
                            <div className="block bg-gray-200 w-10 h-6 rounded-full"></div>
                            <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">System Updates</h3>
                        <p className="text-sm text-gray-500">Receive notifications about system updates and new features</p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <label htmlFor="system-toggle" className="flex items-center cursor-pointer">
                          <div className="relative">
                            <input type="checkbox" id="system-toggle" className="sr-only" defaultChecked />
                            <div className="block bg-gray-200 w-10 h-6 rounded-full"></div>
                            <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">Client Activity</h3>
                        <p className="text-sm text-gray-500">Get notified about new clients and client activity</p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <label htmlFor="client-toggle" className="flex items-center cursor-pointer">
                          <div className="relative">
                            <input type="checkbox" id="client-toggle" className="sr-only" defaultChecked />
                            <div className="block bg-gray-200 w-10 h-6 rounded-full"></div>
                            <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6 space-y-4">
                  <h3 className="text-sm font-medium text-gray-900">Notification Delivery</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="email-notifications"
                          name="email-notifications"
                          type="checkbox"
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          defaultChecked
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="email-notifications" className="font-medium text-gray-700">
                          Email Notifications
                        </label>
                        <p className="text-gray-500">Receive notifications via email</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="sms-notifications"
                          name="sms-notifications"
                          type="checkbox"
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="sms-notifications" className="font-medium text-gray-700">
                          SMS Notifications
                        </label>
                        <p className="text-gray-500">Receive notifications via SMS</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="in-app-notifications"
                          name="in-app-notifications"
                          type="checkbox"
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          defaultChecked
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="in-app-notifications" className="font-medium text-gray-700">
                          In-App Notifications
                        </label>
                        <p className="text-gray-500">Receive notifications within the application</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'terms' && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-900">Terms & Conditions</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="terms" className="block text-sm font-medium text-gray-700">
                      Booking Terms & Conditions
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="terms"
                        name="terms"
                        rows={10}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        defaultValue={`1. GENERAL TERMS
All equipment rentals are subject to these terms and conditions.

2. RENTAL PERIOD
The rental period commences when the equipment leaves our premises and terminates when the equipment is returned to our premises.

3. RESPONSIBILITY
The client assumes full responsibility for all equipment rented and shall compensate ClovaCreate Studio for any damage or loss.

4. CANCELLATION POLICY
Cancellations must be made at least 48 hours before the scheduled rental period to avoid a cancellation fee.

5. PAYMENT TERMS
Payment is due in full at the time of equipment pickup unless prior arrangements have been made.

6. INSURANCE
Clients must provide proof of insurance covering the rental equipment for the full replacement value.

7. LATE RETURNS
Late returns will be charged at the daily rate for each day the equipment is overdue.`}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="privacy" className="block text-sm font-medium text-gray-700">
                      Privacy Policy
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="privacy"
                        name="privacy"
                        rows={6}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        defaultValue={`PRIVACY POLICY
ClovaCreate Studio is committed to protecting the privacy of our clients. This Privacy Policy outlines how we collect, use, and safeguard your personal information.

We collect personal information such as name, contact details, and payment information solely for the purpose of providing our services. We do not share this information with third parties except as required to complete your transaction or as required by law.

You may request access to your personal information at any time, and we will take reasonable steps to ensure it is accurate and up-to-date.`}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;