'use client'

import React from 'react'
import Content from './content.mdx'

const Codex: React.FC  = () => {
  return (
    <main>
      <section data-type="top">
        <header>
          <h1 aria-label="The Jo Murgel Codex">
            I &hearts; this stuff...
          </h1>
          <p>All that other random stuff that informs who I am.</p>
        </header>
      </section>

      <hr />

      <section data-type="codex">
        <Content />
      </section>
    </main>
  )
}

export default Codex
