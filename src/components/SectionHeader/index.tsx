import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export type SectionName = 'blog' | 'work' | 'learn' | 'photo' | 'writing' | 'hidden';

interface SectionHeaderProps {
  section: SectionName;
}

const SectionHeader: React.FC<SectionHeaderProps> = ( { section } ) => {
  switch ( section ) {
    case 'blog':
      return (
        <section data-type="top">
          <header>
            <h1 aria-label="All Content for Jo Murgel">Dear universe,</h1>
            <p>
              Writing, Work, and Photography.<br />
              <Link href="/feed.xml" target="_blank" rel="noopener noreferrer">
                RSS
              </Link>
            </p>
          </header>
        </section>
      )
    case 'hidden':
      return null
    case 'photo':
      return (
        <section data-type="top">
          <header>
            <h1 aria-label="Photos for Jo Murgel">Photography</h1>
            <p>Did you know that I'm also a photographer? You do now.</p>
          </header>
        </section>
      )
    case 'learn':
      const title = 'Learn Something New!'
      const description = 'A compilation of small tutorials to help learn a new thing.'
      return (
        <section data-type="top">
          <header>
            <h1>{title}</h1>
            <p>
              {description}<br/><br/>
              <Link href="/learn/start-here" data-type="start">Start Here</Link>
            </p>
          </header>
        </section>
      )
    case 'work':
      return (
        <section data-type="top">
          <header>
            <h1 aria-label="Work for Jo Murgel">Selected Works</h1>
            <p>Some public repos of past and current work.</p>
          </header>
        </section>
      )
    case 'writing':
      return (
        <section data-type="top">
          <header>
            <h1 aria-label="Writing for Jo Murgel">Just the Writing</h1>
            <p>Just some odds and ends; a little tech, a little thought, a little me.</p>
          </header>
        </section>
      )
    default:
      return null
  }
}

export default SectionHeader
