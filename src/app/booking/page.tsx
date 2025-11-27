import { Metadata } from 'next';
import BookingForm from '@/components/BookingForm';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Book a Cab | DarjeelingCabs',
  description: 'Book your cab for Darjeeling, Sikkim, Bhutan & Nepal. Easy online booking for airport transfers, sightseeing tours, and more.',
};

export default function Booking() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Ride</h1>
            <p className="text-xl opacity-90">
              Easy online booking for all your transportation needs in Darjeeling and beyond
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-800">
                Round-the-clock assistance for all your travel needs
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Experienced Drivers</h3>
              <p className="text-gray-800">
                Professional drivers with extensive local knowledge
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Fixed Pricing</h3>
              <p className="text-gray-800">
                Transparent rates with no hidden charges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/testimonial-1.jpg"
                    alt="Rohit K."
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Rohit K.</h4>
                  <p className="text-gray-500">Kolkata</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Booked Choden Da for a full-day Darjeeling tour — punctual, friendly and
                the Innova was spotless. Highly recommend!"
              </p>
            </div>
            {/* Add more review cards as needed */}
          </div>
        </div>
      </section>
    </main>
  );
}