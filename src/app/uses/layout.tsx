import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Setup',
  description: 'My tech, office, and productivity setup.',
  openGraph: {
    title: 'My Setup',
    description: 'My tech, office, and productivity setup.',
  },
  // @todo: remove when this goes live.
  robots: {
    follow: false,
    index: false,
    nocache: false,
  },
}

export default function SetupLayout( { children }: { children: React.ReactNode } ) {
  return <>{children}</>
}
