import { Metadata } from 'next'
import { SlugOptions, getPostTags, getPostsByTag } from '@/lib/api'
import { notFound } from 'next/navigation'
import Date from '@/components/Date'
import Link from 'next/link'
import slugify from 'slugify'
import Image from 'next/image'

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
          {post.coverImage ? (
            <div data-image data-type="thumbnail">
              <Image src={post.coverImage} alt={post.coverAlt ? post.coverAlt : ''} data-type="thumbnail" width={400}
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
                    {post.tags.sort().map( ( tag ) => {
                      const nextTag = slugify( tag )
                      return (
                        <li data-tag={nextTag} key={`${post.slug}-${nextTag}`}><Link href={`/tag/${nextTag}/`}>#{nextTag}</Link></li> )
                    } )}
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
