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

        <div data-table>
          <div data-attr="header">
            <div data-attr="column">
              <h2>Personal</h2>
            </div>
          </div>
          <div data-attr="row">
            <div data-attr="column">Email</div>
            <div data-attr="column"><a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#104;&#101;&#108;&#108;&#111;&#64;&#106;&#111;&#109;&#117;&#114;&#103;&#101;&#108;&#46;&#99;&#111;&#109;">&#104;&#101;&#108;&#108;&#111;&#64;&#106;&#111;&#109;&#117;&#114;&#103;&#101;&#108;&#46;&#99;&#111;&#109;</a></div>
          </div>
        </div>

        <div data-table>
          <div data-attr="header">
            <div data-attr="column">
              <h2>Professional</h2>
            </div>
          </div>
          <div data-attr="row">
            <div data-attr="column">Github</div>
            <div data-attr="column"><a href="https://github.com/jomurgel" target="_blank" rel="noopener noreferrer">@jomurgel</a></div>
          </div>

          <div data-attr="row">
            <div data-attr="column">LinkedIn</div>
            <div data-attr="column"><a href="https://linkedin.com/in/jomurgel/" target="_blank" rel="noopener noreferrer">jomurgel</a></div>
          </div>
        </div>

        <div data-table>
          <div data-attr="header">
            <div data-attr="column">
              <h2>Miscellaneous</h2>
            </div>
          </div>
          <div data-attr="row">
            <div data-attr="column">Instagram</div>
            <div data-attr="column"><a href="https://instagram.com/jomurgel" target="_blank" rel="noopener noreferrer">@jomurgel</a></div>
          </div>

          <div data-attr="row">
            <div data-attr="column">Threads</div>
            <div data-attr="column"><a href="https://www.threads.net/@jomurgel" target="_blank" rel="noopener noreferrer">@jomurgel</a></div>
          </div>

          <div data-attr="row">
            <div data-attr="column">Dribbble</div>
            <div data-attr="column"><a href="https://dribble.com/jomurgel/" target="_blank" rel="noopener noreferrer">jomurgel</a></div>
          </div>

          <div data-attr="row">
            <div data-attr="column">Reddit</div>
            <div data-attr="column"><a href="https://www.reddit.com/user/jomurgable/" target="_blank" rel="noopener noreferrer">@jomurgable</a></div>
          </div>

          <div data-attr="row">
            <div data-attr="column">Discord Server</div>
            <div data-attr="column"><a href="https://discord.gg/E9dr3S9r" target="_blank" rel="noopener noreferrer">Dev Support</a></div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
