import { parseISO, format } from "date-fns";

import { parseISO, format } from 'date-fns'

export default function DateComponent({ dateString }) {
  if (!dateString) {
    return <span>No date available</span>
  }
  
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

// export default function Date({ dateString }) {
//     const parsedDate = parseISO(dateString);
//     return <time dateTime={dateString}>{format(parsedDate, "LLLL d, yyyy")}</time>;
// }


