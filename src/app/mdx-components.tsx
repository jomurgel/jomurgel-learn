import slugify from 'slugify'
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

const slufiyString = ( string: string ): string => {
  return slugify( string.replace( /[0-9.-]/g, '' ).toLocaleLowerCase() )
}

export function useMDXComponents( components: MDXComponents ): MDXComponents {
  return {
    // @todo: move into custom component.
    a: ( props ) => {
      const href = props.href
      const isInternalLink = href && ( href.startsWith( '/' ) )
      const isAnchorLink = href && ( href.startsWith( '#' ) )

      if ( isInternalLink || isAnchorLink ) {
        return (
          <Link href={href}>
            {props.children}
          </Link>
        )
      }

      return <a target="_blank" rel="noopener noreferrer" {...props} />
    },
    h2: ( { children } ) => {
      if ( !children ) return
      return <h2 id={slufiyString( children as string )}>{children}</h2>
    },
    h3: ( { children } ) => {
      if ( !children ) return
      return <h3 id={slufiyString( children as string )}>{children}</h3>
    },
    h4: ( { children } ) => {
      if ( !children ) return
      return <h4 id={slufiyString( children as string )}>{children}</h4>
    },
    h5: ( { children } ) => {
      if ( !children ) return
      return <h5 id={slufiyString( children as string )}>{children}</h5>
    },
    h6: ( { children } ) => {
      if ( !children ) return
      return <h6 id={slufiyString( children as string )}>{children}</h6>
    },
    Link,
    ...components,
  }
}
