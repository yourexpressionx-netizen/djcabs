'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  { src: '/images/20251021_125837.jpg', alt: 'Gallery photo 1', title: 'Darjeeling Gallery' },
  { src: '/images/20251021_130115.jpg', alt: 'Gallery photo 2', title: 'Mountain Views' },
  { src: '/images/20251021_130120.jpg', alt: 'Gallery photo 3', title: 'Local Life' },
  { src: '/images/20251021_130316.jpg', alt: 'Gallery photo 4', title: 'Scenic Landscape' },
  { src: '/images/20251021_130356.jpg', alt: 'Gallery photo 5', title: 'Darjeeling Beauty' },
  { src: '/images/20251026_142952.jpg', alt: 'Gallery photo 6', title: 'Tour Moments' },
  { src: '/images/IMG-20231002-WA0106.jpg', alt: 'Gallery photo 7', title: 'Travel Memories' },
  { src: '/images/IMG-20231002-WA0109.jpg', alt: 'Gallery photo 8', title: 'Adventure' },
  { src: '/images/IMG-20231002-WA0115.jpg', alt: 'Gallery photo 9', title: 'Nature' },
  { src: '/images/IMG-20231002-WA0116.jpg', alt: 'Gallery photo 10', title: 'Experience' },
  { src: '/images/IMG-20231002-WA0123.jpg', alt: 'Gallery photo 11', title: 'Journey' },
  { src: '/images/IMG-20231002-WA0133.jpg', alt: 'Gallery photo 12', title: 'Exploration' },
  { src: '/images/IMG-20231002-WA0134.jpg', alt: 'Gallery photo 13', title: 'Discovery' },
  { src: '/images/IMG-20231125-WA0080.jpg', alt: 'Gallery photo 14', title: 'Service' },
  { src: '/images/IMG-20231125-WA0082.jpg', alt: 'Gallery photo 15', title: 'Comfort' },
  { src: '/images/IMG-20231125-WA0083.jpg', alt: 'Gallery photo 16', title: 'Quality' },
  { src: '/images/IMG-20231125-WA0085.jpg', alt: 'Gallery photo 17', title: 'Professional' },
  { src: '/images/IMG-20231125-WA0087.jpg', alt: 'Gallery photo 18', title: 'Trust' },
  { src: '/images/IMG-20231125-WA0088.jpg', alt: 'Gallery photo 19', title: 'Reliable' },
  { src: '/images/IMG-20231125-WA0090.jpg', alt: 'Gallery photo 20', title: 'Safe' },
  { src: '/images/IMG-20231125-WA0091.jpg', alt: 'Gallery photo 21', title: 'Journey Start' },
  { src: '/images/IMG-20231125-WA0092.jpg', alt: 'Gallery photo 22', title: 'Happy Travelers' },
  { src: '/images/IMG-20231125-WA0093.jpg', alt: 'Gallery photo 23', title: 'Customer Care' },
  { src: '/images/IMG-20231125-WA0097.jpg', alt: 'Gallery photo 24', title: 'Service Excellence' },
  { src: '/images/IMG-20231125-WA0107.jpg', alt: 'Gallery photo 25', title: 'Darjeeling Tours' },
  { src: '/images/IMG-20240326-WA0062.jpg', alt: 'Gallery photo 26', title: 'Travel Guide' },
  { src: '/images/IMG-20240326-WA0064.jpg', alt: 'Gallery photo 27', title: 'Local Expert' },
  { src: '/images/IMG-20240326-WA0066.jpg', alt: 'Gallery photo 28', title: 'Premium Service' },
  { src: '/images/IMG-20240326-WA0074.jpg', alt: 'Gallery photo 29', title: 'Happy Customers' },
  { src: '/images/IMG-20240326-WA0076.jpg', alt: 'Gallery photo 30', title: 'Best Experience' },
];

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const next = () => {
    setCurrent((current + 1) % photos.length);
  };

  const prev = () => {
    setCurrent((current - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <section className="w-full bg-black">
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden group">
        {/* Images */}
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              priority={index === current}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />
            {/* Title overlay */}
            <div className="absolute inset-0 flex items-end justify-center pb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center px-4 drop-shadow-lg">
                {photo.title}
              </h3>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={() => {
            prev();
            setAutoPlay(false);
          }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 md:p-3 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-black" />
        </button>

        <button
          onClick={() => {
            next();
            setAutoPlay(false);
          }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 md:p-3 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Next photo"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-black" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 flex-wrap justify-center">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index);
                setAutoPlay(false);
              }}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                index === current ? 'bg-yellow-400 w-6 md:w-8' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <button
          onClick={() => setAutoPlay(!autoPlay)}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/75 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm transition-all"
        >
          {autoPlay ? 'Playing' : 'Paused'}
        </button>
      </div>
    </section>
  );
}
