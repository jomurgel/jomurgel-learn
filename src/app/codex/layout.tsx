import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Jo Murgel Codex',
  description: 'A list of follows, faves, and other information.',
  openGraph: {
    title: 'About Jo Murgel',
    description: 'A list of follows, faves, and other information.',
  },
}

export default function AboutLayout( { children }: { children: React.ReactNode } ) {
  return <>{children}</>
}
