import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Axios Aviation Services | Time-Critical Air Cargo & Defense Logistics Since 1999",
  description: "Trusted aviation logistics partner with 25+ years expertise in aircraft chartering, defense-grade freight, cold chain logistics, and over-dimensional cargo. IATA & ISO compliant, serving aerospace, pharmaceutical & defense sectors globally.",
  keywords: [
    "aviation logistics",
    "air cargo",
    "aircraft chartering", 
    "defense logistics",
    "cold chain logistics",
    "over-dimensional cargo",
    "time-critical shipping",
    "aerospace freight",
    "pharmaceutical logistics",
    "IATA compliant",
    "ISO certified",
    "24/7 cargo services",
    "government logistics",
    "strategic cargo solutions"
  ].join(", "),
  authors: [{ name: "Axios Aviation Services Pvt. Ltd." }],
  creator: "Axios Aviation Services Pvt. Ltd.",
  publisher: "Axios Aviation Services Pvt. Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://axios-aviation.com'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Axios Aviation Services | Premier Air Cargo & Defense Logistics",
    description: "25+ years of expertise in time-critical aviation logistics. Specializing in aircraft chartering, defense freight, and cold chain solutions. IATA & ISO compliant operations worldwide.",
    url: 'https://axios-aviation.com', // Update with your actual domain
    siteName: 'Axios Aviation Services',
    images: [
      {
        url: '/og-image.jpg', // You'll need to add this image
        width: 1200,
        height: 630,
        alt: 'Axios Aviation Services - Time-Critical Air Cargo Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axios Aviation Services | Time-Critical Air Cargo Solutions',
    description: '25+ years expertise in aviation logistics, defense freight & cold chain solutions. IATA & ISO compliant operations worldwide.',
    images: ['/og-image.jpg'], // Same image as OpenGraph
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
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#20B2AA' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    // Add your verification codes when you have them
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#fff',
              color: '#374151',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              fontSize: '14px',
              padding: '12px 16px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            },
            success: {
              iconTheme: {
                primary: '#0d9488',
                secondary: '#fff',
              },
              style: {
                border: '1px solid #0d9488',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
              style: {
                border: '1px solid #ef4444',
              },
            },
            loading: {
              iconTheme: {
                primary: '#0d9488',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
