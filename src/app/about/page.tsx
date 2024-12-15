'use client'

import Image from 'next/image'
import Content from './content.mdx'

const About: React.FC = () => {
  return (
    <main>
      <section data-type="top">
        <header>
          <h1 aria-label="About Jo Murgel">
            Hello, I'm Jo Murgel.
          </h1>
          <p>I'm a full-stack web developer and artist living in Boise, ID.</p>
        </header>
      </section>

      <hr />

      <section>
        <Content />
      </section>
    </main>
  )
}

export default About
