import RSS from 'rss'
import { BlogPost } from '@/types/blog-post'
import { getAllPosts, SlugOptions } from '@/lib/api'

export async function GET(): Promise<Response> {
  const blogPosts: BlogPost[] = await getAllPosts( SlugOptions.BLOG )

  const siteUrl: string =
    process.env.NODE_ENV === 'production'
      ? 'https://jomurgel.com'
      : 'http://localhost:3000'

  // Define feed options
  const feedOptions = {
    title: 'Jo Murgel Learn',
    description: 'The personal website for Jo Murgel!',
    site_url: siteUrl,
    feed_url: `${siteUrl}/feed.xml`,
    copyright: `${new Date().getFullYear()} jomurgel`,
    language: 'en',
    pubDate: new Date(),
  }

  const feed = new RSS( feedOptions )

  blogPosts.forEach( ( post ) => {
    feed.item( {
      title: post.title,
      description: post.description || '',
      url: `${siteUrl}/blog/${post.slug}`,
      guid: post.id,
      date: post.date,
    } )
  } )

  // Return the RSS feed as a Response object
  return new Response( feed.xml( { indent: true } ), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  } )
}
