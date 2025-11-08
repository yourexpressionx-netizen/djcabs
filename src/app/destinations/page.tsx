import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Destinations | DarjeelingCabs — Tourist Places & Taxi Services',
  description: 'Explore popular destinations like Darjeeling, Sikkim, Kalimpong, and more. Book comfortable cabs for sightseeing and tours.',
};

// This would typically come from a CMS or API
const destinations = [
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    image: '/images/darjeeling.jpg',
    description: 'Famous for tea gardens, toy train, and stunning Himalayan views',
    startingPrice: 2500
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    image: '/images/sikkim.jpg',
    description: 'Beautiful monasteries, mountain lakes, and adventure activities',
    startingPrice: 3500
  },
  {
    id: 'kalimpong',
    name: 'Kalimpong',
    image: '/images/kalimpong.jpg',
    description: 'Scenic hill station known for its nurseries and colonial architecture',
    startingPrice: 2800
  },
  // Add more destinations
];

export default function Destinations() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Popular Destinations</h1>
            <p className="text-lg text-gray-600">
              Explore the most beautiful places in Darjeeling, Sikkim, and beyond with our comfortable cab services
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Link
                href={`/destinations/${destination.id}`}
                key={destination.id}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-xl">
                  <div className="relative h-64">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{destination.name}</h2>
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">
                        Starting from ₹{destination.startingPrice}
                      </span>
                      <span className="text-blue-600 font-medium">Learn More →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your cab now and explore these amazing destinations
          </p>
          <Link
            href="/booking"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
}