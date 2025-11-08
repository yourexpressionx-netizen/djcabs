import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | DarjeelingCabs — Professional Taxi Service',
  description: 'Learn about our experienced team of drivers and our commitment to safety and comfort in Darjeeling and beyond.',
};

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-lg text-gray-600 mb-8">
              Founded by Mr. Dawa Lama with over 20 years of experience in Darjeeling transport,
              DarjeelingCabs has been serving tourists and locals since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Meet Our Founder</h2>
                <p className="text-gray-600 mb-6">
                  Mr. Dawa Lama started DarjeelingCabs with a vision to provide tourists 
                  with a friendly, local experience while maintaining the highest standards 
                  of professionalism and safety.
                </p>
                <p className="text-gray-600">
                  His extensive knowledge of the region and commitment to customer service 
                  has made DarjeelingCabs a trusted name in local transportation.
                </p>
              </div>
              <div className="relative h-[400px]">
                {/* Replace with actual founder image */}
                <Image
                  src="/images/founder.jpg"
                  alt="Mr. Dawa Lama - Founder of DarjeelingCabs"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Drivers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Professional Drivers</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Driver cards - replace images and names as needed */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image
                    src={`/images/driver-${i}.jpg`}
                    alt={`DarjeelingCabs Driver ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Professional Driver</h3>
                  <p className="text-gray-600">
                    Experienced in mountain driving with proper licensing and safety training.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Commitment to Safety</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Background Checks</h3>
                <p className="text-gray-600">All our drivers undergo thorough background verification</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Vehicle Maintenance</h3>
                <p className="text-gray-600">Regular servicing and safety inspections</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Insurance Coverage</h3>
                <p className="text-gray-600">Comprehensive insurance for all trips</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}