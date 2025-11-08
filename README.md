# DarjeelingCabs Website

A static Next.js website for DarjeelingCabs, a professional taxi service operating in Darjeeling, Sikkim, Bhutan, and Nepal. Built with Next.js, Tailwind CSS, and Framer Motion for a modern, responsive user experience.

## Features

- 🚗 Online cab booking system
- 📱 Responsive design optimized for all devices
- 🎥 Background video hero section (with mobile fallback)
- 📍 Destination guides and tour packages
- 📸 Instagram feed integration
- 💬 WhatsApp integration for instant booking
- 📈 SEO optimized with JSON-LD schema
- ⚡ Performance optimized with Next.js Image and static export
- 🎨 Modern UI with Tailwind CSS and Framer Motion animations

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: SendGrid email integration
- **SEO**: Static meta tags, JSON-LD, sitemap.xml
- **Deployment**: Static export on Vercel

## Prerequisites

- Node.js 18+ and npm
- SendGrid account for email handling
- Google Maps API key (optional, for location autocomplete)
- Instagram Basic Display API token (optional, for feed)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/darjeelingcabs.git
   cd darjeelingcabs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file with required environment variables:
   ```env
   SENDGRID_API_KEY=your_sendgrid_api_key
   FROM_EMAIL=your_verified_sender_email
   TO_EMAIL=your_booking_notifications_email
   GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   INSTAGRAM_TOKEN=your_instagram_token
   ```

4. Add your media assets:
   - Place images in `public/images/`
   - Add hero video at `public/videos/hero-loop.mp4`
   - Add your logo as `public/images/logo.png`

5. Start the development server:
   ```bash
   npm run dev
   ```

Visit http://localhost:3000 to see your site.

## Build and Deploy

1. Build for production:
   ```bash
   npm run build
   ```

2. Test the production build:
   ```bash
   npm start
   ```

### Deployment on Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel project settings
4. Deploy! Vercel will automatically build and serve your static site

## Project Structure

```
darjeelingcabs/
├─ public/             # Static assets
│  ├─ images/         # Image assets
│  ├─ videos/         # Video assets
│  ├─ robots.txt
│  └─ sitemap.xml
├─ src/
│  ├─ app/           # Next.js app router pages
│  ├─ components/    # React components
│  └─ lib/           # Utility functions
├─ .env.local        # Environment variables
└─ next.config.js    # Next.js configuration
```

## Before Production

1. Replace placeholder images with actual site photos
2. Update WhatsApp number in layout.tsx
3. Add real business contact information
4. Replace example reviews with real testimonials
5. Configure Instagram feed with your account
6. Test all forms and integrations
7. Run Lighthouse audit and optimize if needed

## Contributing

Contributions welcome! Please feel free to submit a Pull Request.

## License

[Your chosen license]

## Contact

Your contact information
