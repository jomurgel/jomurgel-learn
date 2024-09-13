import { MDXComponents } from 'mdx/types'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxOptions as options } from '../../../next.config.mjs'
import Date from '@/components/Date'
import Image from 'next/image'
import slugify from 'slugify'
import Link from 'next/link'
import { BlogPost } from '@/types/post'
import { useMDXComponents } from '@/app/mdx-components'

const SinglePost = ({ post }: { post: BlogPost }) => {
  const components = useMDXComponents({} as MDXComponents)

  return (
    <main>
      <div data-type="top">
        <header>
          <Date dateString={post.date} />
          <h1>{post.title}</h1>
          <p><Link href="/blog">Back to Blog</Link></p>

          {post.tags ? (
            <nav>
              <ul>
                {post.tags.map((tag) => <li data-tag={tag} key={`blog-${tag}`}><Link href={`/tag/${slugify(tag)}/`}><em>#{tag}</em></Link></li>)}
              </ul>
            </nav>
          ) : null}

          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={`${post.title} Cover Image`}
              width={400}
              height={300}
              priority={true}
              style={{
                width: '100%',
                maxWidth: 400,
                maxHeight: 300,
                height: 'auto',
              }}
              post-image="true"
            />
          ) : null}
        </header>
      </div>

      <hr />

      <section data-type="single">
        <MDXRemote source={post.content} components={components} options={{ mdxOptions: options }} />
      </section>
    </main>
  )
}

export default SinglePost
