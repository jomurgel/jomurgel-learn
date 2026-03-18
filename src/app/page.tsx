import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <main>
      <section data-type="top">
        <header data-type="home">
          <h1>
            Hi, I'm Jo Murgel.
          </h1>
          <p data-size="large">
            A <strong>UX strategist, full-stack engineer, and human-centered design advocate</strong><sup>[1]</sup>. I help organizations build digital experiences grounded in real user behavior — and build the teams and processes to sustain them<sup>[2]</sup>.
          </p>
         <p>
            All of my <em>non-traditional</em> work runs through <strong><a href="https://darkfound.com">darkfound</a></strong>, a deep strategy collective focused on building web apps and websites and thinking hard about what comes next, or through <strong><a href="https://projectacorn.space">Project Acorn</a></strong>, my long-running testing ground for new concepts, ideas, and implementations —<sup>[3]</sup> the place where I nurture experiments and make mistakes in search of the right approach.
          </p>
          <p>
            A redesign is in the works. Stay tuned.
          </p>
          <p data-layout="footnotes">
            <small>1. Among other things&hellip;</small><br/>
            <small>2. I'm also a photographer and artist.</small><br/>
            <small>3. Take my em dash. I dare you.</small>
          </p>
          <div data-buttons>
            <Link href="/work" data-button data-variant="primary">Portfolio</Link>
            <Link href="/about" data-button data-variant="secondary">About me</Link>
          </div>
        </header>
      </section>
    </main>
  )
}

export default Home
