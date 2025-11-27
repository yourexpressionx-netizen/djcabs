export const VEHICLE_TYPES = {
  HATCHBACK: {
    id: 'hatchback',
    name: 'Hatchback',
    capacity: '4 passengers',
    description: 'Compact and economical, perfect for small groups',
    examples: 'Swift, i10, Wagon R'
  },
  SEDAN: {
    id: 'sedan',
    name: 'Sedan',
    capacity: '4 passengers',
    description: 'Comfortable ride with extra luggage space',
    examples: 'Dzire, Xcent, Etios'
  },
  SUV: {
    id: 'suv',
    name: 'SUV',
    capacity: '6-7 passengers',
    description: 'Spacious and powerful, ideal for hill drives',
    examples: 'Scorpio, XUV500, Safari'
  },
  INNOVA: {
    id: 'innova',
    name: 'Innova',
    capacity: '7 passengers',
    description: 'Reliable and comfortable for long journeys',
    examples: 'Toyota Innova'
  },
  INNOVA_CRYSTA: {
    id: 'innova-crysta',
    name: 'Innova Crysta',
    capacity: '7 passengers',
    description: 'Premium comfort with enhanced features',
    examples: 'Toyota Innova Crysta'
  },
  TEMPO_TRAVELER: {
    id: 'tempo-traveler',
    name: 'Tempo Traveler',
    capacity: '12-16 passengers',
    description: 'Perfect for large groups and tours',
    examples: 'Force Tempo Traveler'
  }
} as const;

export type VehicleType = keyof typeof VEHICLE_TYPES;

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  vehicleType: VehicleType;
  pickup: string;
  destination: string;
  date: string;
  passengers: number;
  specialRequirements?: string;
}