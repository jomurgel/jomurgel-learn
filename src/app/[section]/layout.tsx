'use client'

import { useEffect } from 'react'
import { useTheme } from '@/components/ThemeProvider'
import { usePathname } from 'next/navigation'

export default function SectionLayout( { children }: { children: React.ReactNode } ) {
  const { setTheme } = useTheme()
  const pathName = usePathname()

  useEffect( () => {
    setTheme( pathName.includes( '/photo' ) ? 'dark' : 'light' )

    // Cleanup function to reset the theme when leaving the route
    return () => setTheme( '' )
  }, [ pathName, setTheme ] )

  return <>{children}</>
}
