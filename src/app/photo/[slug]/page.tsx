import { Metadata } from 'next'
import { SlugOptions } from '@/lib/api'
import { getAllPostsByType, getPostBySlug } from '@/lib/api'
import { notFound } from 'next/navigation'
import SinglePost from '@/components/SinglePost'

type Props = {
  params: {
    slug: string;
  };
};

const SinglePhotoPost = ( { params }: Props ) => {
  const post = getPostBySlug( SlugOptions.PHOTO, params.slug )

  if ( !post ) {
    return notFound()
  }

  return (
    <SinglePost
      post={post}
    />
  )
}

export function generateMetadata( { params }: Props ): Metadata {
  const post = getPostBySlug( SlugOptions.PHOTO, params.slug )

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
  const posts = getAllPostsByType( SlugOptions.PHOTO )

  return posts.map( ( post ) => ( {
    slug: post.slug,
  } ) )
}

export default SinglePhotoPost
