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
          <p>I'm a full-stack engineer and artist living in Boise, ID.</p>
          <Image
            src="/about.jpg"
            alt="A photo of tattooed legs draped over the edge of a cliff overlooking rocks and the Snake River."
            width={400}
            height={300}
            priority
            style={{
              width: '100%',
              maxWidth: '400px',
              maxHeight: '300px',
              height: 'auto',
            }}
          />
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
