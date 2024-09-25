'use client'

// @todo: figure out how to change the gradient
// and THEN transition to the new view.
// import { usePathname } from 'next/navigation'
// import { useEffect, useState } from 'react'
// import GradientBackground from '@/components/GradientBackground'

import Link from 'next/link'
import Nav from '@/components/Nav'

// @todo: testing gradients.
// const gradientsMap: { [key: string]: string[][] } = {
//   '/': [
//     [ '#fff', '#000' ],
//   ],
//   '/about/': [
//     [ '#FF9966', '#FF5E62' ],
//   ],
//   '/contact/': [
//     [ '#ffcc00', '#F15F79' ],
//   ],
// }

const Header = () => {
  // const pathname = usePathname()
  // const [ currentGradients, setCurrentGradients ] = useState<string[][]>( gradientsMap[pathname] || gradientsMap['/'] )

  // useEffect( () => {
  //   const newGradients = gradientsMap[pathname] || gradientsMap['/']
  //   setCurrentGradients( newGradients )
  // }, [pathname] )

  return (
    <>
      {/* <GradientBackground gradients={currentGradients} /> */}
      <header id="top" className="site-header">
        <div>
          <Link className="home" href="/">@jomurgel</Link>
        </div>
        <div>
          <Link href="/contact" data-effect="glow">For Hire</Link>
          <Nav />
        </div>
      </header>
    </>
  )
}

export default Header
