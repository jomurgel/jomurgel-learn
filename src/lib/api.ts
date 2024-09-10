import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { BlogPost } from '@/types/post'
import slugify from 'slugify'

export enum SlugOptions {
  BLOG = 'blog',
  CAREER = 'career',
  WORK = 'work',
  HIDDEN = 'hidden',
  PHOTO = 'photo',
}

const contentDirectory = join( process.cwd(), 'content' )

/**
 * Get a post by a slug.
 */
export function getPostBySlug( type: SlugOptions, slug: string ): BlogPost {
  const realSlug = slug.replace( /\.mdx$/, '' )
  const fullPath = join( contentDirectory, type, `${realSlug}.mdx` )
  const fileContents = fs.readFileSync( fullPath, 'utf8' )
  const { data, content } = matter( fileContents )

  return { ...data, slug: realSlug, content } as BlogPost
}

/**
 * Get all posts.
 */
export function getAllPosts( type: SlugOptions ): BlogPost[] {
  const slugs = getPostSlugs( type )
  const posts = slugs
    .map( ( slug ) => getPostBySlug( type, slug ) )
    // sort posts by date in descending order
    .sort( ( post1, post2 ) => ( post1.date > post2.date ? -1 : 1 ) )
  return posts
}

/**
 * Get posts by tag.
 */
export function getPostsByTag( type: SlugOptions, tag: string ): BlogPost[] {
  const allPosts = getAllPosts( type )

  return allPosts.filter( ( post ) => post.tags.map( ( tag ) => slugify( tag ) ).includes( tag ) )
}

/**
 * Get all post slugs.
 */
export function getPostSlugs( type: SlugOptions ): Array<string> {
  return fs.readdirSync( join( contentDirectory, type ) )
}

/**
 * Get all unique tags.
 */
export function getPostTags( type: SlugOptions ): Array<string> {
  const posts = getAllPosts( SlugOptions.BLOG )

  const uniqueTags: Array<string> = []

  // @todo: could make this a new set?
  posts.flatMap( post => post.tags ).forEach( ( tag ) => {

  const nextTag = slugify( tag )
    if ( !uniqueTags.includes( nextTag ) ) {
      uniqueTags.push( nextTag )
    }
  } )

  return uniqueTags.sort()
}
