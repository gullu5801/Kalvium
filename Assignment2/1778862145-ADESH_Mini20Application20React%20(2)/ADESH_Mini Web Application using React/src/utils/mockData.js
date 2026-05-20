// Mock data for trips
export const mockTrips = [
  {
    id: 1,
    title: 'Paris Adventure',
    destination: 'Paris, France',
    startDate: '2024-06-15',
    endDate: '2024-06-22',
    description: 'Experience the magic of the City of Light with visits to iconic landmarks and charming cafés.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop',
    budget: 2500,
    status: 'planned',
    itinerary: [
      { id: 1, day: 1, title: 'Arrival at CDG Airport', description: 'Arrive and settle in hotel', completed: true },
      { id: 2, day: 1, title: 'Visit Eiffel Tower', description: 'Evening visit with sunset views', completed: true },
      { id: 3, day: 2, title: 'Louvre Museum Tour', description: 'Full day exploring art collections', completed: false },
      { id: 4, day: 2, title: 'Seine River Cruise', description: 'Evening cruise along the Seine', completed: false },
      { id: 5, day: 3, title: 'Notre-Dame & Latin Quarter', description: 'Explore historic neighborhoods', completed: false },
    ]
  },
  {
    id: 2,
    title: 'Tokyo Experience',
    destination: 'Tokyo, Japan',
    startDate: '2024-07-01',
    endDate: '2024-07-10',
    description: 'Immerse yourself in the vibrant culture of Tokyo with temples, gardens, and modern technology.',
    image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9a0?w=400&h=300&fit=crop',
    budget: 3000,
    status: 'planned',
    itinerary: [
      { id: 1, day: 1, title: 'Arrival at Narita Airport', description: 'Check-in and settle', completed: false },
      { id: 2, day: 1, title: 'Shibuya Crossing', description: 'Experience the famous crossing', completed: false },
      { id: 3, day: 2, title: 'Senso-ji Temple', description: 'Visit ancient Buddhist temple', completed: false },
      { id: 4, day: 3, title: 'Tsukiji Market', description: 'Fresh seafood and local delicacies', completed: false },
    ]
  },
  {
    id: 3,
    title: 'New York City Break',
    destination: 'New York, USA',
    startDate: '2024-08-05',
    endDate: '2024-08-12',
    description: 'The city that never sleeps awaits with Broadway shows, museums, and iconic skylines.',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop',
    budget: 2000,
    status: 'planning',
    itinerary: [
      { id: 1, day: 1, title: 'Statue of Liberty', description: 'Visit Lady Liberty', completed: false },
      { id: 2, day: 2, title: 'Times Square & Broadway', description: 'Catch a Broadway show', completed: false },
      { id: 3, day: 3, title: 'Metropolitan Museum', description: 'Explore world-class art', completed: false },
    ]
  },
  {
    id: 4,
    title: 'Bali Relaxation',
    destination: 'Bali, Indonesia',
    startDate: '2024-09-10',
    endDate: '2024-09-17',
    description: 'Relax on pristine beaches, explore ancient temples, and enjoy tropical paradise.',
    image: 'https://images.unsplash.com/photo-1537225228614-b4554ea8cfc9?w=400&h=300&fit=crop',
    budget: 1500,
    status: 'planning',
    itinerary: [
      { id: 1, day: 1, title: 'Beach Day', description: 'Relax on Seminyak Beach', completed: false },
      { id: 2, day: 2, title: 'Temple Visit', description: 'Explore Tanah Lot Temple', completed: false },
    ]
  },
];
