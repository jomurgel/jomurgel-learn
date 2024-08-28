import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jo Murgel\'s Freelance Rates',
  description: 'Rates for everything from design to server configurations.',
  openGraph: {
    title: 'Jo Murgel\'s Freelance Rates',
    description: 'Rates for everything from design to server configurations.',
  },
  robots: {
    follow: false,
    index: false,
    nocache: false,
  },
}

const Rates = () => {
  return (
    <main>
      <section data-type="top">
        <header>
          <h1 aria-label="About Jo Murgel">
            My Freelance and Contract Rates
          </h1>
          <p>Reach out <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#104;&#101;&#108;&#108;&#111;&#64;&#106;&#111;&#109;&#117;&#114;&#103;&#101;&#108;&#46;&#99;&#111;&#109;">&#104;&#101;&#108;&#108;&#111;&#64;&#106;&#111;&#109;&#117;&#114;&#103;&#101;&#108;&#46;&#99;&#111;&#109;</a> if you're interested in working together. Rates subject to change.</p>
        </header>
      </section>

      <hr />

      <section>
        <h2>Design</h2>
        <div data-table>
          <div data-attr="row">
            <div data-attr="column">
              <p>Largely graphics, marks, icons, identity, website UI design, app design, wireframes, etc.</p>
            </div>
            <div data-attr="column" data-text-style="large"><strong>$105</strong><small>/hr</small></div>
          </div>
        </div>

        <h2>Frontend Development</h2>
        <div data-table>
          <div data-attr="row">
            <div data-attr="column">
              <p>Website development, style, structure, and interactions including things like <a href="https://wordpress.org" target="_blank" rel="noopener noreferrer">WordPress</a> theme development.</p>
            </div>
            <div data-attr="column" data-text-style="large"><strong>$65</strong><small>/hr</small></div>
          </div>
        </div>

        <h2>JavaScript &amp; Block Development</h2>
        <div data-table>
          <div data-attr="row">
            <div data-attr="column">
              <p>Custom <a href="https://wordpress.org/documentation/article/wordpress-block-editor/" target="_blank" rel="noopener noreferrer">Block Editor</a> features. Includes blocks, sidebar panels, customizations, etc.</p>

              <p>Headless apps, websites utilizing JavaScript frameworks (like <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">Next.js</a>, <a href="https://gatsbyjs.com" target="_blank" rel="noopener noreferrer">Gatsby</a>, etc.), and React.js or Vue.js features or applications.</p>
            </div>
            <div data-attr="column" data-text-style="large"><strong>$80</strong><small>/hr</small></div>
          </div>
        </div>

        <h2>Backend Development</h2>
        <div data-table>
          <div data-attr="row">
            <div data-attr="column">
              <p>Backend features including things like data handling or migrations, server or staging site setup, WordPress plugin development.</p>
            </div>
            <div data-attr="column" data-text-style="large"><strong>$85</strong><small>/hr</small></div>
          </div>
        </div>

        <h2>Support &amp; Maintenance</h2>
        <div data-table>
          <div data-attr="row">
            <div data-attr="column">
              <p>General support. Plugin updates, core WordPress updates, etc. This also includes any hours spent on meetings, phone calls, emails, discovery, etc.</p>
            </div>
            <div data-attr="column" data-text-style="large"><strong>$35</strong><small>/hr</small></div>
          </div>
        </div>

        <h3>Emergency Support</h3>
        <div data-table>
          <div data-attr="row">
            <div data-attr="column">
              <p>On-call or after-hours support.</p>
            </div>
            <div data-attr="column" data-text-style="large"><strong>$250</strong><small>/hr</small></div>
          </div>
        </div>

        <h2>Retainers</h2>
        <p>Reach out for pricing on retainers. These are usually structured as a set number of hours per month use them or lose them. They may included some amount of emergency support. Retainer hours can be used for any of the above type of work.</p>
      </section>
    </main>
  )
}

export default Rates
