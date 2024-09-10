import { getAllPostsByType } from '@/lib/api'
import { SlugOptions } from '@/lib/api'
import { Metadata } from 'next'
import PostCard from '@/components/PostCard'

export const metadata: Metadata = {
  title: 'Photos for Jo Murgel',
  description: '',
  openGraph: {
    title: 'Photos sfor Jo Murgel',
    description: '',
  },
}

const Photo = async () => {
  const allPosts = await getAllPostsByType( SlugOptions.PHOTO )

  return (
    <main>
      <section data-type="top">
        <header>
          <h1 aria-label="Photos for Jo Murgel">Photography</h1>
          <p>I'm also a photographer; here's a little taste.</p>
        </header>
      </section>

      <hr />

      {allPosts.length > 0 ? allPosts.map( ( post ) => (
        <PostCard
          key={post.slug}
          type={SlugOptions.PHOTO}
          post={post}
        />
      ) ) :
        <p>
          &#9785; Currently working to migrate content. Check back soon.
        </p>
      }
    </main>
  )
}

export default Photo
