import Date from '@/components/Date'
import Image from 'next/image'
import Link from 'next/link'
import slugify from 'slugify'
import { BlogPost } from '@/types/post'
import { MDXComponents } from 'mdx/types'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxOptions as options } from '../../../next.config.mjs'
import { useMDXComponents } from '@/app/mdx-components'
import ShareButton from '../SocialShare'


const SinglePost = ( { post }: { post: BlogPost } ) => {
  const components = useMDXComponents( {} as MDXComponents )
  const isBlog = 'blog' === post.subfolder
  const isFeatured = post.coverImage && isBlog
  return (
    <main>
      <div data-type="top" data-align={isFeatured ? 'wide' : ''} data-layout={isFeatured ? 'featured' : ''}>

        <header>
          <Date dateString={post.date} />
          <h1>{post.title}</h1>

          {post.description ? (
            <p>{post.description}</p>
          ) : null}

          {post.coverImage && isFeatured ? (
            <div data-type="image-container">
              <Image
                src={post.coverImage}
                alt={`${post.title} Cover Image`}
                width={600}
                height={450}
                priority={true}
                style={{
                  width: '100%',
                  height: '100%',
                }}
                post-image="true"
              />
            </div>
          ) : null}
          {post.coverAlt ? <cite>{post.coverAlt}</cite> : null}
        </header>
      </div>

      <hr />

      <div data-layout={isBlog ? 'has-sidebar' : ''}>
        {isBlog ? (
          <aside data-type="social-share">
            <ShareButton url={`https://jomurgel.com/blog/${post.slug}`} title={post.title} />
          </aside>
        ) : null}

        <section data-type="single" data-layout={isBlog ? 'main-content' : ''}>
          <MDXRemote source={post.content} components={components} options={{ mdxOptions: options }} />
        </section>
      </div>

      <footer>
        {post.tags ? (
          <nav data-type="tags">
            <ul>
              {post.tags.map( ( tag ) => <li data-tag={tag} key={`blog-${tag}`}><Link href={`/tag/${slugify( tag )}/`}>#{tag}</Link></li> )}
            </ul>
          </nav>
        ) : null}
        <p><Link href="/blog">Back to Blog</Link></p>
      </footer>
    </main>
  )
}

export default SinglePost
