import { Metadata } from 'next'
import { getContentByType, SlugOptions, getContentBySlug } from '@/lib/api'
import { notFound } from 'next/navigation'
import SinglePost from '@/components/SinglePost'
import { SectionName } from '@/components/SectionHeader'

type Props = {
  params: {
    section: keyof typeof SlugOptions;
    slug: string;
  };
};

// Main component
const SinglePostPage = ( { params }: Props ) => {
  const { section, slug } = params

  const post = getContentBySlug( section as SlugOptions, slug )

  if ( !post ) {
    return notFound()
  }

  return <SinglePost post={post} />
}

// Metadata generation
export function generateMetadata( { params }: Props ): Metadata {
  const { section, slug } = params

  const post = getContentBySlug( section as SlugOptions, slug )

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
  const sections = Object.keys( SlugOptions ) as ( keyof typeof SlugOptions )[]
  const params: { section: string; slug: string }[] = []

  for ( const section of sections ) {
    // Writing is a route, but not a sub-route for single posts.
    // @todo: is there a better way of handling non-post routes?
    if ( section === 'WRITING' ) {
      continue
    }

    const posts = getContentByType( SlugOptions[section] )
    const slugs = posts.map( post => post.slug )

    params.push( ...slugs.map( slug => ( { section: section.toLowerCase() as SectionName, slug  } ) ) )
  }

  return params
}

export default SinglePostPage
