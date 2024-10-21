import { Metadata } from 'next'
import { getContentByTypeReversed, getAllContent, getContentByType, getPostTags, SlugOptions } from '@/lib/api'
import PostCard from '@/components/PostCard'
import Link from 'next/link'
import slugify from 'slugify'
import SectionHeader, { SectionName } from '@/components/SectionHeader'
import { notFound } from 'next/navigation'

interface SectionPageParams {
  params: {
    section: SectionName;
  };
}

const SectionPage = async ( { params }: SectionPageParams ) => {
  const { section } = params
  const hasSidebar = [ 'blog', 'writing' ].includes( section )

  let allPosts: Awaited<ReturnType<typeof getAllContent>> | Awaited<ReturnType<typeof getContentByType>>

  if ( section === 'blog' ) {
    allPosts = await getAllContent()
  } else if ( section === 'learn' ) {
    const targetSection = section !== 'learn' ? section : 'learn'
    allPosts = await getContentByTypeReversed( targetSection as SlugOptions )
  } else {
    const targetSection = section !== 'writing' ? section : 'blog'
    allPosts = await getContentByType( targetSection as SlugOptions )
  }

  const allTags = await getPostTags( SlugOptions.BLOG )

  // Bail on hidden. Obviously don't want an archive for these.
  if ( section === 'hidden' ) {
    return notFound()
  }

  return (
    <main>
      <SectionHeader section={section} />

      <hr />

      <div data-layout={hasSidebar ? 'has-sidebar' : ''}>
        {hasSidebar && allPosts.length > 0 && (
          <aside>
            <nav>
              <ul>
                {allTags.map( ( tag ) => (
                  <li data-tag={tag} key={`blog-${tag}`}>
                    <Link href={`/tag/${slugify( tag )}/`}>#{tag}</Link>
                  </li>
                ) )}
              </ul>
            </nav>
          </aside>
        )}

        <div data-layout={section}>
          {allPosts.length > 0 ? (
            allPosts.map( ( post, index ) => {
              if ( post.slug === 'start-here' ) {
                return null
              }
              return (
                <PostCard
                  key={`${post.slug}-${index}-${post.subfolder}`}
                  type={post.subfolder as SlugOptions}
                  post={post}
                />
              )
            } )
          ) : (
            <p>&#9785; Currently working to migrate content. Check back soon.</p>
          )}
        </div>
      </div>
    </main>
  )
}

export function generateMetadata( { params }: SectionPageParams ): Metadata {
  // @todo: helper for this needed.
  const title = `${params.section.charAt( 0 ).toUpperCase() + params.section.slice( 1 )} | jomurgel.com`
  const description = `The part of the website with ${params.section} content.`

  const meta = {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    robots: {},
  }

  // @todo: hide from search for now.
  if ( 'learn' === params.section ) {
    meta.robots = {
      follow: false,
      index: false,
      nocache: false,
    }
  }

  return meta
}

export function generateStaticParams() {
  return Object.keys( SlugOptions ).map( ( key ) => ( {
    section: key.toLowerCase() as SectionName,
  } ) )
}

export default SectionPage
