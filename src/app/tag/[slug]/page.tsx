import { Metadata } from 'next'
import { SlugOptions, getPostTags, getPostsByTag } from '@/lib/api'
import { notFound } from 'next/navigation'
import Date from '@/components/Date'
import Link from 'next/link'

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
          <h1 aria-label={`Tag archive for ${slug}`}><em>{`#${slug}`}</em></h1>
          <p><Link href="/blog">Back to the Blog</Link></p>
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

  return uniqueTags.map( ( tag ) => ( { slug: tag } ) )
}

export default TagArchive
