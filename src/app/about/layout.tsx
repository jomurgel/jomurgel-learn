import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Jo Murgel',
  description: 'A Full-stack Web Developer.',
  openGraph: {
    title: 'About Jo Murgel',
    description: 'A Full-stack Web Developer.',
  },
}

export default function AboutLayout( { children }: { children: React.ReactNode } ) {
  return <>{children}</>
}
