import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '../scss/style.scss'

/**
 * Default/homepage meta.
 */
export const metadata: Metadata = {
  metadataBase: new URL( 'https://jomurgel.com' ),
  title: 'Jo Murgel',
  description: 'Full-stack Developer',
  openGraph: {
    title: 'Jo Murgel',
    description: 'Full-stack Developer',
    images: [
      '/cover.jpg',
    ],
  },
}

export default function RootLayout( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html lang="en">
      <body>
        <Header />
        <GoogleAnalytics gaId="G-JZ9V7XMT1E" />
        {children}
        <Footer />
      </body>
    </html>
  )
}
