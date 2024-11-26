import type { Metadata } from 'next'
import React from 'react'

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

const Rates: React.FC = () => {
  return (
    <main>
      <section data-type="top">
        <header>
          <h1 aria-label="Jo Murgel's Freelance Rates">My Freelance and Contract Rates</h1>
          <p>
            Reach out <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#104;&#101;&#108;&#108;&#111;&#64;&#106;&#111;&#109;&#117;&#114;&#103;&#101;&#108;&#46;&#99;&#111;&#109;">&#104;&#101;&#108;&#108;&#111;&#64;&#106;&#111;&#109;&#117;&#114;&#103;&#101;&#108;&#46;&#99;&#111;&#109;</a> if you're interested in working together. Rates subject to change.
          </p>
        </header>
      </section>

      <hr />

      <section>
        <p>I generally prefer to scope a body of work, understand the requirements, and then price out at a single fee: 20% paid up front, and 80% paid upon completion.</p>
        <p>Below are my hourly rates for ad-hoc work.</p>

        <hr />

        <RateSection title="Design" description="Largely graphics, marks, icons, identity, website UI design, app design, wireframes, etc." rate="$105/hr" />

        <RateSection title="Frontend Development" description="Website development, style, structure, and interactions including things like <a href='https://wordpress.org' target='_blank' rel='noopener noreferrer'>WordPress</a> theme development." rate="$90/hr" />

        <RateSection title="JavaScript & Block Development" description="Custom <a href='https://wordpress.org/documentation/article/wordpress-block-editor/' target='_blank' rel='noopener noreferrer'>Block Editor</a> features. Includes blocks, sidebar panels, customizations, etc. Headless apps, websites utilizing JavaScript frameworks (like <a href='https://nextjs.org' target='_blank' rel='noopener noreferrer'>Next.js</a>, <a href='https://gatsbyjs.com' target='_blank' rel='noopener noreferrer'>Gatsby</a>, etc.), and React.js or Vue.js features or applications." rate="$110/hr" />

        <RateSection title="Backend Development" description="Backend features including things like data handling or migrations, server or staging site setup, WordPress plugin development." rate="$100/hr" />

        <RateSection title="Support & Maintenance" description="General support. Plugin updates, core WordPress updates, etc. This also includes any hours spent on meetings, phone calls, emails, discovery, etc." rate="$45/hr" />

        <RateSection title="Emergency Support" description="On-call or after-hours support." rate="$350/hr" />

        <h2>Retainers</h2>
        <p>Reach out for pricing on retainers. These are usually structured as a set number of hours per month; use them or lose them. They may include some amount of emergency support. Retainer hours can be used for any of the above types of work.</p>
      </section>
    </main>
  )
}

interface RateSectionProps {
  title: string;
  description: string;
  rate: string;
}

const RateSection: React.FC<RateSectionProps> = ( { title, description, rate } ) => (
  <div data-table>
    <h2>{title}</h2>
    <div data-attr="row">
      <div data-attr="column">
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div data-attr="column" data-text-style="large"><strong>{rate}</strong></div>
    </div>
  </div>
)

export default Rates
