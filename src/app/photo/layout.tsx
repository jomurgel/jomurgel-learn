'use client'

import { useEffect } from 'react'
import { useTheme } from '@/components/ThemeProvider'

export default function PhotoLayout( { children }: { children: React.ReactNode } ) {
  const { setTheme } = useTheme()

  useEffect( () => {
    setTheme( 'dark' ) // Replace with your theme

    // Cleanup function to reset the theme when leaving the route
    return () => setTheme( '' )
  }, [setTheme] )

  return <>{children}</>
}
