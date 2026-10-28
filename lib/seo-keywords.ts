/**
 * Keyword map based on the services actually offered on the website and the
 * search phrases visible across Dubai/UAE shutter, garage-door and fabrication
 * service pages. Keep each set focused on one page intent; do not paste every
 * keyword into every page.
 */
export type ServiceSeo = {
  title: string;
  description: string;
  keywords: string[];
};

export const SERVICE_PAGE_SEO: Record<string, ServiceSeo> = {
  awning: {
    title: 'Awning Installation Dubai | Retractable & Motorised Awnings',
    description: 'Fixed, retractable and motorised awning installation in Dubai for villas, balconies, terraces, cafés and shops. Ask about custom sizes, shade coverage and repair support.',
    keywords: [
      'awning installation Dubai', 'retractable awning Dubai', 'motorised awning Dubai',
      'automatic sunshade Dubai', 'awning repair Dubai', 'balcony awning UAE',
      'villa awning Dubai', 'outdoor shade solutions Dubai',
    ],
  },
  canopy: {
    title: 'Car Parking & Entrance Canopy Installation Dubai',
    description: 'Custom car parking shades, entrance canopies and walkway covers in Dubai and the UAE. Discuss steel or aluminium frames, dimensions, fabrication and installation.',
    keywords: [
      'canopy installation Dubai', 'car parking canopy Dubai', 'car parking shade Dubai',
      'entrance canopy Dubai', 'fabric canopy Dubai', 'steel canopy Dubai',
      'aluminium canopy UAE', 'walkway canopy Dubai',
    ],
  },
  'aluminium-works': {
    title: 'Aluminium Doors, Windows & Fabrication Dubai',
    description: 'Custom aluminium doors, windows, partitions, cladding and aluminium fabrication in Dubai. Request site measurement, made-to-measure fabrication and installation for residential or commercial projects.',
    keywords: [
      'aluminium works Dubai', 'aluminium fabrication Dubai', 'aluminium doors Dubai',
      'aluminium windows Dubai', 'aluminium partition Dubai', 'aluminium cladding Dubai',
      'custom aluminium fabrication UAE', 'aluminium contractor Dubai',
    ],
  },
  'steel-work': {
    title: 'Steel Fabrication, Gates & Canopies Dubai',
    description: 'Custom steel fabrication in Dubai for steel gates, pergola frames, canopy structures and car parking systems. Discuss project dimensions, welding, finishing and installation.',
    keywords: [
      'steel fabrication Dubai', 'steel gates Dubai', 'metal fabrication Dubai',
      'steel canopy Dubai', 'steel pergola Dubai', 'car parking structure Dubai',
      'custom steel works UAE', 'welding and fabrication Dubai',
    ],
  },
  polycarbonate: {
    title: 'Polycarbonate Roller Shutters Dubai | Clear Shopfronts',
    description: 'Transparent polycarbonate roller shutters for Dubai shops, showrooms and retail frontages. Compare clear slats, guide profiles, manual or motorised operation and installation options.',
    keywords: [
      'polycarbonate roller shutters Dubai', 'transparent roller shutter Dubai',
      'clear shop shutters Dubai', 'shopfront roller shutters Dubai',
      'vision shutters UAE', 'polycarbonate shutter installation Dubai',
    ],
  },
};

export const PAGE_KEYWORDS = {
  home: [
    'rolling shutter company Dubai', 'rolling shutter installation Dubai',
    'garage door installation Dubai', 'garage door repair Dubai',
    'gate motor repair Dubai', 'aluminium works Dubai',
    'shutter maintenance Dubai', 'rolling shutters UAE',
  ],
  services: [
    'shutter services Dubai', 'rolling shutter repair Dubai',
    'automatic garage doors Dubai', 'gate motor installation Dubai',
    'awning and canopy Dubai', 'aluminium fabrication Dubai',
    'steel fabrication Dubai', 'polycarbonate shutters Dubai',
  ],
  shutter: [
    'rolling shutter installation Dubai', 'rolling shutter repair Dubai',
    'rolling shutter company Dubai', 'shop roller shutters Dubai',
    'warehouse shutters Dubai', 'automatic rolling shutters UAE',
    'motorised shutters Dubai', 'rolling shutter maintenance Dubai',
  ],
  garage: [
    'garage door installation Dubai', 'automatic garage doors Dubai',
    'garage door repair Dubai', 'villa garage doors Dubai',
    'garage door motor Dubai', 'commercial garage doors UAE',
  ],
  motor: [
    'gate motor installation Dubai', 'gate motor repair Dubai',
    'automatic gate motors Dubai', 'sliding gate motor Dubai',
    'swing gate motor Dubai', 'garage door automation Dubai',
    'gate remote repair Dubai', 'access automation UAE',
  ],
  repair: [
    'rolling shutter repair Dubai', 'garage door repair Dubai',
    'gate motor repair Dubai', 'automatic door repair Dubai',
    'shutter maintenance Dubai', 'garage door maintenance UAE',
    'roller shutter motor repair Dubai',
  ],
  about: [
    'Emirates Aluminium Shutter LLC', 'shutter company Dubai',
    'garage door company Dubai', 'aluminium and steel works Dubai',
  ],
  blog: [
    'rolling shutter guide Dubai', 'garage door buying guide UAE',
    'gate motor troubleshooting', 'shutter maintenance advice',
    'awning planning Dubai',
  ],
} as const;
