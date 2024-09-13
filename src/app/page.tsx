import Link from 'next/link'
// import { getAllContent, SlugOptions } from '@/lib/api'
// import PostCard from '@/components/PostCard'

const Home = async () => {
  // @todo: keep for future improvements.
  // const allPosts = await getAllContent()
  // const [post] = allPosts

  return (
    <main>
      <section data-type="top">
        <header>
          <h1>
            &#9786; I'm Jo Murgel,<br />
            a Full-stack Engineer.
          </h1>
          <p>
            I'm currently <Link href="/contact">available for hire</Link>, but before that I was a Principal Software Engineer at <a href="https://pmc.com" target="_blank" rel="noopener noreferrer">PMC</a>, but that's the tip of the iceberg; learn more about me <Link href="/about">here</Link> or checkout my <Link href="/blog">blog</Link>.
          </p>
        </header>
      </section>
    </main>
  )
}

export default Home
