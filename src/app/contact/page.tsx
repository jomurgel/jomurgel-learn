import React from 'react'
import { Metadata } from 'next'
import contacts from './contacts'

export const metadata: Metadata = {
  title: 'Contact Jo Murgel',
  description: '',
  openGraph: {
    title: 'Contact Jo Murgel',
    description: '',
  },
}

const Contact: React.FC = () => {

  return (
    <main>
      <section data-type="top">
        <header>
          <h1 aria-label="Contacting Jo Murgel">Find me around the web...</h1>
        </header>
      </section>

      <hr />

      <section>
        {contacts.map( ( { category, items } ) => (
          <div key={category} data-table>
            <div data-attr="header">
              <div data-attr="column">
                <h2>{category}</h2>
              </div>
            </div>
            {items.map( ( { label, href, display } ) => (
              <div key={label} data-attr="row">
                <div data-attr="column">{label}</div>
                <div data-attr="column">
                  <a href={href} target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: display }} />
                </div>
              </div>
            ) )}
          </div>
        ) )}
      </section>
    </main>
  )
}

export default Contact
