export const CONTACT = {
  phone: '9894834101',
  phoneDisplay: '98948 34101',
  tagline: 'YOU ARE IN GOOD HANDS',
  businessName: 'RAJA AMBULANCE',
  whatsappNumber: '919894834101',
  whatsappMessage: 'Hello, I need ambulance service. Please assist me.',
};

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getTelLink(): string {
  return `tel:${CONTACT.phone}`;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  category: string;
}

export const ICU_FEATURED: ServiceItem = {
  id: 'icu-d-level-ambulance',
  title: 'ICU D Level Ambulance',
  description:
    'Advanced ambulance transportation support for patients requiring intensive medical care during transportation.',
  image:
    'https://images.pexels.com/photos/6519847/pexels-photo-6519847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  alt: 'ICU D Level Ambulance vehicle',
  category: 'Featured',
};

export const HOME_PREVIEW_SERVICES: ServiceItem[] = [
  {
    id: 'patient-shifting',
    title: 'Patient Shifting (AC / Non-AC)',
    description:
      'Professional patient transportation with AC and Non-AC options.',
    image:
      'https://images.pexels.com/photos/6519935/pexels-photo-6519935.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Paramedics loading a patient stretcher into ambulance',
    category: 'Basic',
  },
  {
    id: 'oxygen-service',
    title: 'Oxygen Service',
    description:
      'Oxygen-supported transportation assistance for patients who require it.',
    image:
      'https://images.pexels.com/photos/5318119/pexels-photo-5318119.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Nurse aiding patient with oxygen mask',
    category: 'Basic',
  },
  {
    id: 'freezer-box-vvip',
    title: 'Freezer Box VVIP',
    description:
      'Premium freezer box service with dignified preservation support.',
    image:
      'https://images.pexels.com/photos/5953713/pexels-photo-5953713.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Cold storage facility',
    category: 'Freezer Box',
  },
  {
    id: 'vip-sorga-ratham',
    title: 'VIP Sorga Ratham',
    description: 'Luxurious funeral ratham service for a dignified farewell.',
    image:
      'https://images.pexels.com/photos/7317675/pexels-photo-7317675.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Elegant funeral room with coffin, flowers, and candles',
    category: 'Funeral Service',
  },
  {
    id: 'air-ambulance-booking',
    title: 'Air Ambulance Booking',
    description:
      'Air ambulance booking assistance including documentation and cargo service.',
    image:
      'https://images.pexels.com/photos/32010721/pexels-photo-32010721.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Air cargo plane taking off',
    category: 'Air Ambulance',
  },
  {
    id: 'tempo-traveller',
    title: 'Tempo Traveller',
    description: 'Spacious AC transport for group travel with comfort.',
    image:
      'https://images.pexels.com/photos/17455632/pexels-photo-17455632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Spacious Mercedes van interior',
    category: 'AC & Non-AC',
  },
];

export interface ServiceCategory {
  id: string;
  heading: string;
  services: ServiceItem[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'basic',
    heading: 'Basic Services',
    services: [
      {
        id: 'patient-shifting',
        title: 'Patient Shifting (AC / Non-AC)',
        description:
          'Professional patient transportation with AC and Non-AC options.',
        image:
          'https://images.pexels.com/photos/6519935/pexels-photo-6519935.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Paramedics loading patient stretcher into ambulance',
        category: 'Basic',
      },
      {
        id: 'oxygen-service',
        title: 'Oxygen Service',
        description:
          'Oxygen-supported transportation assistance for patients who require it.',
        image:
          'https://images.pexels.com/photos/5318119/pexels-photo-5318119.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Nurse aiding patient with oxygen mask',
        category: 'Basic',
      },
    ],
  },
  {
    id: 'funeral',
    heading: 'Funeral Service',
    services: [
      {
        id: 'gold-silver-ratham',
        title: 'Gold & Silver Ratham',
        description: 'Traditional ratham service with dignified arrangements.',
        image:
          'https://images.pexels.com/photos/7317674/pexels-photo-7317674.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Funeral arrangement with wooden casket and white flowers',
        category: 'Funeral',
      },
      {
        id: 'vip-sorga-ratham',
        title: 'VIP Sorga Ratham & Luxurious Funeral',
        description: 'Premium ratham and luxurious funeral service for a respectful farewell.',
        image:
          'https://images.pexels.com/photos/7317666/pexels-photo-7317666.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Elegant funeral setting with coffin, flowers and candles',
        category: 'Funeral',
      },
    ],
  },
  {
    id: 'freezer-box',
    heading: 'Freezer Box',
    services: [
      {
        id: 'freezer-box-silver',
        title: 'Freezer Box — Silver',
        description: 'Standard freezer box service for dignified preservation.',
        image:
          'https://images.pexels.com/photos/5953713/pexels-photo-5953713.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Cold storage facility',
        category: 'Freezer Box',
      },
      {
        id: 'freezer-box-gold',
        title: 'Freezer Box — Gold',
        description: 'Enhanced freezer box service with additional support.',
        image:
          'https://images.pexels.com/photos/4487382/pexels-photo-4487382.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Warehouse storage facility',
        category: 'Freezer Box',
      },
      {
        id: 'freezer-box-vip',
        title: 'Freezer Box — VIP',
        description: 'Premium freezer box with upgraded facilities.',
        image:
          'https://images.pexels.com/photos/1267327/pexels-photo-1267327.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Industrial storage loading dock',
        category: 'Freezer Box',
      },
      {
        id: 'freezer-box-vvip',
        title: 'Freezer Box — VVIP',
        description: 'Top-tier freezer box service with the highest standards of dignity.',
        image:
          'https://images.pexels.com/photos/28657994/pexels-photo-28657994.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Cold storage chamber facility',
        category: 'Freezer Box',
      },
      {
        id: 'coffin-box',
        title: 'Coffin Box',
        description: 'Quality coffin box service for respectful arrangements.',
        image:
          'https://images.pexels.com/photos/7317680/pexels-photo-7317680.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Polished wooden casket with floral arrangements',
        category: 'Freezer Box',
      },
    ],
  },
  {
    id: 'air-ambulance',
    heading: 'Air Ambulance Booking Service',
    services: [
      {
        id: 'air-coffin-box',
        title: 'Coffin Box',
        description: 'Coffin box arrangements for air transport requirements.',
        image:
          'https://images.pexels.com/photos/12403305/pexels-photo-12403305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Wooden coffin with floral arrangement',
        category: 'Air Ambulance',
      },
      {
        id: 'embalming',
        title: 'Body Cleaning & Embalming',
        description: 'Professional body cleaning and embalming assistance for transport.',
        image:
          'https://images.pexels.com/photos/8942225/pexels-photo-8942225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Paramedic in uniform',
        category: 'Air Ambulance',
      },
      {
        id: 'documentation',
        title: 'Documentation Clearance',
        description: 'Assistance with documentation and clearance formalities for air transport.',
        image:
          'https://images.pexels.com/photos/6814526/pexels-photo-6814526.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Person signing documents at a desk',
        category: 'Air Ambulance',
      },
      {
        id: 'air-cargo',
        title: 'Air Cargo Service',
        description: 'Coordinated air cargo service for transport needs.',
        image:
          'https://images.pexels.com/photos/11593193/pexels-photo-11593193.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Cargo airplanes in flight',
        category: 'Air Ambulance',
      },
      {
        id: 'doorstep-delivery',
        title: 'Door Step Delivery',
        description: 'Door step delivery service for complete end-to-end assistance.',
        image:
          'https://images.pexels.com/photos/6699411/pexels-photo-6699411.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Delivery person sorting packages by van',
        category: 'Air Ambulance',
      },
    ],
  },
  {
    id: 'ac-non-ac',
    heading: 'AC & Non-AC Transport',
    services: [
      {
        id: 'eego',
        title: 'EEGO',
        description: 'Comfortable AC vehicle transport for patient and family.',
        image:
          'https://images.pexels.com/photos/18930823/pexels-photo-18930823.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Luxury black van with leather seat',
        category: 'AC & Non-AC',
      },
      {
        id: 'tempo-traveller',
        title: 'Tempo Traveller',
        description: 'Spacious AC transport for group travel with comfort and reliability.',
        image:
          'https://images.pexels.com/photos/17455632/pexels-photo-17455632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Mercedes van interior with premium leather seats',
        category: 'AC & Non-AC',
      },
    ],
  },
  {
    id: 'body-storage',
    heading: 'Body Storage',
    services: [
      {
        id: 'storage-10c',
        title: '10°C Storage',
        description: 'Professional cold storage facility for dignified preservation support.',
        image:
          'https://images.pexels.com/photos/5953713/pexels-photo-5953713.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Cold storage facility',
        category: 'Body Storage',
      },
    ],
  },
  {
    id: 'human-remains',
    heading: 'Human Remains Transport',
    services: [
      {
        id: 'train-service',
        title: 'Train Service',
        description: 'Respectful human remains transport via train service.',
        image:
          'https://images.pexels.com/photos/12367459/pexels-photo-12367459.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Trains at a railway station',
        category: 'Human Remains',
      },
      {
        id: 'airline-service',
        title: 'Airline Service',
        description: 'Human remains transport assistance via airline service.',
        image:
          'https://images.pexels.com/photos/11553022/pexels-photo-11553022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Airplanes on tarmac at airport',
        category: 'Human Remains',
      },
      {
        id: 'road-transport',
        title: 'By Road Service',
        description: 'Dignified human remains transport by road.',
        image:
          'https://images.pexels.com/photos/39000646/pexels-photo-39000646.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Truck traveling on open highway',
        category: 'Human Remains',
      },
    ],
  },
];

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  isDemo: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Demo Reviewer One',
    location: 'Chennai',
    rating: 5,
    text: 'The ambulance arrived quickly and the staff was very professional. They handled everything with care and compassion during a difficult time for our family.',
    isDemo: true,
  },
  {
    id: 2,
    name: 'Demo Reviewer Two',
    location: 'Madurai',
    rating: 5,
    text: 'Excellent service. The ICU ambulance was well-equipped and the team was supportive throughout the journey. Highly recommend RAJA AMBULANCE.',
    isDemo: true,
  },
  {
    id: 3,
    name: 'Demo Reviewer Three',
    location: 'Coimbatore',
    rating: 4,
    text: 'Very responsive team. The funeral arrangements were done with dignity and respect. Thank you for your support during our time of need.',
    isDemo: true,
  },
  {
    id: 4,
    name: 'Demo Reviewer Four',
    location: 'Salem',
    rating: 5,
    text: 'Booked the air ambulance service for transporting a loved one. The documentation and coordination was handled smoothly. Grateful for their assistance.',
    isDemo: true,
  },
  {
    id: 5,
    name: 'Demo Reviewer Five',
    location: 'Tiruchirappalli',
    rating: 5,
    text: 'The freezer box service was clean and well-maintained. The staff was respectful and helpful. A reliable service when you need it most.',
    isDemo: true,
  },
];
