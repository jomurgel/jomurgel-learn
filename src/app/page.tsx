import Link from 'next/link'

const Home = () => {
  return (
    <main>
      <section data-type="top">
        <header>
          <h1>
            Jo Murgel<br/>
            Full-stack JavaScript Developer.
          </h1>
          <p>
            I have the drive to learn, an imagination unrestricted by convention, and the unique ability to look at a project from every relevant angle. I'm currently <Link href="/contact">available for hire</Link>, but before that, I was a Principal Software Engineer at <a href="https://pmc.com" target="_blank" rel="noopener noreferrer">PMC</a>. That's the tip of the iceberg; learn more about me <Link href="/about">here</Link>.
          </p>
        </header>
      </section>
    </main>
  )
}

export default Home
