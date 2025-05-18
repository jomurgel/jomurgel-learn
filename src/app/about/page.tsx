'use client'

import Image from 'next/image'
import Content from './content.mdx'

const About: React.FC = () => {
  return (
    <main>
      <section
        data-type="top"
        data-align="wide"
        data-layout="featured"
      >
        <header>
          <h1 aria-label="About Jo Murgel">
            About Me
          </h1>
          <div data-type="image-container">
            <Image
              src="/about.jpg"
              alt="A photo of tattooed legs draped over the edge of a cliff overlooking rocks and the Snake river."
              width={600}
              height={450}
              priority
              style={{ width: '100%', height: '100%' }}
              post-image="true"
            />
          </div>
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
