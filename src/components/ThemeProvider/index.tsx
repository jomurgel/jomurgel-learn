'use client'

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface ThemeContextType {
  theme: string;
  setTheme: ( theme: string ) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>( undefined )

/**
 * ThemeProvider component that manages the application's theme state.
 */
export const ThemeProvider: React.FC<{ children: ReactNode }> = ( { children } ) => {
  const [ theme, setTheme ] = useState<string>( () => {
    // Initialize from document attribute to prevent flash
    if ( typeof window !== 'undefined' ) {
      return document.documentElement.getAttribute( 'data-theme' ) || 'light'
    }
    return 'light'
  } )

  useEffect( () => {
    document.documentElement.setAttribute( 'data-theme', theme )
  }, [theme] )

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

/**
 * Custom hook to use the ThemeContext.
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext( ThemeContext )
  if ( context === undefined ) {
    throw new Error( 'useTheme must be used within a ThemeProvider' )
  }
  return context
}
