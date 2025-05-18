'use client'

import { useEffect, useState } from 'react'
import Links from '@/components/Links'

const Nav: React.FC = () => {
  const [ isOpen, setIsOpen ] = useState<boolean>( false )

  useEffect( () => {
    const handleKeyDown = ( event: KeyboardEvent ): void => {
      if ( event.key === 'Escape' ) {
        setIsOpen( false )
      }
    }

    document.addEventListener( 'keydown', handleKeyDown )

    return () => {
      document.removeEventListener( 'keydown', handleKeyDown )
    }
  }, [] )

  return (
    <>
      <button
        aria-expanded={isOpen}
        data-variant="dark"
        className="site-nav-toggle"
        onClick={() => setIsOpen( ( prev ) => !prev )}
      >
        Start Here
      </button>
      <nav data-style="plain" className={`site-nav ${isOpen ? 'open' : ''}`}>
        <Links handleClick={setIsOpen} />
      </nav>
    </>
  )
}

export default Nav
