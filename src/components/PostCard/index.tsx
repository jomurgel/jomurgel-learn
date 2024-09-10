import Date from '@/components/Date'
import Image from 'next/image'
import Link from 'next/link'
import slugify from 'slugify'
import { BlogPost } from '@/types/post'
import { SlugOptions } from '@/lib/api'

export const CoverImage = ( { image, alt }: { image: string, alt: string } ) => {
  if ( !image ) {
    return
  }

  return (
    <div data-image data-type="thumbnail">
      <Image
        alt={alt ? alt : ''}
        data-type="thumbnail"
        height={266.67}
        priority={true}
        src={image}
        style={{
          width: '100%',
          height: '100%',
        }}
        width={400}
      />
    </div>
  )
}

export const CardRender = ( { type, post }: { type: SlugOptions, post: BlogPost } ) => {
  switch ( type ) {
    case SlugOptions.PHOTO:
      return (
        <>
          <CoverImage image={post.coverImage || ''} alt={post.coverAlt || ''} />

          <div>
            <header>
              <Date dateString={post.date} />
              <h2>
                <Link href={`/photo/${post.slug}`}>{post.title}</Link>
              </h2>
            </header>

            {post.description ? <p>{post.description}</p> : null}
          </div></>
      )
    case SlugOptions.WORK:
      const title = post.title.split( '/' )

      if ( !post.url ) {
        return
      }

      return (
        <>
          <div>
            <header>
              <h2>
                <Link href={post.url} target="_blank" rel="noopener noreferrer">
                  {title[0]}/<strong>{title[1]}</strong>
                </Link>
              </h2>
            </header>

            {post.description ? <p>{post.description}</p> : null}

            {post.languages ? (
              <nav>
                <ul>
                  {post.languages.map( ( tag ) => <li data-tag={tag} key={`blog-${tag}`}><span>{slugify( tag )}</span></li> )}
                </ul>
              </nav>
            ) : null}

            {post.related ? <Link data-type="related" href={post.related} >Related Post &rarr;</Link> : null}
          </div>
        </>
      )
    default:
      return (
        <>
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
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
            </header>

            {post.description ? <p>{post.description}</p> : null}

            {post.tags?.length ?
              <footer>
                <nav>
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
        </>
      )
  }
}

/**
 * Render a post card for shared content types.
 */
const PostCard = ( { type, post }: { type: SlugOptions, post: BlogPost } ) => {
  return (
    <section data-type={type} key={post.slug}>
      <CardRender type={type} post={post} />
    </section>
  )
}

export default PostCard
