import { parseISO, format } from 'date-fns'
import { PostDate } from '@/types/blog-post'

export default function Date( { dateString }: PostDate ) {
  const date = parseISO( dateString )
  return (
    <time dateTime={dateString}>{format( date, 'LLLL d, yyyy' )}</time>
  )
}