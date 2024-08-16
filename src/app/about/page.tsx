import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Jo Murgel',
  description: '',
  openGraph: {
    title: 'About Jo Murgel',
    description: '',
  },
}

const About = () => {
  return (
    <main>
      <section data-type="top">
        <header>
          <h1 aria-label="About Jo Murgel">Hello, I'm Jo Murgel</h1>

          <Image
            src="https://picsum.photos/600/400"
            alt="placeholder image, to update"
            post-image="true"
            width="400"
            height="300"
            priority={true}
          />
        </header>
      </section>

      <hr />

      <section>
        <h2>TL;DR</h2>

        <p>This is a short paragraph about me. Partially related to what's on the homepage, but with a little more information about me.</p>
      </section>

      <section>
        <h2>The Rest...</h2>

        <p>This is a short paragraph about me. Partially related to what's on the homepage, but with a little more information about me.</p>

        <div data-table>
          <div data-table="header">
            <div data-table="column">
              <h2>Info</h2>
            </div>
          </div>
          <div data-table="row">
            <div data-table="column">Title</div>
            <div data-table="column">Value</div>
          </div>
          <div data-table="row">
            <div data-table="column">Title</div>
            <div data-table="column">Value</div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
