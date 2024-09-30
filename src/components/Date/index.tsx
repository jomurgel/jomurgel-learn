import { parseISO, format } from 'date-fns'
import { PostDate } from '@/types/post'

const DateComponent: React.FC<PostDate> = ( { dateString } ) => {
  const date: Date = parseISO( dateString )
  return (
    <time dateTime={dateString}>
      {format( date, 'LLLL d, yyyy' )}
    </time>
  )
}

export default DateComponent
