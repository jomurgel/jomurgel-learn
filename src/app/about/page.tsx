'use client'

import Image from 'next/image'
import Content from './content.mdx'

const About: React.FC = () => {
  return (
    <main>
      <section>
        <header>
          <h1 aria-label="About Jo Murgel">
            About Me
          </h1>

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
