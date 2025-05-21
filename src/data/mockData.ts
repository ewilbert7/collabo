import { InventoryItemType, ClientType, BookingType } from '../types';

// Mock Inventory Data
export const mockInventoryData: InventoryItemType[] = [
  {
    id: '1',
    name: 'Sony A7III',
    model: 'ILCE-7M3',
    category: 'Cameras',
    serialNumber: 'SNY-A7III-001',
    description: 'Full-frame mirrorless camera with 24.2MP',
    status: 'available',
    condition: 'Good',
    purchaseDate: '2022-01-15',
    purchasePrice: 1999.99,
    currentValue: 1799.99,
    notes: 'Includes battery and charger',
    imageUrl: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '2',
    name: 'Canon C70',
    model: 'C70',
    category: 'Cameras',
    serialNumber: 'CAN-C70-002',
    description: 'Cinema EOS camera with Super 35mm sensor',
    status: 'checked-out',
    condition: 'Excellent',
    purchaseDate: '2023-03-10',
    purchasePrice: 5499.99,
    currentValue: 5299.99,
    notes: 'Professional cinema camera',
    imageUrl: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '3',
    name: 'DJI Ronin 2',
    model: 'Ronin 2',
    category: 'Stabilizers',
    serialNumber: 'DJI-RON2-003',
    description: 'Professional 3-axis camera stabilizer',
    status: 'available',
    condition: 'Good',
    purchaseDate: '2022-05-20',
    purchasePrice: 2499.99,
    currentValue: 2199.99,
    notes: 'Max payload: 30lbs',
    imageUrl: 'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '4',
    name: 'Sony FE 24-70mm f/2.8 GM',
    model: 'SEL2470GM',
    category: 'Lenses',
    serialNumber: 'SNY-2470GM-004',
    description: 'Fast standard zoom G Master lens',
    status: 'maintenance',
    condition: 'Fair',
    purchaseDate: '2021-08-12',
    purchasePrice: 1999.99,
    currentValue: 1799.99,
    notes: 'Needs calibration',
    imageUrl: 'https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '5',
    name: 'Sennheiser MKH 416',
    model: 'MKH 416',
    category: 'Audio',
    serialNumber: 'SEN-MKH416-005',
    description: 'Shotgun microphone for film and broadcast',
    status: 'available',
    condition: 'Excellent',
    purchaseDate: '2023-01-05',
    purchasePrice: 999.99,
    currentValue: 949.99,
    notes: 'Includes windshield',
    imageUrl: 'https://images.pexels.com/photos/13456263/pexels-photo-13456263.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '6',
    name: 'Aputure 600D Pro',
    model: '600D Pro',
    category: 'Lighting',
    serialNumber: 'APT-600D-006',
    description: 'Daylight 600W LED light',
    status: 'reserved',
    condition: 'Good',
    purchaseDate: '2022-11-18',
    purchasePrice: 1899.99,
    currentValue: 1799.99,
    notes: 'With Bowens mount',
    imageUrl: 'https://images.pexels.com/photos/134983/pexels-photo-134983.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '7',
    name: 'Blackmagic URSA Mini Pro 12K',
    model: 'URSA Mini Pro 12K',
    category: 'Cameras',
    serialNumber: 'BMD-URSA12K-007',
    description: '12K Super 35 digital film camera',
    status: 'checked-out',
    condition: 'Excellent',
    purchaseDate: '2023-06-30',
    purchasePrice: 9999.99,
    currentValue: 9799.99,
    notes: 'Includes V-mount battery plate',
    imageUrl: 'https://images.pexels.com/photos/1787235/pexels-photo-1787235.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '8',
    name: 'Sound Devices MixPre-10 II',
    model: 'MixPre-10 II',
    category: 'Audio',
    serialNumber: 'SD-MP10II-008',
    description: '10-input, 12-track audio recorder',
    status: 'available',
    condition: 'Good',
    purchaseDate: '2022-09-14',
    purchasePrice: 1799.99,
    currentValue: 1699.99,
    notes: 'Includes USB-C power adapter',
    imageUrl: 'https://images.pexels.com/photos/164717/pexels-photo-164717.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

// Mock Client Data
export const mockClientData: ClientType[] = [
  {
    id: '1',
    name: 'John Davies',
    company: 'Studio 54 Productions',
    email: 'john@studio54.com',
    phone: '(555) 123-4567',
    address: '123 Film St, Los Angeles, CA 90001',
    notes: 'Frequent renter, prefers Sony equipment',
    status: 'active',
    createdAt: '2022-05-10T14:30:00Z',
    lastActivity: '2023-04-01T10:15:00Z'
  },
  {
    id: '2',
    name: 'Samantha Lee',
    company: 'FrameWorks Media',
    email: 'samantha@frameworksmedia.com',
    phone: '(555) 234-5678',
    address: '456 Camera Ave, New York, NY 10001',
    notes: 'Documentary filmmaker',
    status: 'active',
    createdAt: '2022-08-22T11:20:00Z',
    lastActivity: '2023-03-28T16:45:00Z'
  },
  {
    id: '3',
    name: 'Michael Johnson',
    company: 'Horizon Films',
    email: 'michael@horizonfilms.com',
    phone: '(555) 345-6789',
    address: '789 Director Blvd, Austin, TX 78701',
    notes: 'Often books lighting equipment',
    status: 'inactive',
    createdAt: '2021-11-05T09:10:00Z',
    lastActivity: '2022-12-15T13:30:00Z'
  },
  {
    id: '4',
    name: 'Emily Chen',
    company: 'Cinematic Visions',
    email: 'emily@cinematicvisions.com',
    phone: '(555) 456-7890',
    address: '101 Lens Lane, San Francisco, CA 94103',
    notes: 'Mostly rents for commercial shoots',
    status: 'active',
    createdAt: '2023-01-18T15:40:00Z',
    lastActivity: '2023-04-02T09:20:00Z'
  },
  {
    id: '5',
    name: 'David Kim',
    company: 'Visual Apex',
    email: 'david@visualapex.com',
    phone: '(555) 567-8901',
    address: '202 Production Pkwy, Chicago, IL 60607',
    notes: 'Corporate video specialist',
    status: 'active',
    createdAt: '2022-03-30T12:50:00Z',
    lastActivity: '2023-03-15T11:10:00Z'
  },
  {
    id: '6',
    name: 'Olivia Martinez',
    company: 'Dreamscape Studios',
    email: 'olivia@dreamscapestudios.com',
    phone: '(555) 678-9012',
    address: '303 Editor St, Miami, FL 33127',
    notes: 'Indie filmmaker, price sensitive',
    status: 'active',
    createdAt: '2022-07-12T10:15:00Z',
    lastActivity: '2023-02-28T14:25:00Z'
  }
];

// Mock Booking Data
export const mockBookingData: BookingType[] = [
  {
    id: '1',
    client: 'Studio 54 Productions',
    clientId: '1',
    status: 'active',
    startDate: '2023-04-01T08:00:00Z',
    endDate: '2023-04-05T18:00:00Z',
    duration: 5,
    items: [
      { id: '2', name: 'Canon C70', quantity: 1 },
      { id: '6', name: 'Aputure 600D Pro', quantity: 2 },
      { id: '5', name: 'Sennheiser MKH 416', quantity: 1 }
    ],
    cost: 750.00,
    notes: 'Commercial shoot for clothing brand',
    createdAt: '2023-03-25T14:30:00Z',
    createdBy: 'Admin User'
  },
  {
    id: '2',
    client: 'FrameWorks Media',
    clientId: '2',
    status: 'upcoming',
    startDate: '2023-04-10T09:00:00Z',
    endDate: '2023-04-12T17:00:00Z',
    duration: 3,
    items: [
      { id: '1', name: 'Sony A7III', quantity: 2 },
      { id: '3', name: 'DJI Ronin 2', quantity: 1 },
      { id: '8', name: 'Sound Devices MixPre-10 II', quantity: 1 }
    ],
    cost: 600.00,
    notes: 'Documentary interview shoot',
    createdAt: '2023-03-28T11:45:00Z',
    createdBy: 'Staff User'
  },
  {
    id: '3',
    client: 'Visual Apex',
    clientId: '5',
    status: 'returned',
    startDate: '2023-03-28T10:00:00Z',
    endDate: '2023-03-30T18:00:00Z',
    duration: 3,
    items: [
      { id: '7', name: 'Blackmagic URSA Mini Pro 12K', quantity: 1 },
      { id: '5', name: 'Sennheiser MKH 416', quantity: 2 }
    ],
    cost: 950.00,
    notes: 'Corporate training videos',
    createdAt: '2023-03-20T09:15:00Z',
    createdBy: 'Admin User'
  },
  {
    id: '4',
    client: 'Dreamscape Studios',
    clientId: '6',
    status: 'cancelled',
    startDate: '2023-04-15T08:00:00Z',
    endDate: '2023-04-20T18:00:00Z',
    duration: 6,
    items: [
      { id: '1', name: 'Sony A7III', quantity: 1 },
      { id: '4', name: 'Sony FE 24-70mm f/2.8 GM', quantity: 1 },
      { id: '6', name: 'Aputure 600D Pro', quantity: 3 }
    ],
    cost: 1200.00,
    notes: 'Short film production - cancelled due to funding issues',
    createdAt: '2023-03-10T15:20:00Z',
    createdBy: 'Staff User'
  },
  {
    id: '5',
    client: 'Cinematic Visions',
    clientId: '4',
    status: 'upcoming',
    startDate: '2023-04-22T09:00:00Z',
    endDate: '2023-04-23T20:00:00Z',
    duration: 2,
    items: [
      { id: '2', name: 'Canon C70', quantity: 2 },
      { id: '3', name: 'DJI Ronin 2', quantity: 1 },
      { id: '8', name: 'Sound Devices MixPre-10 II', quantity: 1 }
    ],
    cost: 850.00,
    notes: 'Product commercial shoot',
    createdAt: '2023-04-01T13:10:00Z',
    createdBy: 'Admin User'
  }
];