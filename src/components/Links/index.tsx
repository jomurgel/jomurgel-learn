'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { LinksProps } from '@/types/links'

export const showLinks = [
  {
    title: 'About Me',
    path: '/about',
  },
  {
    title: 'Codex',
    path: '/codex',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
]

export const tellLinks = [
  {
    title: 'All Content',
    path: '/blog',
  },
  {
    title: 'Writing',
    path: '/writing',
  },
  {
    title: 'Selected Work',
    path: '/work',
  },
  {
    title: 'Photography',
    path: '/photo',
  },
  // @todo: phase2
  // {
  //   title: 'Notes & Bookmarks',
  //   path: '/notes',
  // },
]

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
      <div>
        <span id="show-tell">Show/Tell</span>
        <ul aria-labelledby="show-tell">
          {showLinks.map( ( link ) => <li key={link.title}><Link onClick={() => handleLink( link.path )} href={link.path} className={`${pathName === link.path && 'current'}`}>{link.title}</Link></li> )}
        </ul>
      </div>
      <div>
        <span id="read-write">Read/Write</span>
        <ul aria-labelledby="read-write">
          {tellLinks.map( ( link ) => <li key={link.title}><Link onClick={() => handleLink( link.path )} href={link.path} className={`${pathName === link.path && 'current'}`}>{link.title}</Link></li> )}
        </ul>
      </div>
    </>
  )
}

export default Links
