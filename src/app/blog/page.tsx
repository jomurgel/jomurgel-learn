import Link from 'next/link'
import { getAllPosts, getPostTags } from '@/lib/api'
import Date from '@/components/Date'
import { SlugOptions } from '@/lib/api'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog for Jo Murgel',
  description: '',
  openGraph: {
    title: 'Blog for Jo Murgel',
    description: '',
  },
}

const Blog = async () => {
  const allPosts = await getAllPosts( SlugOptions.BLOG )
  const allTags = await getPostTags( SlugOptions.BLOG )

  return (
    <main>
      <section data-type="top">
        <header>
          <h1 aria-label="Blog for Jo Murgel">Dear universe,</h1>
          <p><Link href="/feed.xml" target="_blank" rel="noopener noreferrer">RSS</Link></p>
          <nav>
            <ul>
              {allTags.map( ( tag ) => <li data-tag={tag} key={`blog-${tag}`}><Link href={`/tag/${tag}/`}>#{tag}</Link></li> )}
            </ul>
          </nav>
        </header>
      </section>

      <hr />

      {allPosts.length > 0 ? allPosts.map( ( post ) => (
        <section data-type="post" key={post.slug}>
          <header>
            <Date dateString={post.date} />
            <h2>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
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
        </section>
      ) ) :
        <p>
          &#9785; Currently working to migrate content. Check back soon.
        </p>
      }
    </main>
  )
}

export default Blog
