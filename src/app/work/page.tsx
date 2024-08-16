import Link from 'next/link'
import { getAllPosts } from '@/lib/api'
import Date from '@/components/Date'
import { SlugOptions } from '@/lib/api'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work for Jo Murgel',
  description: '',
  openGraph: {
    title: 'Work for Jo Murgel',
    description: '',
  },
}
const Work = async () => {
  const allPosts = await getAllPosts( SlugOptions.WORK )

  return (
    <main>
      <section data-type="top">
        <header>
          <h1 aria-label="Work for Jo Murgel">Some of the things I've been working on...</h1>
        </header>
      </section>

      <hr />

      {allPosts.length > 0 ? allPosts.map( ( post ) => (
        <section data-type="post" key={post.slug}>
          <header>
            <Date dateString={post.date} />
            <h2>
              <Link href={`/work/${post.slug}`}>{post.title}</Link>
            </h2>
          </header>

          {post.description ? <p>{post.description}</p> : null}

          {post.tags?.length ?
            <footer>
              <nav data-type="inline">
                <ul>
                  {post.tags.map( ( tag ) => <li data-tag={tag} key={`${post.slug}-${tag}`}>#{tag}</li> )}
                </ul>
              </nav>
            </footer>
          : null}
        </section>
      ) ) :
        <p>
          &#9785; Currently working to migrate content. Check back soon.
        </p>
      }
    </main>
  )
}

export default Work
