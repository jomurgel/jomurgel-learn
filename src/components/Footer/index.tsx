import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div>&copy; 2007-2024 &mdash; Jo Murgel</div>
      <div>
        Made <Link href="/blog/no-ai-taking-a-stance">without AI</Link>. Built with <Link href="" target="_blank" rel="noreferrer noopener">next.js</Link>, <Link href="" target="_blank" rel="noreferrer noopener">acorn.css</Link>, and hosted on <a href="" target="_blank" rel="noreferrer noopener">digitalocean</a>.
      </div>
    </footer>
  )
}

export default Footer
