'use client'

import { links } from '@/components/Links'
import Link from 'next/link'

const Home: React.FC = () => {
  const quickLinks = [
    { title: 'Photography', path: '/photo' },
    { title: 'Blog', path: '/blog' },
    ...links.show,
  ]

  return (
    <main>
      <section data-type="top">
        <header>
          <h1>
            &#9786; I'm Jo Murgel,<br />
            a Full-stack Engineer.
          </h1>
          <p>
            I'm currently <Link href="/contact">available for hire</Link>, as a Front-end Engineer, UI Consultant, or General Maintenance contractor. Previously, I was a Principal Software Engineer at <a href="https://pmc.com" target="_blank" rel="noopener noreferrer">PMC</a>.
          </p>

          <nav data-type="top-links">
            <ul>
              {quickLinks.map( ( item ) => (
                <li key={item.title}>
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ) )}
            </ul>
          </nav>
        </header>
      </section>
    </main>
  )
}

export default Home
