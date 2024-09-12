import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Jo Murgel',
  description: 'A mixed-stack JavaScript developer.',
  openGraph: {
    title: 'About Jo Murgel',
    description: 'A mixed-stack JavaScript developer.',
  },
}

export default function AboutLayout( { children }: { children: React.ReactNode } ) {
  return <>{children}</>
}
