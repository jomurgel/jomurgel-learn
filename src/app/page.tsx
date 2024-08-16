import Link from 'next/link'

const Home = () => {
  return (
    <main>
      <section data-type="top">
        <header>
          <h1>
            Jo Murgel<br/>
            Mixed-stack JavaScript Developer
          </h1>
          <p>
            A brief description and welcome text goes here. Links to anything that might be useful for the <Link href="/">incoming</Link> user. We'll keep it short to a maximum of three sentences, difference than what is on the about page.
          </p>
        </header>
      </section>
    </main>
  )
}

export default Home
