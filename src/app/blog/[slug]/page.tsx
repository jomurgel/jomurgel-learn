import { MDXComponents } from 'mdx/types'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Metadata } from 'next'
import { SlugOptions } from '@/lib/api'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import { mdxOptions as options } from '../../../../next.config.mjs'
import { notFound } from 'next/navigation'
import { useMDXComponents } from '@/app/mdx-components'
import Date from '@/components/Date'
import Image from 'next/image'

type Props = {
  params: {
    slug: string;
  };
};

const SingleBlogPost = ( { params }: Props ) => {
  const post = getPostBySlug( SlugOptions.BLOG, params.slug )
  const components = useMDXComponents( {} as MDXComponents )

  if ( !post ) {
    return notFound()
  }

  return (
    <main>
      <div data-type="top">
        <header>
          <h1>{post.title}</h1>
          <Date dateString={post.date} />
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={`${post.title} Cover Image`}
              width={400}
              height={300}
              priority={true}
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

export function generateMetadata( { params }: Props ): Metadata {
  const post = getPostBySlug( SlugOptions.BLOG, params.slug )

  if ( !post ) {
    return notFound()
  }

  const title = `${post.title} | jomurgel.com`
  const description = post.description || ''
  const images = []

  if ( post.coverImage ) {
    images.push( post.coverImage )
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images,
    },
  }
}

export function generateStaticParams() {
  const posts = getAllPosts( SlugOptions.BLOG )

  return posts.map( ( post ) => ( {
    slug: post.slug,
  } ) )
}

export default SingleBlogPost
