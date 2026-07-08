export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface PackageItem {
  title: string;
  destination: string;
  duration: string;
  price: string;
  rating: number;
  description: string;
  image: string;
  origin?: string;
  dhamType?: string;
  slug?: string;
  itinerary?: string[];
}

export interface FleetItem {
  name: string;
  seats: string;
  ac: string;
  luggage: string;
  price: string;
  image: string;
}

export interface GalleryItem {
  title: string;
  image: string;
  category: string;
}

export interface TestimonialItem {
  name: string;
  location: string;
  rating: number;
  review: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const stats = [
  { value: '5000+', label: 'Happy Customers' },
  { value: '250+', label: 'Tour Packages' },
  { value: '150+', label: 'Vehicles' },
  { value: '10+', label: 'Years Experience' },
];

export const services: ServiceItem[] = [
  {
    title: 'Domestic Tours',
    description: 'Scenic escapes across India with curated stay and transfer support.',
    icon: 'fa-map-location-dot',
  },
  {
    title: 'International Tours',
    description: 'Hassle-free global journeys with premium hospitality and local guidance.',
    icon: 'fa-globe',
  },
  {
    title: 'Hotel Booking',
    description: 'Stay in handpicked hotels that blend comfort, location and value.',
    icon: 'fa-hotel',
  },
  {
    title: 'Flight Booking',
    description: 'Flexible flight planning with competitive fares and itinerary support.',
    icon: 'fa-plane',
  },
  {
    title: 'Cab Services',
    description: 'Airport pickups and city taxis delivered by trained, punctual drivers.',
    icon: 'fa-car',
  },
  {
    title: 'Bus Booking',
    description: 'Group travel made easy with spacious and dependable bus options.',
    icon: 'fa-bus',
  },
  {
    title: 'Corporate Tours',
    description: 'Professional travel management for offsites, conferences and team retreats.',
    icon: 'fa-briefcase',
  },
  {
    title: 'Honeymoon Packages',
    description: 'Romantic escapes with private transfers, candlelight stays and dreamy views.',
    icon: 'fa-heart',
  },
  {
    title: 'Pilgrimage Tours',
    description: 'Spiritual journeys with carefully planned routes and temple visits.',
    icon: 'fa-pray',
  },
  {
    title: 'Adventure Tours',
    description: 'Thrilling getaways crafted around treks, rafting and mountain retreats.',
    icon: 'fa-mountain',
  },
  {
    title: 'Travel Insurance',
    description: 'Stay protected with comprehensive travel coverage and 24/7 support.',
    icon: 'fa-shield-heart',
  },
  {
    title: 'Visa Assistance',
    description: 'Complete guidance for documentation, appointments and travel formalities.',
    icon: 'fa-passport',
  },
];

export const packages: PackageItem[] = [
  {
    title: 'Char Dham Yatra — From Delhi',
    destination: 'Badrinath • Kedarnath • Gangotri • Yamunotri',
    duration: '11 Days / 10 Nights',
    price: '₹34,999',
    rating: 4.9,
    description:
      'Comprehensive Char Dham pilgrimage starting from Delhi with comfortable transfers, temple darshans and guided support.',
    image: 'assets/images/char-dham-yatra-from-delhi.jpg',
    origin: 'Delhi',
    dhamType: '4-dham',
    slug: 'char-dham-delhi',
  },
  {
    title: 'Char Dham Yatra — From Haridwar',
    destination: 'Badrinath • Kedarnath • Gangotri • Yamunotri',
    duration: '10 Days / 9 Nights',
    price: '₹32,499',
    rating: 4.9,
    description:
      'Char Dham package starting from Haridwar with streamlined transfers to hill shrines and comfortable hill accommodation.',
    image: 'assets/images/char-dham-yatra-from-haridwar.jpg',
    origin: 'Haridwar',
    dhamType: '4-dham',
    slug: 'char-dham-haridwar',
  },
  {
    title: '3 Dham Yatra — From Delhi',
    destination: 'Badrinath • Kedarnath • Gangotri',
    duration: '9 Days / 8 Nights',
    price: '₹28,999',
    rating: 4.8,
    description:
      'Three holy shrines pilgrimage starting from Delhi with planned darshans, local transfers and stay arrangements.',
    image: 'assets/images/3-dham-yatra-from-delhi.jpg',
    origin: 'Delhi',
    dhamType: '3-dham',
    slug: '3-dham-delhi',
  },
  {
    title: '3 Dham Yatra — From Haridwar',
    destination: 'Badrinath • Kedarnath • Gangotri',
    duration: '8 Days / 7 Nights',
    price: '₹26,999',
    rating: 4.8,
    description:
      'Convenient 3-dham itinerary launching from Haridwar with experienced drivers and comfortable hotels.',
    image: 'assets/images/3-dham-yatra-from-haridwar.jpg',
    origin: 'Haridwar',
    dhamType: '3-dham',
    slug: '3-dham-haridwar',
  },
  {
    title: '2 Dham Yatra (Badrinath & Kedarnath) — From Delhi',
    destination: 'Badrinath • Kedarnath',
    duration: '7 Days / 6 Nights',
    price: '₹20,999',
    rating: 4.8,
    description:
      'Compact 2-dham pilgrimage covering Badrinath and Kedarnath starting from Delhi with comfortable transfers and temple darshans.',
    image: 'assets/images/2-dham-yatra-badrinath-kedarnath-from-delhi.jpg',
    origin: 'Delhi',
    dhamType: '2-dham',
    slug: '2-dham-badrinath-kedarnath-delhi',
    itinerary: [
      'Day 1: Delhi to Haridwar — drive and overnight stay',
      'Day 2: Haridwar to Guptkashi — local darshan en route',
      'Day 3: Guptkashi to Kedarnath base / trek or pony to temple',
      'Day 4: Kedarnath darshan and return to Guptkashi',
      'Day 5: Drive towards Badrinath region and overnight',
      'Day 6: Badrinath darshan and return to Haridwar/Delhi',
    ],
  },
  {
    title: '2 Dham Yatra (Badrinath & Kedarnath) — From Haridwar',
    destination: 'Badrinath • Kedarnath',
    duration: '6 Days / 5 Nights',
    price: '₹19,499',
    rating: 4.8,
    description:
      'Efficient 2-dham itinerary launching from Haridwar with emphasis on timely darshans and comfortable hill accommodation.',
    image: 'assets/images/2-dham-yatra-badrinath-kedarnath-from-haridwar.jpg',
    origin: 'Haridwar',
    dhamType: '2-dham',
    slug: '2-dham-badrinath-kedarnath-haridwar',
    itinerary: [
      'Day 1: Haridwar to Guptkashi — drive and check-in',
      'Day 2: Guptkashi to Kedarnath (trek/pony) and darshan',
      'Day 3: Kedarnath return to Guptkashi',
      'Day 4: Drive to Badrinath region',
      'Day 5: Badrinath darshan and return toward Haridhar',
    ],
  },
  {
    title: '1 Dham Yatra (Kedarnath) — From Delhi',
    destination: 'Kedarnath',
    duration: '4 Days / 3 Nights',
    price: '₹12,499',
    rating: 4.7,
    description:
      'Short Kedarnath pilgrimage leaving from Delhi, includes transfers up to base and trek/ponny arrangements as needed.',
    image: 'assets/images/1-dham-yatra-kedarnath-from-delhi.jpg',
    origin: 'Delhi',
    dhamType: '1-dham',
    slug: '1-dham-kedarnath-delhi',
    itinerary: [
      'Day 1: Delhi to Rishikesh/Haridwar — overnight',
      'Day 2: Drive to Sonprayag and trek/pony to Kedarnath',
      'Day 3: Kedarnath darshan and return to Sonprayag',
      'Day 4: Drive back to Delhi',
    ],
  },
  {
    title: '1 Dham Yatra (Kedarnath) — From Haridwar',
    destination: 'Kedarnath',
    duration: '3 Days / 2 Nights',
    price: '₹11,299',
    rating: 4.7,
    description:
      'Quick Kedarnath yatra from Haridwar with focus on comfort and timely darshan arrangements.',
    image: 'assets/images/1-dham-yatra-kedarnath-from-delhi.jpg',
    origin: 'Haridwar',
    dhamType: '1-dham',
    slug: '1-dham-kedarnath-haridwar',
    itinerary: [
      'Day 1: Haridwar to Sonprayag',
      'Day 2: Trek/pony to Kedarnath and darshan',
      'Day 3: Return to Haridhar',
    ],
  },
  {
    title: 'Shimla — Manali Holiday Package',
    destination: 'Shimla • Manali',
    duration: '6 Days / 5 Nights',
    price: '₹18,999',
    rating: 4.7,
    description:
      'Classic Himachal circuit covering colonial Shimla and alpine Manali with scenic drives and leisure time.',
    image: 'assets/images/snowy-adventure.jpg',
    slug: 'shimla-manali-package',
    itinerary: [
      'Day 1: Delhi to Shimla — overnight stay',
      'Day 2: Shimla local sightseeing',
      'Day 3: Drive to Manali via Kullu',
      'Day 4: Manali local sightseeing and leisure',
      'Day 5: Solang Valley / Rohtang (subject to permits)',
    ],
  },
  {
    title: 'Nainital & Kumaon Hill Escape',
    destination: 'Nainital • Almora • Kausani',
    duration: '4 Days / 3 Nights',
    price: '₹9,499',
    rating: 4.6,
    description: 'Peaceful Kumaon hill-station getaway with lakeside stays and scenic viewpoints.',
    image: 'assets/images/nainital-kumaon-hill-escape.jpg',
    slug: 'nainital-kumaon-escape',
    itinerary: [
      'Day 1: Delhi to Nainital — boating and market walk',
      'Day 2: Nainital to Almora — cultural walk',
      'Day 3: Kausani sunrise viewpoint and return',
    ],
  },
  {
    title: 'Goa Beach Break',
    destination: 'North Goa • South Goa',
    duration: '5 Days / 4 Nights',
    price: '₹14,999',
    rating: 4.5,
    description:
      'Sun-drenched beaches, water-sports and relaxed coastal evenings with curated stays.',
    image: 'assets/images/goa-beach-break.jpg',
    slug: 'goa-beach-break',
    itinerary: [
      'Day 1: Arrival and beach time',
      'Day 2: Water sports and North Goa sightseeing',
      'Day 3: South Goa beaches and leisure',
    ],
  },
  {
    title: 'Kerala Backwaters & Houseboat',
    destination: 'Alleppey • Kumarakom',
    duration: '4 Days / 3 Nights',
    price: '₹16,499',
    rating: 4.8,
    description:
      'Relaxing backwater cruise on a private houseboat with local cuisine and village visits.',
    image: 'assets/images/kerala-backwaters-houseboat.jpg',
    slug: 'kerala-backwaters-houseboat',
    itinerary: [
      'Day 1: Kochi arrival and transfer to Alleppey',
      'Day 2: Houseboat cruise with village stopovers',
      'Day 3: Kumarakom bird sanctuary and leisure',
    ],
  },
  {
    title: 'Ranthambore Tiger Safari',
    destination: 'Ranthambore National Park',
    duration: '3 Days / 2 Nights',
    price: '₹12,999',
    rating: 4.6,
    description:
      'Early morning and late afternoon safaris in search of tigers, with comfortable forest lodges.',
    image: 'assets/images/ranthambore-tiger-safari.jpg',
    slug: 'ranthambore-safari',
    itinerary: [
      'Day 1: Arrival and evening nature walk',
      'Day 2: Morning & afternoon safaris',
      'Day 3: Departure',
    ],
  },
  {
    title: 'Jaipur Heritage & Rajasthan Tour',
    destination: 'Jaipur • Amber Fort • City Palace',
    duration: '3 Days / 2 Nights',
    price: '₹8,999',
    rating: 4.5,
    description: 'Explore royal forts, palaces and local markets with guided heritage walks.',
    image: 'assets/images/jaipur-heritage-rajasthan-tour.jpg',
    slug: 'jaipur-heritage-tour',
    itinerary: ['Day 1: Arrival and Amber Fort visit', 'Day 2: City Palace and local bazaars'],
  },
];

// Fleet data removed — fleet feature retired.

export const gallery: GalleryItem[] = [
  {
    title: 'Scenic Mountain Drive',
    image: 'assets/images/scenic-mountain-drive.jpg',
    category: 'Adventure',
  },
  {
    title: 'Beachfront Escape',
    image: 'assets/images/beachfront-escape.jpg',
    category: 'Leisure',
  },
  {
    title: 'Royal Palace Stay',
    image: 'assets/images/royal-palace-stay.jpg',
    category: 'Culture',
  },
  {
    title: 'Houseboat Retreat',
    image: 'assets/images/houseboat-retreat.jpg',
    category: 'Nature',
  },
  {
    title: 'Snowy Adventure',
    image: 'assets/images/snowy-adventure.jpg',
    category: 'Adventure',
  },
  {
    title: 'Desert Horizon',
    image: 'assets/images/desert-horizon.jpg',
    category: 'Desert',
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: 'Aarav Sharma',
    location: 'Mumbai',
    rating: 5,
    review:
      'Every detail felt premium and well planned. We loved the smooth transfers and thoughtful itinerary.',
    image: 'assets/images/logo.jpeg',
  },
  {
    name: 'Naina Verma',
    location: 'Bengaluru',
    rating: 5,
    review:
      'The team made our honeymoon seamless. The stay, food and sightseeing were all unforgettable.',
    image: 'assets/images/logo.jpeg',
  },
  {
    name: 'Rahul Desai',
    location: 'Pune',
    rating: 5,
    review:
      'Professional, punctual and genuinely warm. KT Travels turned our family vacation into a beautiful memory.',
    image: 'assets/images/logo.jpeg',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'How do I book a tour package?',
    answer:
      'Choose a package, select your travel date and submit your inquiry through the booking form or WhatsApp.',
  },
  {
    question: 'Do you offer custom itineraries?',
    answer:
      'Yes. We design personalized tours for solo trips, family vacations, corporate events and luxury getaways.',
  },
  {
    question: 'Are flights and hotels included?',
    answer:
      'Most packages include transport and hotel stays, while flights can be added based on your preference.',
  },
  {
    question: 'Can I modify my booking after confirmation?',
    answer: 'Yes, subject to availability and the travel policy of your selected itinerary.',
  },
  {
    question: 'Are your vehicles safe for long drives?',
    answer:
      'All fleet vehicles are regularly serviced, sanitized and staffed by experienced drivers.',
  },
  {
    question: 'Do you arrange pilgrimage tours?',
    answer:
      'Absolutely. We provide comfortable spiritual journeys across major religious destinations in India.',
  },
  {
    question: 'Is travel insurance available?',
    answer: 'Yes. We can add travel insurance for increased peace of mind during your journey.',
  },
  {
    question: 'How early should I book?',
    answer: 'Booking 3–4 weeks in advance is ideal for peak season and international travel.',
  },
  {
    question: 'Do you assist with visas?',
    answer: 'We provide guidance for visa documentation and support for international bookings.',
  },
  {
    question: 'Can I reach you on weekends?',
    answer:
      'Yes, our concierge team is available during the week and for urgent assistance on weekends.',
  },
];
