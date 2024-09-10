import { getAllPosts } from '@/lib/api'
import { SlugOptions } from '@/lib/api'
import { Metadata } from 'next'
import PostCard from '@/components/PostCard'

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

      {allPosts.length > 0 ? allPosts.map( ( post ) => (
        <PostCard
          key={post.slug}
          type={SlugOptions.WORK}
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

export default Work
