import Link from 'next/link'
import { getAllPosts } from '@/lib/api'
import Date from '@/components/Date'
import { SlugOptions } from '@/lib/api'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Photos for Jo Murgel',
  description: '',
  openGraph: {
    title: 'Photos sfor Jo Murgel',
    description: '',
  },
}

const Photo = async () => {
  const allPosts = await getAllPosts( SlugOptions.PHOTO )

  return (
    <main>
      <section data-type="top">
        <header>
          <h1 aria-label="Photos for Jo Murgel">Selected Works</h1>
        </header>
      </section>

      <hr />

      {allPosts.length > 0 ? allPosts.map( ( post ) => (
        <section data-type="post" key={post.slug}>
          {post.coverImage ? (
            <div data-image data-type="thumbnail"><Image src={post.coverImage} alt={post.coverAlt ? post.coverAlt : ''} data-type="thumbnail" width={400}
              height={266.67}
              priority={true}
              style={{
                width: '100%',
                height: '100%',
              }} /></div>
          ) : null}

          <div>
            <header>
              <Date dateString={post.date} />
              <h2>
                <Link href={`/photo/${post.slug}`}>{post.title}</Link>
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
      ) ) :
        <p>
          &#9785; Currently working to migrate content. Check back soon.
        </p>
      }
    </main>
  )
}

export default Photo
