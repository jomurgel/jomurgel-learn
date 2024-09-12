import Link from 'next/link'
import { getAllPostsByType, getPostTags } from '@/lib/api'
import { SlugOptions } from '@/lib/api'
import { Metadata } from 'next'
import slugify from 'slugify'
import PostCard from '@/components/PostCard'

export const metadata: Metadata = {
  title: 'Blog for Jo Murgel',
  description: '',
  openGraph: {
    title: 'Blog for Jo Murgel',
    description: '',
  },
}

const Writing = async () => {
  const allPosts = await getAllPostsByType( SlugOptions.BLOG )
  const allTags = await getPostTags( SlugOptions.BLOG )

  return (
    <main>
      <section data-type="top">
        <header>
          <h1 aria-label="Blog for Jo Murgel">Dear universe,</h1>
          <p><Link href="/feed.xml" target="_blank" rel="noopener noreferrer">RSS</Link></p>
        </header>
      </section>

      <hr />

      <div data-layout="has-sidebar">
        {allPosts.length ? (
          <aside>
            <nav>
              <ul>
                {allTags.map( ( tag ) => <li data-tag={tag} key={`blog-${tag}`}><Link href={`/tag/${slugify( tag )}/`}>#{tag}</Link></li> )}
              </ul>
            </nav>
          </aside>
        ) : null}

        <div data-layout="main-content">
          {allPosts.length > 0 ? allPosts.map( ( post ) => (
            <PostCard
              key={post.slug}
              type={post.subfolder as SlugOptions}
              post={post}
            />
          ) ) :
            <p>
              &#9785; Currently working to migrate content. Check back soon.
            </p>
          }
        </div>
      </div>
    </main>
  )
}

export default Writing