import { Metadata } from 'next'
import { SlugOptions, getPostTags, getPostsByTag } from '@/lib/api'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import slugify from 'slugify'
import PostCard from '@/components/PostCard'

type Props = {
  params: {
    slug: string;
  };
};

const TagArchive = async ( { params }: Props ) => {
  const { slug } = params
  const allPosts = await getPostsByTag( SlugOptions.BLOG, slug )

  if ( !allPosts ) {
    return notFound()
  }

  return (
    <main>
      <section data-type="top">
        <header>
          <h1 aria-label={`Tag archive for ${slug}`}><span>Posts tagged: </span><em>{`#${slug}`}</em></h1>
          <p><Link href="/blog">Back to the All Content</Link></p>
        </header>
      </section>

      <hr />

      {allPosts.length > 0 ? allPosts.map( ( post, index ) => (
        <PostCard
        key={`${post.slug}-${index}-${post.subfolder}`}
          type={post.subfolder as SlugOptions}
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

export function generateMetadata( { params }: Props ): Metadata {
  const { slug } = params

  return {
    title: `#${slug}`,
    description: `Tag archive for ${slug}`,
    openGraph: {
      title: `#${slug}`,
      description: `Tag archive for ${slug}`,
    },
  }
}

export function generateStaticParams() {
  const uniqueTags = getPostTags( SlugOptions.BLOG )

  return uniqueTags.map( ( tag ) => ( { slug: slugify( tag ) } ) )
}

export default TagArchive
