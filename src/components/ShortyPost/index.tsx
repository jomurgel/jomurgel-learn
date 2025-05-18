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

interface ShortyPostProps {
  post: BlogPost;
}

const ShortyPost: React.FC<ShortyPostProps> = ( { post } ) => {
  const components = useMDXComponents( {} as MDXComponents )
  const isBlog = post.subfolder === 'blog'
  const isWork = post.subfolder === 'work'
  const isFeatured = post.coverImage && ( isBlog || isWork )
  const isPhoto = post.subfolder === 'photo'

  return (
    <main>
      <div>
        <header>
          {!isPhoto && !isWork ? <Date dateString={post.date} /> : null}
          <h1><em>Shorty:</em> {post.title}</h1>
        </header>
      </div>

      <hr />

      <div data-layout={( isBlog && !isFeatured ) || isWork? 'has-sidebar' : 'no-sidebar'}>
        {!isFeatured && !isPhoto && (
          <ShareButton url={`https://jomurgel.com/blog/${post.slug}`} title={post.title} />
        )}

        <section data-layout={!isPhoto ? 'main-content' : undefined}>

          {( isFeatured || isPhoto ) && (
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

export default ShortyPost
