/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PropertyType = 'land' | 'residential' | 'commercial';

export type CorridorLocation = 'Lekki' | 'Ajah' | 'Sangotedo' | 'Epe' | 'Ibeju-Lekki';

export type ListingStatus = 'Available' | 'Fast Selling' | 'Allocation Ready' | 'Under Offer';

export interface Property {
  id: string;
  title: string;
  location: string;
  corridor: CorridorLocation;
  propertyType: PropertyType;
  status: ListingStatus;
  plotSize: string;
  priceNgn: number;
  priceFormatted: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  titleDocument: string;
  isDemonstration: boolean;
  imageUrl: string;
  fallbackGradient: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  bedrooms?: number;
  bathrooms?: number;
}

export interface LocationHighlight {
  id: string;
  name: CorridorLocation;
  subtitle: string;
  description: string;
  infrastructureHighlights: string[];
  growthDrivers: string[];
  distanceFromVictoriaIsland: string;
  imageUrl: string;
}

export interface MegaProject {
  id: string;
  name: string;
  category: string;
  distanceFromCorridor: string;
  impactSummary: string;
  investmentCatalyst: string;
  iconName: string;
}

export interface InspectionBooking {
  fullName: string;
  email: string;
  phone: string;
  propertyId?: string;
  preferredDate: string;
  inspectionType: 'physical' | 'virtual';
  corridorInterest: CorridorLocation;
  notes?: string;
}
