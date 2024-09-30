'use client'

import React from 'react'
import Content from './content.mdx'

const Setup: React.FC  = () => {
  return (
    <main>
      <section data-type="top">
        <header>
          <h1 aria-label="My Setup">
            All the deets.
          </h1>
          <p>Specific hardware, software, and other profesional tools I use.</p>
        </header>
      </section>

      <hr />

      <section>
        <Content />
      </section>
    </main>
  )
}

export default Setup
