import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'B2B & Corporate Services | Darjeeling Cabs',
  description: 'Professional transport solutions for businesses in Darjeeling, Sikkim & surrounding areas. Corporate accounts, bulk bookings, and event logistics.',
};

export default function B2B() {
  const services = [
    {
      title: 'Corporate Travel',
      description: 'Reliable transportation for your employees with flexible billing options',
      features: [
        'Airport transfers',
        'Inter-city travel',
        'Project site visits',
        'Employee shuttle services'
      ]
    },
    {
      title: 'Event Management',
      description: 'Complete fleet management for corporate events and conferences',
      features: [
        'Conference logistics',
        'Guest transportation',
        'Multiple vehicle coordination',
        'Professional chauffeurs'
      ]
    },
    {
      title: 'Long-term Contracts',
      description: 'Dedicated vehicles and drivers for your organization',
      features: [
        'Monthly contracts',
        'Dedicated vehicles',
        'Backup vehicle provision',
        'Regular maintenance'
      ]
    },
    {
      title: 'Business Benefits',
      description: 'Special advantages for our corporate clients',
      features: [
        'GST billing',
        'Credit facility',
        'Priority booking',
        'Corporate rates'
      ]
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">B2B & Corporate Services</h1>
            <p className="text-xl opacity-90 mb-8">
              Professional transport solutions tailored for businesses
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/booking"
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Get Corporate Quote
              </Link>
              <a
                href="tel:+917407616130"
                className="bg-white text-slate-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Call Sales Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
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
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H10m9-7a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance for your transport needs</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Safety First</h3>
              <p className="text-gray-600">Well-maintained vehicles and professional drivers</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">Clear billing with GST compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our B2B team to discuss your transportation requirements and get a customized solution
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/booking?type=corporate"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Request Callback
            </Link>
            <a
              href="mailto:info@darjeelingcabs.com"
              className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}