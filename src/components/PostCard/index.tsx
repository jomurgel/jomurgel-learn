import Date from '@/components/Date'
import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '@/types/post'
import { SlugOptions } from '@/lib/api'
import Tags from '../Tags'

interface CoverImageProps {
  image: string;
  alt: string;
}

const CoverImage: React.FC<CoverImageProps> = ( { image, alt } ) => {
  if ( !image ) return null

  return (
    <div data-image data-type="thumbnail">
      <Image
        alt={alt || ''}
        data-type="thumbnail"
        width={600}
        height={400}
        priority
        src={image}
        style={{ width: '100%' }}
      />
    </div>
  )
}

interface CardRenderProps {
  type: SlugOptions;
  post: BlogPost;
}

const CardRender: React.FC<CardRenderProps> = ( { type, post } ) => {
  const renderPhotoCard = () => (
    <>
      {post.coverImage && (
        <Link href={`/photo/${post.slug}`}>
          <CoverImage image={post.coverImage} alt={post.coverAlt || ''} />
        </Link>
      )}
      <div>
        <header>
          <h2>
            <Link href={`/photo/${post.slug}`}>{post.title}</Link>
          </h2>
        </header>
        {post.description && <p>{post.description}</p>}
      </div>
    </>
  )

  const renderWorkCard = () => {
    const title = post.title.split( '/' )
    const isInternalLink = post.url && ( post.url.startsWith( '/' ) )

    if ( !post.url ) return null

    return (
      <>
        <div>
          <header>
            <h2>
              {isInternalLink ? (
                <Link href={post.url}>
                {title[0]}/<strong>{title[1]}</strong>
                </Link>
              ) : (
              <Link href={post.url} target="_blank" rel="noopener noreferrer">
                {title[0]}/<strong>{title[1]}</strong>
              </Link>
              )}
            </h2>
          </header>
          {post.description && <p>{post.description}</p>}
          <Tags items={post.languages} />
          {post.related && (
            <Link data-type="related" href={post.related}>
              Related Post &rarr;
            </Link>
          )}
          {post.external && (
            <Link data-type="related" href={post.external}>
              Visit Site &rarr;
            </Link>
          )}
        </div>
      </>
    )
  }

  const renderDefaultCard = () => (
    <>
      {post.coverImage && (
        <Link href={`/blog/${post.slug}`}>
          <CoverImage image={post.coverImage} alt={post.coverAlt || ''} />
        </Link>
      )}
      <div>
        <header>
          <Date dateString={post.date} />
          <h2>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
        </header>
        {post.description && <p>{post.description}</p>}
        <footer>
          <Tags items={post.tags} linked />
        </footer>
      </div>
    </>
  )

  switch ( type ) {
    case SlugOptions.PHOTO:
      return renderPhotoCard()
    case SlugOptions.WORK:
      return renderWorkCard()
    default:
      return renderDefaultCard()
  }
}

interface PostCardProps {
  type: SlugOptions;
  post: BlogPost;
}

const PostCard: React.FC<PostCardProps> = ( { type, post } ) => {
  return (
    <section data-type={type} key={`${post.subfolder}-${post.slug}`}>
      <CardRender type={type} post={post} />
    </section>
  )
}

export default PostCard
