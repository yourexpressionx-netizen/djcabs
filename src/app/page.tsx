import { Metadata } from 'next';
import Image from 'next/image';
import BookingForm from '@/components/BookingForm';
import InstagramFeed from '@/components/InstagramFeed';

export const metadata: Metadata = {
  title: 'Darjeeling Cabs — Private Cabs & Tours in Darjeeling | Airport Transfers & Sightseeing',
  description: 'Book professional, insured cabs in Darjeeling, Sikkim, Bhutan & Nepal. Airport pickups, sightseeing, corporate bookings & film production transport. Get a quote in minutes.',
  openGraph: {
    title: 'DarjeelingCabs — Private Cabs & Tours in Darjeeling',
    description: 'Professional cab services in Darjeeling, Sikkim, Bhutan & Nepal',
    images: ['/images/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Video Background - Fallback to Image on Mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-poster.jpg"
            className="object-cover w-full h-full hidden md:block"
          >
            <source src="/videos/hero-loop.mp4" type="video/mp4" />
          </video>
          <div className="block md:hidden">
            <Image
              src="/images/hero-mobile.jpg"
              alt="Darjeeling mountains and taxi"
              fill
              priority
              className="object-cover"
            />
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Darjeeling Cabs
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Safe, Local & Professional Cabs for Darjeeling, Sikkim, Bhutan & Nepal
          </p>
          <div className="flex gap-4">
            <a
              href="#booking"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Get a Quote
            </a>
            <a
              href="tel:+917407616130"
              className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Quick Booking Strip */}
      <section id="booking" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Book Your Ride</h2>
          <BookingForm />
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <InstagramFeed username="darjeelingcabs" />
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            "name": "DarjeelingCabs",
            "url": "https://darjeelingcabs.com",
            "logo": "https://darjeelingcabs.com/images/logo.png",
            "description": "Private cabs, sightseeing tours, airport transfers and corporate transport across Darjeeling, Sikkim, Bhutan and Nepal.",
            "telephone": "+917407616130",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Siliguri / Darjeeling base",
              "addressLocality": "Siliguri",
              "addressRegion": "West Bengal",
              "postalCode": "734001",
              "addressCountry": "IN"
            },
            "areaServed": ["Darjeeling","Siliguri","Sikkim","Bhutan","Nepal"],
            "openingHours": "Mo-Su 00:00-23:59"
          })
        }}
      />
    </main>
  );
}