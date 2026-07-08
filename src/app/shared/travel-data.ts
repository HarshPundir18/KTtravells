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
    title: 'Golden Triangle Escape',
    destination: 'Delhi • Agra • Jaipur',
    duration: '6 Days / 5 Nights',
    price: '₹24,999',
    rating: 4.9,
    description: 'A classic heritage journey with palace stays and sunrise visits.',
    image: 'assets/images/logo.jpeg',
  },
  {
    title: 'Kerala Backwaters Retreat',
    destination: 'Alleppey • Kochi',
    duration: '5 Days / 4 Nights',
    price: '₹19,999',
    rating: 4.8,
    description: 'Cruise the canals, unwind in houseboats and explore spice markets.',
    image:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Himachal Hills & Valleys',
    destination: 'Manali • Solang • Kasol',
    duration: '7 Days / 6 Nights',
    price: '₹27,999',
    rating: 4.9,
    description: 'Snowy peaks, cozy cottages and adventure-filled scenic drives.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Rajasthan Royal Trail',
    destination: 'Jodhpur • Udaipur',
    duration: '8 Days / 7 Nights',
    price: '₹32,999',
    rating: 5.0,
    description: 'Grand forts, desert camps and vibrant folk evenings.',
    image:
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Goa Coastal Bliss',
    destination: 'North Goa • South Goa',
    duration: '4 Days / 3 Nights',
    price: '₹16,499',
    rating: 4.7,
    description: 'Beachfront stays, water sports and curated sunset dinners.',
    image:
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Andaman Island Escape',
    destination: 'Port Blair • Havelock',
    duration: '6 Days / 5 Nights',
    price: '₹29,999',
    rating: 4.9,
    description: 'Pristine beaches, diving, and tranquil island hopping.',
    image:
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Dubai City Lights',
    destination: 'Dubai • Abu Dhabi',
    duration: '5 Days / 4 Nights',
    price: '₹44,999',
    rating: 4.8,
    description: 'Luxury skyline views, desert safaris and premium shopping.',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Swiss Alpine Dream',
    destination: 'Lucerne • Interlaken',
    duration: '7 Days / 6 Nights',
    price: '₹89,999',
    rating: 5.0,
    description: 'Lakeside luxury with mountain rail journeys and chalet stays.',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Bali Island Romance',
    destination: 'Ubud • Seminyak',
    duration: '6 Days / 5 Nights',
    price: '₹62,999',
    rating: 4.9,
    description: 'Tropical serenity with spa rituals and sunset beach time.',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Sikkim Monsoon Trail',
    destination: 'Gangtok • Lachung',
    duration: '7 Days / 6 Nights',
    price: '₹26,499',
    rating: 4.8,
    description: 'Cloud-kissed mountain valleys and local cultural experiences.',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Meghalaya Rainforest Loop',
    destination: 'Shillong • Cherrapunji',
    duration: '5 Days / 4 Nights',
    price: '₹18,999',
    rating: 4.7,
    description: 'Misty peaks, living root bridges and waterfall viewpoints.',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Ooty Tea Garden Stay',
    destination: 'Ooty • Coonoor',
    duration: '4 Days / 3 Nights',
    price: '₹14,999',
    rating: 4.8,
    description: 'Cool mountain air, botanical gardens and colonial charm.',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
  },
];

// Fleet data removed — fleet feature retired.

export const gallery: GalleryItem[] = [
  {
    title: 'Scenic Mountain Drive',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    category: 'Adventure',
  },
  {
    title: 'Beachfront Escape',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    category: 'Leisure',
  },
  {
    title: 'Royal Palace Stay',
    image:
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80',
    category: 'Culture',
  },
  {
    title: 'Houseboat Retreat',
    image:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80',
    category: 'Nature',
  },
  {
    title: 'Snowy Adventure',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
    category: 'Adventure',
  },
  {
    title: 'Desert Horizon',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
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
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Naina Verma',
    location: 'Bengaluru',
    rating: 5,
    review:
      'The team made our honeymoon seamless. The stay, food and sightseeing were all unforgettable.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Rahul Desai',
    location: 'Pune',
    rating: 5,
    review:
      'Professional, punctual and genuinely warm. KT Travels turned our family vacation into a beautiful memory.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
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
