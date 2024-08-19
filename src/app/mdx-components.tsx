import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

export function useMDXComponents( components: MDXComponents ): MDXComponents {
  return {
    // @todo: move into custom component.
    a: ( props ) => {
      const href = props.href
      const isInternalLink = href && ( href.startsWith( '/' ) )

      if ( isInternalLink ) {
        return (
          <Link href={href}>
            {props.children}
          </Link>
        )
      }

      return <a target="_blank" rel="noopener noreferrer" {...props} />
    },
    ...components,
  }
}
