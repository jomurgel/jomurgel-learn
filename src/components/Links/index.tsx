'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { LinksProps } from '@/types/links'

interface LinkItem {
  title: string;
  path: string;
}

export const links: { show: LinkItem[]; tell: LinkItem[] } = {
  show: [
    { title: 'About Me', path: '/about' },
    // { title: 'Services', path: '/services' },
    { title: 'Work', path: '/work' },
    { title: 'The Codex', path: '/codex' },
    { title: 'Contact Me', path: '/contact' },
  ],
  tell: [
    { title: 'All Content', path: '/blog' },
    { title: 'Writing', path: '/writing' },
    { title: 'Photography', path: '/photo' },
  ],
}

const Links: React.FC<LinksProps> = ( { handleClick } ) => {
  const pathName = usePathname()

  /**
   * Close menu when link is clicked.
   */
  const handleLink = ( href: string ) => {
    handleClick( false )
    window.location.href = href
  }

  return (
    <>
      {Object.entries( links ).map( ( [ key, linkGroup ] ) => (
        <div key={key}>
          <span id={key}>{key.charAt( 0 ).toUpperCase() + key.slice( 1 )}</span>
          <ul aria-labelledby={`${key}-title`}>
            {linkGroup.map( ( link ) => (
              <li key={link.title}>
                <Link
                  onClick={() => handleLink( link.path )}
                  href={link.path}
                  className={pathName === `${link.path}/` ? 'current' : ''}
                >
                  {link.title}
                </Link>
              </li>
            ) )}
          </ul>
        </div>
      ) )}
    </>
  )
}

export default Links
