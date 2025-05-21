// Inventory Types
export interface InventoryItemType {
  id: string;
  name: string;
  model: string;
  category: string;
  serialNumber: string;
  description: string;
  status: string; // 'available', 'checked-out', 'reserved', 'maintenance'
  condition: string;
  purchaseDate: string;
  purchasePrice: number;
  currentValue: number;
  notes: string;
  imageUrl?: string;
}

// Client Types
export interface ClientType {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
  status: string; // 'active', 'inactive'
  createdAt: string;
  lastActivity: string;
}

// Booking Types
export interface BookingItemType {
  id: string;
  name: string;
  quantity: number;
}

export interface BookingType {
  id: string;
  client: string;
  clientId: string;
  status: string; // 'upcoming', 'active', 'returned', 'late', 'cancelled'
  startDate: string;
  endDate: string;
  duration: number;
  items: BookingItemType[];
  cost: number;
  notes: string;
  createdAt: string;
  createdBy: string;
}