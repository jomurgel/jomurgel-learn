'use client'

import Content from './content.mdx'

const Codex = () => {
  return (
    <main>
      <section data-type="top">
        <header>
          <h1 aria-label="The Jo Murgel COdex">
            I &hearts; this stuff...
          </h1>
          <p>A compiled list of things I like in no particular order of importance.</p>
        </header>
      </section>

      <hr />

      <section>
        <Content />
      </section>
    </main>
  )
}

export default Codex
