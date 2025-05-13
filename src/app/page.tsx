'use client'

import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <main>
      <section data-type="top">
        <header data-type="home">
          <h1>
            Welcome, I am Jo Murgel.
          </h1>
          <p data-type="large">
            A <strong>full-stack dev</strong>, <strong>process consultant</strong>, and <strong>efficiency expert</strong>.<br/>
            I build the web with purpose and craft new processes for small business, non-profits, and enterprise clients.
          </p>
          <div data-buttons>
            <Link href="/work" data-button data-variant="primary">Portfolio</Link>
            <Link href="/about" data-button data-variant="secondary">About me</Link>
          </div>
        </header>
      </section>
    </main>
  )
}

export default Home
