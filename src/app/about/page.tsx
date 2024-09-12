'use client'

import Image from 'next/image'
import Link from 'next/link'
import Content from './content.mdx'

const About = () => {
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
            alt="A photo of tattooed legs draped over the edge of a cliff overlooking rocks and the Snake river."
            post-image="true"
            width={400}
            height={300}
            priority={true}
            style={{
              width: '100%',
              maxWidth: 400,
              maxHeight: 300,
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
