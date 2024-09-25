'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext( {
  theme: '',
  setTheme: ( theme: string ) => {},
} )

export const ThemeProvider = ( { children }: { children: React.ReactNode } ) => {
  const [ theme, setTheme ] = useState( '' )

  useEffect( () => {
    document.documentElement.setAttribute( 'data-theme', theme || '' )

    // Cleanup function to remove the attribute when the component unmounts
    return () => {
      document.documentElement.removeAttribute( 'data-theme' )
    }
  }, [theme] )

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext( ThemeContext )
