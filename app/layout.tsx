import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FacebookPixel } from '@/components/facebook-pixel'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: "--font-oswald"
});

export const metadata: Metadata = {
  title: 'Phoenix Iron Design | Custom Welding & Metal Fabrication in Arizona',
  description: 'Premier welding and fabrication services in Arizona. Custom metalwork, structural welding, gates, railings, and more. Licensed, bonded, and insured.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        <FacebookPixel />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
