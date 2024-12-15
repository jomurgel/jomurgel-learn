'use client'

import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <main>
      <section data-type="top">
        <header>
          <h1>
            &#9786; I'm Jo Murgel,<br />
            a Full-stack Web Dev and Artist.
          </h1>
          <h2>
            This is my portfolio, landing page, and online notepad.
          </h2>

          <p>
            I'm a full-stack web developer and <Link href="https://wordpress.org" target="_blank">WordPress</Link> expert.<br />
            <Link href="/contact">Hire me</Link> or check out my <Link href="/work">selected works</Link>.
          </p>
        </header>
      </section>
    </main>
  )
}

export default Home
