import { headers } from 'next/headers'; 
import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AdsterraLayoutWrapper from '../components/layout/AdsterraLayoutWrapper'; 
import AdBanner from '../components/ads/AdBanner'; 

export const metadata = {
  title: 'Watch Movies Online Free | Stream TV Series HD - CineVora',
  description: 'Find where to watch movies & TV series online for free or on Netflix, Disney+, Prime Video. CineVora tracks 10,000+ movies, 5,000+ shows, box office results, actor info, and provides HD streaming guides across all genres (action, horror, romance, anime, drakor).',
  keywords: 'watch movies, stream TV series, movie database, where to watch, streaming guide, Netflix, Disney+, Prime Video, free movies online, HD streaming, actor profiles, box office results',
  openGraph: {
    title: 'Watch Movies Online Free | Stream TV Series HD - CineVora',
    description: 'Find where to watch movies & TV series online for free or on Netflix, Disney+, Prime Video. Get streaming guides, actor profiles, and genre recommendations.',
    url: 'https://cinevora.pages.dev',
    siteName: 'CineVora',
    images: [
      {
        url: 'https://live.staticflickr.com/65535/55296812359_eee20011a7_b.jpg',
        width: 1200,
        height: 630,
        alt: 'CineVora - Watch Movies Online Free and Stream TV Series',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@WatchStream123',
    creator: '@WatchStream123',
    title: 'Watch Movies Online Free | Stream TV Series HD - CineVora',
    description: 'Find where to watch movies & TV series online for free or on Netflix, Disney+, Prime Video. Streaming guides and recommendations.',
    images: ['https://live.staticflickr.com/65535/55296812359_eee20011a7_b.jpg'],
  },
  // Tambahkan tag meta eksplisit untuk Facebook
  other: {
    'fb:app_id': '100074345305108',
  },
};

export default async function RootLayout({ children }) {
  // Unwrapping headers secara async (Standar Next.js 15/16)
  const headersList = await headers();
  const countryCode = headersList.get('x-vercel-ip-country') || headersList.get('cf-ipcountry') || 'ID';

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="eTxFXDMvx8hMq6FhZjy7dM4MJScVKVtkRyNOZ__jplA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://cinevora.pages.dev" />
        
        {/* Structured Data untuk SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "CineVora",
              "url": "https://cinevora.pages.dev",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://cinevora.pages.dev/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "description": "Find where to watch movies & TV series online for free or on Netflix, Disney+, Prime Video.",
              "keywords": "watch movies, stream TV series, movie database, where to watch, streaming guide"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CineVora",
              "url": "https://cinevora.pages.dev",
              "logo": "https://live.staticflickr.com/65535/55296812359_eee20011a7_b.jpg",
              "description": "Streaming guide and movie database",
              "sameAs": [
                "https://twitter.com/WatchStream123",
                "https://facebook.com/CineVora"
              ]
            })
          }}
        />
      </head>
      <body>
        <AdsterraLayoutWrapper countryCode={countryCode}>
          <div className="flex flex-col min-h-screen bg-slate-900">
            <header className="w-full max-w-7xl mx-auto px-4 py-4 sticky top-0 z-50 bg-slate-900 shadow-lg">
              <Navbar />
            </header>
            
            <div className="w-full bg-slate-900 py-2">
              <div className="max-w-7xl mx-auto px-4 flex justify-center">
                <AdBanner 
                  adId="728x90_header"
                  scriptKey="300dbb7395a3d6136f067578356b3745"
                  height={90} 
                  width={728}
                  className="rounded-lg overflow-hidden shadow-lg"
                />
              </div>
            </div>
            
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-8 mt-2">
              {children}
            </main>
            
            <footer className="w-full max-w-7xl mx-auto px-4 py-8">
              <div id="container-2588685b0e7a2dbe0b2e89a73118d7bd"></div>
              <Footer />
            </footer>
          </div>
        </AdsterraLayoutWrapper>
      </body>
    </html>
  );
}