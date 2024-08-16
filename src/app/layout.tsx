import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '../scss/style.scss'

/**
 * Default/homepage meta.
 */
export const metadata: Metadata = {
  title: 'Jo Murgel',
  description: 'Mixed-stack JavaScript Developer',
  openGraph: {
    title: 'Jo Murgel',
    description: 'Mixed-stack JavaScript Developer',
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
        {children}
        <Footer />
      </body>
    </html>
  )
}
