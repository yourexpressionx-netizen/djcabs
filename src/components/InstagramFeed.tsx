'use client';

interface InstagramFeedProps {
  username: string;
  widgetId?: string;
}

export default function InstagramFeed({ username, widgetId = 'default' }: InstagramFeedProps) {
  return (
    <div className="instagram-feed my-8">
      <h2 className="text-2xl font-bold text-center mb-6">Follow Us on Instagram</h2>
      
      {/* SnapWidget Embed Fallback */}
      <div className="snapwidget-container relative aspect-square max-w-4xl mx-auto">
        <iframe 
          src={`https://snapwidget.com/embed/${widgetId}`}
          className="snapwidget-widget w-full h-full"
          allowTransparency={true}
          frameBorder="0"
          scrolling="no"
          style={{border: 'none', overflow: 'hidden'}}
        ></iframe>
      </div>
      
      <div className="text-center mt-4">
        <a 
          href={`https://www.instagram.com/${username}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          @{username}
        </a>
      </div>
    </div>
  );
}