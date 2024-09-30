import { FC, ReactElement } from 'react'
import Link from 'next/link'
import slugify from 'slugify'

interface TagProps {
  item: string;
  linked: boolean;
}

const Tag: FC<TagProps> = ( { item, linked } ) => {
  const itemSlug = slugify( item )

  return (
    <li data-tag={item} key={`tag-${item}`}>
      {linked ? (
        <Link href={`/tag/${itemSlug}/`}>#{itemSlug}</Link>
      ) : (
        <span>{itemSlug}</span>
      )}
    </li>
  )
}

interface TagsProps {
  items?: string[];
  linked?: boolean;
}

const Tags: FC<TagsProps> = ( { items, linked = false } ): ReactElement | null => {
  if ( !items || items.length === 0 ) {
    return null
  }

  return (
    <nav data-type="tags">
      <ul>
        {items.sort().map( ( item ) => (
          <Tag key={`tag-${item}`} item={item} linked={linked} />
        ) )}
      </ul>
    </nav>
  )
}

export default Tags
