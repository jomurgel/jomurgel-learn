import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Jo Murgel',
  description: '',
  openGraph: {
    title: 'Contact Jo Murgel',
    description: '',
  },
}

const Contact = () => {
  return (
    <main>
      <section data-type="top">
        <header>
          <h1 aria-label="Contacting Jo Murgel">Find me around the web...</h1>
        </header>
      </section>

      <hr />

      <section>
        <h2>TL;DR</h2>

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

export default Contact
