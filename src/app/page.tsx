import { Metadata } from 'next';
import Image from 'next/image';
import BookingForm from '@/components/BookingForm';
import InstagramFeed from '@/components/InstagramFeed';

export const metadata: Metadata = {
  title: 'Best Cab Service in Darjeeling & Sikkim | Airport Transfers & Local Tours | DarjeelingCabs',
  description: 'Top-rated cab service in Darjeeling. ✓ Airport pickup/drop ✓ Sightseeing tours ✓ 24/7 service ✓ Safe, insured vehicles ✓ Local drivers. Book Bagdogra to Darjeeling, Gangtok, Kalimpong & Sikkim tours.',
  keywords: 'darjeeling taxi, darjeeling cab service, bagdogra airport taxi, sikkim tour taxi, darjeeling sightseeing cab, gangtok taxi service, kalimpong taxi, northeast india tours',
  openGraph: {
    title: 'Best Cab Service in Darjeeling & Sikkim | DarjeelingCabs',
    description: 'Top-rated taxi service for Darjeeling, Sikkim & Northeast India. Airport transfers, sightseeing tours, and intercity travel with professional drivers.',
    images: ['/images/og-image.jpg'],
    type: 'website',
    locale: 'en_IN',
    siteName: 'DarjeelingCabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Cab Service in Darjeeling & Sikkim | DarjeelingCabs',
    description: 'Top-rated taxi service for Darjeeling, Sikkim & Northeast India. Book your ride now!',
  },
  alternates: {
    canonical: 'https://darjeelingcabs.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen" aria-label="Book your cab in Darjeeling and Sikkim">
        {/* Video Background - Fallback to Image on Mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/hero-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover scale-105 hidden md:block"
          >
            {/* Prefer WebM for better compression, but provide MP4 fallback for wider codec support */}
            <source src="/videos/hero-loop.webm" type="video/webm" />
            <source src="/videos/hero-loop.mp4" type="video/mp4" />
            Your browser does not support the video tag. You can
            <a href="/videos/hero-loop.webm" className="underline ml-1">open the WebM directly</a>
            {" "}or
            <a href="/videos/hero-loop.mp4" className="underline ml-1">open the MP4 directly</a>.
          </video>
          <div className="block md:hidden relative w-full h-full">
            <Image
              src="/images/hero-mobile.jpg"
              alt="Darjeeling mountains and taxi"
              fill
              priority
              className="object-cover"
            />
          </div>
          {/* Gradient Overlay for better video visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30"></div>
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
      <section id="booking" className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <BookingForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16" id="faq">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <details className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
              <summary className="font-semibold text-lg cursor-pointer text-gray-900 hover:text-blue-600">How do I book a cab from Bagdogra Airport to Darjeeling?</summary>
              <p className="mt-2 text-gray-700">You can easily book a cab using our online booking form. Simply enter your details, select your preferred vehicle, and we'll confirm your booking instantly via WhatsApp or email.</p>
            </details>
            <details className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
              <summary className="font-semibold text-lg cursor-pointer text-gray-900 hover:text-blue-600">What are your cab rates from Bagdogra to Darjeeling?</summary>
              <p className="mt-2 text-gray-700">Our rates start from ₹2500 for sedans. The final price depends on the vehicle type, number of passengers, and any additional requirements.</p>
            </details>
            <details className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
              <summary className="font-semibold text-lg cursor-pointer text-gray-900 hover:text-blue-600">Do you provide Sikkim tour packages?</summary>
              <p className="mt-2 text-gray-700">Yes, we offer comprehensive Sikkim tour packages including Gangtok, Pelling, and Lachung. Contact us for customized itineraries.</p>
            </details>
            <details className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
              <summary className="font-semibold text-lg cursor-pointer text-gray-900 hover:text-blue-600">Are your drivers familiar with local routes?</summary>
              <p className="mt-2 text-gray-700">All our drivers are local experts with years of experience in the Darjeeling-Sikkim region and hold valid commercial licenses.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Popular Tours Section */}
      <section className="bg-gray-50 py-16" id="popular-tours">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Popular Tour Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="/images/darjeeling-local.jpg" alt="Darjeeling Local Sightseeing" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Darjeeling Local Tour</h3>
                <p className="text-gray-700 mb-4">Tiger Hill, Batasia Loop, Peace Pagoda & more</p>
                <p className="text-blue-600 font-semibold">From ₹2,000</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="/images/sikkim-tour.jpg" alt="Sikkim Tour Package" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sikkim Explorer</h3>
                <p className="text-gray-700 mb-4">Gangtok, Lachung, Yumthang Valley</p>
                <p className="text-blue-600 font-semibold">From ₹15,000</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="/images/bhutan-trip.jpg" alt="Bhutan Trip" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bhutan Adventure</h3>
                <p className="text-gray-700 mb-4">Thimphu, Paro, Tiger's Nest</p>
                <p className="text-blue-600 font-semibold">From ₹25,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <img src="/images/airport-transfer.jpeg" alt="Airport Transfer" className="w-16 h-16 mx-auto mb-4 rounded-full" />
              <h3 className="font-bold text-gray-900 mb-2">Airport Transfers</h3>
              <p className="text-gray-700">Reliable pickup & drop from Bagdogra Airport</p>
            </div>
            <div className="text-center p-6">
              <img src="/images/wedding.jpg" alt="Wedding Cars" className="w-16 h-16 mx-auto mb-4 rounded-full" />
              <h3 className="font-bold text-gray-900 mb-2">Wedding Cars</h3>
              <p className="text-gray-700">Luxury vehicles for your special day</p>
            </div>
            <div className="text-center p-6">
              <img src="/images/corporate.jpg" alt="Corporate Travel" className="w-16 h-16 mx-auto mb-4 rounded-full" />
              <h3 className="font-bold text-gray-900 mb-2">Corporate Travel</h3>
              <p className="text-gray-700">Business travel solutions</p>
            </div>
            <div className="text-center p-6">
              <img src="/images/darjeeling-local.jpg" alt="Local Sightseeing" className="w-16 h-16 mx-auto mb-4 rounded-full" />
              <h3 className="font-bold text-gray-900 mb-2">Local Sightseeing</h3>
              <p className="text-gray-700">Guided tours with experienced drivers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <InstagramFeed />
        </div>
      </section>

      {/* JSON-LD Schema */}
            {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Darjeeling Cabs',
              image: 'https://darjeelingcabs.com/logo.png',
              telephone: '+917407616130',
              email: 'darjeelingcabs.com@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Mall Road',
                addressLocality: 'Darjeeling',
                addressRegion: 'West Bengal',
                postalCode: '734101',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 27.0410,
                longitude: 88.2663,
              },
              url: 'https://darjeelingcabs.com',
              sameAs: [
                'https://www.facebook.com/darjeelingcabs',
                'https://www.instagram.com/darjeelingcabs',
              ],
              areaServed: [
                'Darjeeling',
                'Sikkim',
                'Kalimpong',
                'Kurseong',
                'Bagdogra',
                'Siliguri'
              ],
              priceRange: '₹₹',
              openingHours: 'Mo-Su 00:00-23:59',
              paymentAccepted: ['Cash', 'Credit Card', 'UPI'],
              serviceType: [
                'Airport Transfers',
                'Local Sightseeing',
                'Corporate Travel',
                'Wedding Cars',
                'Tour Packages'
              ]
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How do I book a cab from Bagdogra Airport to Darjeeling?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You can easily book a cab using our online booking form. Simply enter your details, select your preferred vehicle, and we\'ll confirm your booking instantly via WhatsApp or email.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What are your cab rates from Bagdogra to Darjeeling?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Our rates start from ₹2500 for sedans. The final price depends on the vehicle type, number of passengers, and any additional requirements.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Do you provide Sikkim tour packages?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, we offer comprehensive Sikkim tour packages including Gangtok, Pelling, and Lachung. Contact us for customized itineraries.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Are your drivers familiar with local routes?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'All our drivers are local experts with years of experience in the Darjeeling-Sikkim region and hold valid commercial licenses.'
                  }
                }
              ]
            },
            {
              '@context': 'https://schema.org',
              '@type': 'TourOperator',
              name: 'Darjeeling Cabs Tours',
              description: 'Professional tour operator offering packages in Darjeeling, Sikkim, and Bhutan',
              makesOffer: [
                {
                  '@type': 'Offer',
                  name: 'Darjeeling Local Tour',
                  description: 'Tiger Hill, Batasia Loop, Peace Pagoda & more',
                  price: '2000',
                  priceCurrency: 'INR',
                  availability: 'https://schema.org/InStock'
                },
                {
                  '@type': 'Offer',
                  name: 'Sikkim Explorer',
                  description: 'Gangtok, Lachung, Yumthang Valley',
                  price: '15000',
                  priceCurrency: 'INR',
                  availability: 'https://schema.org/InStock'
                },
                {
                  '@type': 'Offer',
                  name: 'Bhutan Adventure',
                  description: 'Thimphu, Paro, Tigers Nest',
                  price: '25000',
                  priceCurrency: 'INR',
                  availability: 'https://schema.org/InStock'
                }
              ]
            }
          ]),
        }}
      />
    </main>
  );
}