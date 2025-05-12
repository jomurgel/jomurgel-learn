import Link from 'next/link'
import React from 'react'

const Footer: React.FC = () => {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <footer>
      <div>&copy; 2007-{currentYear} &mdash; Jo Murgel</div>
      <div>
       Built with <Link href="" target="_blank" rel="noreferrer noopener">next.js</Link>, <Link href="" target="_blank" rel="noreferrer noopener">acorn.css</Link>, and hosted with <a href="" target="_blank" rel="noreferrer noopener">digitalocean</a>.
      </div>
    </footer>
  )
}

export default Footer
