import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// This would typically come from a CMS or database
const destinations = {
  darjeeling: {
    name: 'Darjeeling',
    title: 'Darjeeling Taxi Services | Private Cabs, Sightseeing & Airport Pickup',
    description: 'Book comfortable cabs for Darjeeling sightseeing, Tiger Hill sunrise, tea garden tours, and more. Professional drivers with local expertise.',
    coverImage: '/images/darjeeling-cover.jpg',
    highlights: [
      'Tiger Hill Sunrise',
      'Tea Gardens',
      'Ghoom Monastery',
      'Batasia Loop',
      'Happy Valley Tea Estate',
      'Japanese Peace Pagoda'
    ],
    itineraries: [
      {
        days: 1,
        title: 'Darjeeling Day Tour',
        description: 'Perfect for quick visits covering major attractions',
        activities: [
          'Early morning Tiger Hill sunrise',
          'Visit Ghoom Monastery',
          'Tea garden tour',
          'Mall Road exploration',
          'Evening at Peace Pagoda'
        ],
        price: 2500
      },
      {
        days: 2,
        title: 'Complete Darjeeling Experience',
        description: 'Comprehensive tour of Darjeeling and surroundings',
        activities: [
          'Day 1: Tiger Hill, monasteries, and tea gardens',
          'Day 2: Mirik Lake, local markets, and cultural sites'
        ],
        price: 4500
      }
    ],
    travelTips: [
      'Best visited from March to May or October to December',
      'Early booking recommended during peak season',
      'Carry warm clothes as evenings can be cold',
      'Start early for Tiger Hill sunrise view'
    ]
  },
  // Add more destinations
};

export async function generateStaticParams() {
  return Object.keys(destinations).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const destination = destinations[params.slug as keyof typeof destinations];
  
  if (!destination) {
    return {
      title: 'Destination Not Found',
      description: 'The requested destination could not be found.'
    };
  }

  return {
    title: destination.title,
    description: destination.description
  };
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const destination = destinations[params.slug as keyof typeof destinations];

  if (!destination) {
    return (
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4">Destination Not Found</h1>
          <p className="text-gray-600 mb-8">
            The destination you're looking for could not be found.
          </p>
          <Link
            href="/destinations"
            className="text-blue-600 hover:underline"
          >
            View All Destinations
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src={destination.coverImage}
          alt={`${destination.name} landscape`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {destination.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {destination.highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg"
              >
                <p className="text-lg font-medium">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itineraries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Sample Itineraries</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {destination.itineraries.map((itinerary, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold mb-4">{itinerary.title}</h3>
                <p className="text-gray-600 mb-4">{itinerary.description}</p>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  {itinerary.activities.map((activity, i) => (
                    <li key={i}>{activity}</li>
                  ))}
                </ul>
                <p className="text-lg font-medium">
                  Starting from ₹{itinerary.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Travel Tips</h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <ul className="space-y-4">
              {destination.travelTips.map((tip, index) => (
                <li
                  key={index}
                  className="flex items-start"
                >
                  <span className="mr-2">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Visit {destination.name}?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your cab now and start your adventure
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