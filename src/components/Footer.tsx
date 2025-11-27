'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:+917407616130"
                  className="hover:text-blue-400 transition-colors"
                >
                  +91 7407616130
                </a>
              </li>
              <li>
                <a 
                  href="mailto:darjeelingcabs.com@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  darjeelingcabs.com@gmail.com
                </a>
              </li>
              <li>Siliguri / Darjeeling Base</li>
              <li>West Bengal, India</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/destinations" className="hover:text-blue-400 transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="/tours" className="hover:text-blue-400 transition-colors">
                  Tours
                </a>
              </li>
              <li>
                <a href="/booking" className="hover:text-blue-400 transition-colors">
                  Book Now
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>Airport Transfers</li>
              <li>Local Sightseeing</li>
              <li>Multi-Day Tours</li>
              <li>Corporate Travel</li>
              <li>Wedding Transport</li>
              <li>Package Tours</li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Sunday</li>
              <li>24/7 Service Available</li>
              <li className="mt-4 text-sm">
                Advance booking recommended
              </li>
            </ul>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mb-8 rounded-lg overflow-hidden h-[300px] border-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56517.42701235554!2d88.39438570229876!3d26.706678876720267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44113c2257b9b%3A0x7c0d7d14dd024a19!2sSiliguri%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1699426841447!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DarjeelingCabs Location"
          />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-700 font-medium">
          <p>© {new Date().getFullYear()} DarjeelingCabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}