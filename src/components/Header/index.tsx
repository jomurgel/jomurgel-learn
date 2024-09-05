import Link from 'next/link'
import Nav from '@/components/Nav'

const Header = () => {
  return (
    <header id="top" className="site-header">
      <div>
        <Link href="/">@jomurgel</Link>
      </div>
      <div>
        <Link href="/contact" data-effect="glow">For Hire</Link>
        <Nav />
      </div>
    </header>
  )
}

export default Header
