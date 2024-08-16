import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { BlogPost } from '@/types/blog-post'

export enum SlugOptions {
  BLOG = 'blog',
  WORK = 'work',
}

const contentDirectory = join( process.cwd(), 'content' )

export function getPostSlugs( type: SlugOptions ) {
  return fs.readdirSync( join( contentDirectory, type ) )
}

export function getPostBySlug( type: SlugOptions, slug: string ): BlogPost {
  const realSlug = slug.replace( /\.mdx$/, '' )
  const fullPath = join( contentDirectory, type, `${realSlug}.mdx` )
  const fileContents = fs.readFileSync( fullPath, 'utf8' )
  const { data, content } = matter( fileContents )

  return { ...data, slug: realSlug, content } as BlogPost
}

export function getAllPosts( type: SlugOptions ): BlogPost[] {
  const slugs = getPostSlugs( type )
  const posts = slugs
    .map( ( slug ) => getPostBySlug( type, slug ) )
    // sort posts by date in descending order
    .sort( ( post1, post2 ) => ( post1.date > post2.date ? -1 : 1 ) )
  return posts
}
