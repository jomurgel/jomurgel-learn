import { FC, ReactElement } from 'react'
import Link from 'next/link'
import slugify from 'slugify'

/**
 * Maybe output a list item with a link.
 *
 * @param {string}  item   item name.
 * @param {boolean} linked whether or not to output a link.
 */
const maybeHasLink = ( item: string, linked: boolean ): ReactElement => {
  const itemSlug = slugify( item )
  if ( ! linked ) {
    return ( <li data-tag={item} key={`tag-${item}`}>
      <span>{itemSlug}</span>
    </li>
    )
  } else {
    return (
      <li data-tag={item} key={`tag-${item}`}>
        <Link href={`/tag/${itemSlug}/`}>#{itemSlug}</Link>
      </li>
    )
  }
}

/**
 * @todo: use the component pattern to build outsomething more sustainable.
 */
const Tags = ( { items, linked = false }: { items: String[] | undefined, linked?: boolean } ): ReactElement | undefined => {

  if ( !items ) {
    return
  }

  return (
    <nav data-type="tags">
      <ul>
        {items.sort().map( ( item ) => {
          return maybeHasLink( item as string, linked )
        } )}
      </ul>
    </nav>
  )
}

export default Tags
