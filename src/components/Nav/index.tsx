'use client'

import { useEffect, useState } from 'react'
import Links from '@/components/Links'

const Nav = () => {
  const [ isOpen, setIsOpen ] = useState<boolean>( false )

  useEffect( () => {
    const handleKeyDown = ( event: KeyboardEvent ): void => {
      if ( event.key === 'Escape' ) {
        setIsOpen( false )
      }
    }

    document.addEventListener( 'keydown', handleKeyDown );

    () => {
      document.removeEventListener( 'keydown', handleKeyDown )
    }
  } )

  return(
    <>
      <button
        aria-expanded={isOpen}
        data-variant="dark"
        className="site-nav-toggle"
        onClick={() => setIsOpen( !isOpen )}
      >
        Start
      </button>
      <nav data-style="plain" className="site-nav">
        <Links handleClick={setIsOpen} />
      </nav>
    </>
  )
}

export default Nav
