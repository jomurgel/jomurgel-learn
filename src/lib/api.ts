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
 * Get all content from the specified subfolder.
 */
export const getContentBySubfolder = ( subfolder: SlugOptions ): BlogPost[] => {
  const directoryPath = join( contentDirectory, subfolder )
  const filenames = fs.readdirSync( directoryPath )

  const allContent = filenames.map( ( filename ) => {
    // Read the content of the file
    const filePath = join( directoryPath, filename )
    const fileContent = fs.readFileSync( filePath, 'utf8' )

    // Parse the file using gray-matter to extract metadata
    const { data, content } = matter( fileContent )

    // Generate slug from the filename
    const slug = filename.replace( /\.mdx?$/, '' )

    return {
      ...data,
      content,
      slug,
      subfolder,
    }
  } )

  return allContent as BlogPost[]
}

/**
 * Get all directories in content.
 */
export function getDirectories() {
  return fs
    .readdirSync( contentDirectory, { withFileTypes: true } )
    .filter( ( dirent ) => dirent.isDirectory() )
    .map( ( dirent ) => dirent.name )
    .filter( ( name ) => name !== SlugOptions.HIDDEN )
}

/**
 * Get all content from all subfolders.
 */
export const getAllContent = () => {
  const subfolders = getDirectories()
  let allContent = [] as BlogPost[]

  subfolders.forEach( ( subfolder ) => {
    const content = getContentBySubfolder( subfolder as SlugOptions )
    allContent = allContent.concat( content )
  } )

  allContent.sort( ( a, b ) => new Date( b.date ).getTime() - new Date( a.date ).getTime() )

  return allContent
}

/**
 * Get a single content by its slug.
 */
export const getContentBySlug = ( subfolder: SlugOptions, slug: string ) => {
  const allContent = getContentBySubfolder( subfolder )
  return allContent.find( ( item ) => item.slug === slug ) || null
}

/**
 * Get a post by a slug.
 */
export function getPostBySlug( type: SlugOptions, slug: string ): BlogPost {
  const realSlug = slug.replace( /\.mdx$/, '' )
  const fullPath = join( contentDirectory, type, `${realSlug}.mdx` )
  const fileContents = fs.readFileSync( fullPath, 'utf8' )
  const { data, content } = matter( fileContents )

  return { ...data, slug: realSlug, content, subfolder: type } as BlogPost
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
  const allPosts = getAllContent()

  return allPosts.filter( ( post ) => post.tags?.map( ( tag ) => slugify( tag ) ).includes( tag ) )
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
  const posts = getAllContent()

  const uniqueTags: Array<string> = []

  // @todo: could make this a new set?
  posts.flatMap( post => post.tags || [] )
    .filter( tags => tags.length ).forEach( ( tag ) => {

  const nextTag = slugify( tag )
    if ( !uniqueTags.includes( nextTag ) ) {
      uniqueTags.push( nextTag )
    }
  } )

  return uniqueTags.sort()
}
