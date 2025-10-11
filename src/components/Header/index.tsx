'use client'

import React from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'

const Header: React.FC = () => {
  return (
    <header id="top" className="site-header">
      <div>
        <Link className="home" href="/">@jomurgel</Link>
      </div>
      <div>
        <Nav />
      </div>
    </header>
  )
}

export default Header
