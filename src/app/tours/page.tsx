import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Tours & Services | Darjeeling Cabs',
  description: 'Explore our range of tours and cab services in Darjeeling, Sikkim, Bhutan & Nepal. Airport transfers, sightseeing packages, and customized tours.',
};

const tours = [
  {
    id: 'airport-transfers',
    title: 'Airport Transfers',
    description: 'Comfortable and reliable pickup/drop service from Bagdogra Airport and NJP Railway Station',
    image: '/images/airport-transfer.jpg',
    features: [
      'Fixed rates',
      'Flight monitoring',
      'Meet & greet service',
      'Free waiting time',
    ],
    priceFrom: 2000,
  },
  {
    id: 'darjeeling-local',
    title: 'Darjeeling Local Sightseeing',
    description: 'Explore the queen of hills with our curated sightseeing packages',
    image: '/images/darjeeling-local.jpg',
    features: [
      'Tiger Hill sunrise',
      'Ghoom Monastery',
      'Tea gardens',
      'Toy train ride',
    ],
    priceFrom: 2500,
  },
  {
    id: 'sikkim-tour',
    title: 'Sikkim Tour Packages',
    description: 'Multi-day tours covering the best of Sikkim',
    image: '/images/sikkim-tour.jpg',
    features: [
      'Gangtok city tour',
      'Nathula Pass visit',
      'Lake Tsomgo',
      'Monastery visits',
    ],
    priceFrom: 3500,
  },
  {
    id: 'bhutan-trips',
    title: 'Bhutan Trips',
    description: 'Experience the Land of Thunder Dragon with our expert drivers',
    image: '/images/bhutan-trip.jpg',
    features: [
      'Paro & Thimphu tours',
      'Tiger\'s Nest trek',
      'Cultural experiences',
      'Visa assistance',
    ],
    priceFrom: 5000,
  },
  {
    id: 'corporate',
    title: 'Corporate Services',
    description: 'Professional transport solutions for businesses',
    image: '/images/corporate.jpg',
    features: [
      'Employee transport',
      'Event logistics',
      'Monthly contracts',
      'GST billing',
    ],
    priceFrom: 4000,
  },
  {
    id: 'wedding',
    title: 'Wedding & Events',
    description: 'Complete fleet management for your special occasions',
    image: '/images/wedding.jpg',
    features: [
      'Luxury vehicles',
      'Guest transportation',
      'Decorated cars',
      'Professional chauffeurs',
    ],
    priceFrom: 4500,
  },
];

export default function Tours() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Tours & Services</h1>
            <p className="text-xl opacity-90">
              Professional cab services tailored to your travel needs
            </p>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{tour.title}</h3>
                  <p className="text-gray-800 mb-4">{tour.description}</p>
                  <ul className="space-y-2 mb-4">
                    {tour.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 font-semibold">
                      From ₹{tour.priceFrom}
                    </span>
                    <Link
                      href="/booking"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Tour Package?</h2>
          <p className="text-xl text-gray-800 font-medium mb-8 max-w-2xl mx-auto">
            Contact us to create a personalized itinerary that matches your preferences and budget
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/booking"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Get a Quote
            </Link>
            <a
              href="tel:+917407616130"
              className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}