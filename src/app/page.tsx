'use client'

import { showLinks } from '@/components/Links'
import Link from 'next/link'

const Home = () => {
  const quickLinks = [ ...showLinks, { title: 'Blog', path: '/blog' } ]
  return (
    <main>
      <section data-type="top">
        <header>
          <h1>
            &#9786; I'm Jo Murgel,<br />
            a Full-stack Engineer.
          </h1>
          <p>
            I'm currently <Link href="/contact">available for hire</Link>, but before that I was a Principal Software Engineer at <a href="https://pmc.com" target="_blank" rel="noopener noreferrer">PMC</a>.
          </p>

          <nav data-type="top-links">
            <ul>
              {quickLinks.map( ( item ) => (
                <li key={item.title}><Link href={item.path}>{item.title}</Link></li>
              ) )}
            </ul>
          </nav>
        </header>
      </section>
    </main>
  )
}

export default Home
