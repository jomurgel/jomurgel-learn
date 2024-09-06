import Link from 'next/link'
import { getAllPosts } from '@/lib/api'
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
          <h1 aria-label="Work for Jo Murgel">Selected Works</h1>
        </header>
      </section>

      <hr />

      {allPosts.length > 0 ? allPosts.map( ( post ) => {

        const title = post.title.split( '/' )

        if ( !post.url ) {
          return
        }

        return(
        <section data-type="work" key={post.slug}>
          <div>
            <header>
              <h2>
                <Link href={post.url} target="_blank" rel="noopener noreferrer">
                  {title[0]}/<strong>{title[1]}</strong>
                </Link>
              </h2>
            </header>

            {post.description ? <p>{post.description}</p> : null}

            {post.tags?.length ?
              <footer>
                <nav data-type="inline">
                  <ul>
                    {post.tags.map( ( tag ) => <li data-tag={tag} key={`${post.slug}-${tag}`}><Link href={`/tag/${tag}/`}>#{tag}</Link></li> )}
                  </ul>
                </nav>
              </footer>
              : null}
            </div>
        </section>
      ) } ) :
        <p>
          &#9785; Currently working to migrate content. Check back soon.
        </p>
      }
    </main>
  )
}

export default Work
