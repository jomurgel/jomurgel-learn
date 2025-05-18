'use client'

import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <main>
      <section data-type="top">
        <header data-type="home">
          <h1>
            Hi, I'm Jo Murgel.
          </h1>
          <p data-size="large">
            A <strong>full-stack dev</strong>, <strong>UX designer</strong>, and <strong>process efficiency expert</strong><sup>[1]</sup>.<br/>
            I build purpose and data-driven websites and craft new processes for small business, non-profits, and enterprise clients<sup>[2]</sup>.
          </p>
          <p data-layout="footnotes">
            <small>1. Among other things&hellip;</small><br/>
            <small>2. I'm also a photographer, artist, and generally cool person.</small>
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
