import Date from '@/components/Date'
import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '@/types/post'
import { MDXComponents } from 'mdx/types'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxOptions as options } from '../../../next.config.mjs'
import { useMDXComponents } from '@/app/mdx-components'
import ShareButton from '../SocialShare'
import Tags from '../Tags'

interface SinglePostProps {
  post: BlogPost;
}

const SinglePost: React.FC<SinglePostProps> = ( { post } ) => {
  const components = useMDXComponents( {} as MDXComponents )
  const isBlog = post.subfolder === 'blog'
  const isFeatured = post.coverImage && isBlog
  const isPhoto = post.subfolder === 'photo'

  return (
    <main>
      <div
        data-type="top"
        data-align={isFeatured ? 'wide' : undefined}
        data-layout={isFeatured ? 'featured' : undefined}
      >
        <header>
          {!isPhoto ? <Date dateString={post.date} /> : null}
          <h1>{post.title}</h1>
          {post.description && <p>{post.description}</p>}
          {isFeatured && post.coverImage && (
            <div data-type="image-container">
              <Image
                src={post.coverImage}
                alt={`${post.title} Cover Image`}
                width={600}
                height={450}
                priority
                style={{ width: '100%', height: '100%' }}
                post-image="true"
              />
            </div>
          )}
          {post.coverAlt && <cite>{post.coverAlt}</cite>}
        </header>
      </div>

      <hr />

      <div data-layout={isBlog ? 'has-sidebar' : undefined}>
        {isBlog && (
          <ShareButton url={`https://jomurgel.com/blog/${post.slug}`} title={post.title} />
        )}

        <section data-type="single" data-layout={isBlog ? 'main-content' : undefined}>
          {!isBlog && (
            <ShareButton url={`https://jomurgel.com/blog/${post.slug}`} title={post.title} />
          )}
          <MDXRemote source={post.content} components={components} options={{ mdxOptions: options }} />
        </section>
      </div>

      <footer>
        <Tags items={post.tags} linked />
        <p><Link href={`/${post.subfolder}`}>Back to {post.subfolder.charAt( 0 ).toUpperCase() + post.subfolder.slice( 1 )}</Link></p>
      </footer>
    </main>
  )
}

export default SinglePost
