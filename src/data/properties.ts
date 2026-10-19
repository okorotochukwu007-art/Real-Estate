/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Demonstration listings and corridor data for Femak Realty Consult.
 * Formatted with inspiration from iconhomesng.com luxury standards.
 */

import { Property, LocationHighlight, MegaProject } from '../types/property';

export const DEMO_PROPERTIES: Property[] = [
  {
    id: 'prop-lekki-duplex-01',
    title: 'The Haven Court — 4-Bedroom Contemporary Terrace Duplex',
    location: 'Lekki Phase 2, Lagos',
    corridor: 'Lekki',
    propertyType: 'residential',
    status: 'Available',
    plotSize: '350 SQM (Built Footprint)',
    priceNgn: 145000000,
    priceFormatted: '₦145,000,000',
    shortDescription: 'Modern architectural family duplex featuring double-volume ceilings, private courtyard, automated access, and private parking.',
    fullDescription: 'A demonstration residential listing illustrating a finished 4-bedroom duplex layout in Lekki Phase 2. Designed with open-plan living, fully fitted minimalist kitchen, en-suite primary bedroom with walk-in wardrobe, and smart security integrations.',
    highlights: [
      'Paved private compound with 3-car parking',
      'All rooms ensuite with premium sanitary fittings',
      'Fitted kitchen with heat extractor & quartz countertops',
      'Integrated solar/inverter conduit wiring ready'
    ],
    titleDocument: 'Governor\'s Consent Context (Demonstration)',
    isDemonstration: true,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-[#1A1817] via-[#201E1D] to-[#151312]',
    bedrooms: 4,
    bathrooms: 5
  },
  {
    id: 'prop-sangotedo-land-02',
    title: 'Verdant Crest Scheme — 600 SQM 100% Dry Residential Land',
    location: 'Off Monastery Road, Sangotedo, Lagos',
    corridor: 'Sangotedo',
    propertyType: 'land',
    status: 'Fast Selling',
    plotSize: '600 SQM (Standard Plot)',
    priceNgn: 42000000,
    priceFormatted: '₦42,000,000',
    shortDescription: '100% dry, table land situated within an emerging gated enclave close to Novare Lekki Mall and major landmarks.',
    fullDescription: 'A demonstration land listing highlighting investment opportunities within Sangotedo. Situated in a developing community with clear beacon boundaries, natural drainage, and rapid capital appreciation potential along Monastery Road.',
    highlights: [
      'Instant physical allocation upon formal documentation',
      '100% dry table topography requiring zero sand-filling',
      'Perimeter fencing and paved estate layout',
      '5 minutes drive from Novare Mall & Shoprite Sangotedo'
    ],
    titleDocument: 'Registered Title / Gazette in View (Demonstration)',
    isDemonstration: true,
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-[#201E1D] via-[#1A1817] to-[#151312]'
  },
  {
    id: 'prop-epe-oasis-03',
    title: 'Oasis Park Scheme — 500 SQM Strategic Corridor Land',
    location: 'Alaro City Corridor, Epe, Lagos',
    corridor: 'Epe',
    propertyType: 'land',
    status: 'Allocation Ready',
    plotSize: '500 SQM',
    priceNgn: 18500000,
    priceFormatted: '₦18,500,000',
    shortDescription: 'Affordable high-upside parcel positioned along the expanding Epe road network near key trade zones and university campuses.',
    fullDescription: 'A demonstration parcel illustrating accessible entry-point land opportunities in Epe. Ideal for medium to long-term wealth preservation, buy-and-hold investors, and cooperative development groups tapping into the Lekki Deep Sea Port economic zone.',
    highlights: [
      'Direct proximity to ongoing Epe-Ikorodu and Epe-Ijebu express expansion',
      'Clear survey coordinates and demarcated boundary beacons',
      'High projected capital appreciation over 3–5 year horizon',
      'Elevated dry red earth with zero flood risks'
    ],
    titleDocument: 'Registered Survey & Freehold (Demonstration)',
    isDemonstration: true,
    imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-[#151312] via-[#201E1D] to-[#1A1817]'
  },
  {
    id: 'prop-ajah-terrace-04',
    title: 'Palm Vista Residences — 3-Bedroom Semi-Detached Terrace',
    location: 'Badore Road, Ajah, Lagos',
    corridor: 'Ajah',
    propertyType: 'residential',
    status: 'Available',
    plotSize: '280 SQM (Built Footprint)',
    priceNgn: 95000000,
    priceFormatted: '₦95,000,000',
    shortDescription: 'Elegant suburban residence in a secure gated neighborhood featuring stamped concrete floors and 24/7 security.',
    fullDescription: 'A demonstration residential unit in Ajah showing a balanced entry for young professionals and families seeking proximity to the Victoria Island / Lekki commercial hubs without Lekki Phase 1 price premiums.',
    highlights: [
      'Master bedroom with private terrace and walk-in closet',
      'Concrete stamped floor with perimeter drainage',
      'Treated central water supply system',
      'Convenient access to Jubilee Bridge and Lekki Expressway'
    ],
    titleDocument: 'Governor\'s Consent Reference (Demonstration)',
    isDemonstration: true,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-[#201E1D] via-[#151312] to-[#2A2421]',
    bedrooms: 3,
    bathrooms: 4
  },
  {
    id: 'prop-epe-commercial-05',
    title: 'Horizon Crest — 1,000 SQM Commercial / Mixed Acreage',
    location: 'Mojoda Corridor, Epe Expressway, Lagos',
    corridor: 'Epe',
    propertyType: 'commercial',
    status: 'Available',
    plotSize: '1,000 SQM (2 Standard Plots)',
    priceNgn: 36000000,
    priceFormatted: '₦36,000,000',
    shortDescription: 'Expansive twin-plot parcel with dual road frontage suitable for warehousing, institutional use, or apartment developments.',
    fullDescription: 'Demonstration opportunity representing scalable land acreage in Epe for commercial, warehousing, light industrial, or multi-family construction. Positions forward-thinking developers at the epicenter of Lagos State industrial decentralization.',
    highlights: [
      'Dual road access on approved master plan',
      'Table dry ground ready for construction foundation',
      'High vehicular visibility along major distribution link',
      'Flexible staggered installment options'
    ],
    titleDocument: 'Gazette / Excision in view (Demonstration)',
    isDemonstration: true,
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-[#1A1817] via-[#201E1D] to-[#151312]'
  },
  {
    id: 'prop-sangotedo-villa-06',
    title: 'Cedar Meadows — 500 SQM Premium Gated Estate Land',
    location: 'Crown Estate Neighborhood, Sangotedo, Lagos',
    corridor: 'Sangotedo',
    propertyType: 'land',
    status: 'Allocation Ready',
    plotSize: '500 SQM',
    priceNgn: 50000000,
    priceFormatted: '₦50,000,000',
    shortDescription: 'Residential land parcel positioned in an established residential zone surrounded by active luxury estates.',
    fullDescription: 'A demonstration plot illustrating premium infill parcels in Sangotedo. Surrounded by occupied luxury developments, international schools, and paved access roads.',
    highlights: [
      'Immediate construction approval feasibility',
      'Electricity grid infrastructure already installed in neighborhood',
      'Serene environment away from express road congestion',
      'Clean beacon documentation with verifiable survey data'
    ],
    titleDocument: 'Certificate of Occupancy Context (Demonstration)',
    isDemonstration: true,
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-[#201E1D] via-[#1A1817] to-[#151312]'
  }
];

export const MEGA_PROJECTS: MegaProject[] = [
  {
    id: 'proj-deep-sea-port',
    name: 'Lekki Deep Sea Port',
    category: 'Maritime & Logistics Megaproject',
    distanceFromCorridor: 'Ibeju-Lekki / Free Trade Zone',
    impactSummary: 'Nigeria’s largest deep sea port with capacity for ultra-large container ships. Catalyzing industrial and logistics warehousing demand along the entire corridor.',
    investmentCatalyst: 'Direct driver of corporate tenant demand and land appreciation for surrounding parcels.',
    iconName: 'Anchor'
  },
  {
    id: 'proj-dangote-refinery',
    name: 'Dangote Petroleum Refinery & Petrochemicals',
    category: 'Industrial Megacity ($20B+ Investment)',
    distanceFromCorridor: 'Lekki Free Trade Zone Axis',
    impactSummary: 'The world’s largest single-train petroleum refinery employing tens of thousands of engineers, logistics managers, and executives requiring modern housing.',
    investmentCatalyst: 'Exponential surge in executive residential leasing and commercial hospitality needs.',
    iconName: 'Factory'
  },
  {
    id: 'proj-airport',
    name: 'Proposed Lekki International Airport',
    category: 'Aviation Infrastructure',
    distanceFromCorridor: 'Epe Expressway Axis',
    impactSummary: 'Approved multi-billion naira passenger and cargo international gateway designed to serve eastern Lagos, Victoria Island, and the Lekki economic zones.',
    investmentCatalyst: 'Long-term capital multiplier for residential and mixed-use land banking in Epe.',
    iconName: 'Plane'
  },
  {
    id: 'proj-alaro-city',
    name: 'Alaro City & Special Economic Zones',
    category: 'Master-Planned Integrated City',
    distanceFromCorridor: 'Northwest Quadrant, Lekki-Epe Expressway',
    impactSummary: 'Over 2,000 hectares of master-planned mixed-use development with dedicated power, clean water, and light industrial park concessions.',
    investmentCatalyst: 'Sets the urban planning standard for modern gated business and residential living.',
    iconName: 'Building2'
  }
];

export const CORRIDOR_LOCATIONS: LocationHighlight[] = [
  {
    id: 'loc-lekki',
    name: 'Lekki',
    subtitle: 'Prime Metropolitan Luxury & Commercial Vitality',
    description: 'The established benchmark for high-net-worth residential and commercial property in Lagos. Lekki offers established road networks, top-tier private schools, corporate headquarters, and vibrant lifestyle amenities.',
    infrastructureHighlights: [
      'Lekki-Ikoyi Link Bridge & coastal access routes',
      'Established power corridors & high-end healthcare hubs',
      'High rental yield for residential executive leases'
    ],
    growthDrivers: [
      'Sustained corporate tenant demand',
      'Mature urban amenities and fine dining',
      'Prime capital preservation for family offices'
    ],
    distanceFromVictoriaIsland: '5–15 km (10–25 mins)',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'loc-ajah',
    name: 'Ajah',
    subtitle: 'High-Density Residential & Commuter Gateway',
    description: 'A vibrant, accessible residential hub bridging central Lekki and the mid-corridor communities. Ajah is popular among young families, upwardly mobile professionals, and developers seeking reliable rental occupancy.',
    infrastructureHighlights: [
      'Jubilee Flyover easing east-west transit',
      'Direct connectivity to Badore water transportation jetty',
      'Dense cluster of supermarkets, schools, and local banking'
    ],
    growthDrivers: [
      'Strong, steady rental demand from mid-income earners',
      'Growing commercial retail and co-working developments',
      'Accessible entry price points compared to Lekki Phase 1'
    ],
    distanceFromVictoriaIsland: '22 km (30–45 mins)',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'loc-sangotedo',
    name: 'Sangotedo',
    subtitle: 'Modern Family Enclaves & Retail Magnet',
    description: 'Home to the iconic Novare Lekki Mall and prestigious private communities. Sangotedo represents the sweet spot for master-planned gated estates, contemporary townhouses, and solid capital growth.',
    infrastructureHighlights: [
      'Novare Lekki Mall (largest mall in Lagos by footprint)',
      'Expansion of Monastery Road residential bypass',
      'Proximity to prominent international academies'
    ],
    growthDrivers: [
      'Family-centric lifestyle migration eastward',
      'Shift toward secure gated estates with modern facility management',
      'High appreciation rate for dry residential parcels'
    ],
    distanceFromVictoriaIsland: '30 km (40–55 mins)',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'loc-epe',
    name: 'Epe',
    subtitle: 'The Industrial, Logistics & Capital Boom Epicenter',
    description: 'The transformative frontier of Lagos State economic expansion. Bordering the Lekki Free Trade Zone, Dangote Refinery, and proposed Lekki International Airport, Epe provides unmatched land appreciation opportunities.',
    infrastructureHighlights: [
      'Dualised 6-lane Lekki–Epe Expressway',
      'Strategic highway connections to Ijebu-Ode and Ikorodu',
      'Proximity to Alaro City & Special Economic Zones'
    ],
    growthDrivers: [
      'Multi-billion dollar industrial investments driving housing demand',
      'Large dry acreage suitable for long-term land banking',
      'Proactive Lagos State infrastructure and urban planning'
    ],
    distanceFromVictoriaIsland: '55 km (60–75 mins)',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80'
  }
];

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    title: 'Contemporary Luxury Villas in Lekki',
    caption: 'Architectural excellence tailored for executive residential living.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85',
    tag: 'Lekki Phase 1 & 2'
  },
  {
    id: 'slide-2',
    title: 'Master-Planned Gated Communities',
    caption: 'Secure residential layouts with paved access and recreational parks.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85',
    tag: 'Sangotedo & Ajah Enclaves'
  },
  {
    id: 'slide-3',
    title: 'Strategic Land Banking Along Lekki–Epe',
    caption: 'Verified parcels positioned in the trajectory of rapid economic growth.',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=85',
    tag: 'Epe Growth Corridor'
  },
  {
    id: 'slide-4',
    title: 'Sophisticated Modern Living Spaces',
    caption: 'Refined architectural residences built with lasting craftsmanship.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=85',
    tag: 'Corridor Developments'
  }
];
