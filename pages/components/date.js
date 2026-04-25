import { parseISO, format } from "date-fns";

export default function DateComponent({ dateString }) {
  console.log('dateString received:', dateString)
  if (!dateString) {
    return null;
  }
  
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

// export default function Date({ dateString }) {
//     const parsedDate = parseISO(dateString);
//     return <time dateTime={dateString}>{format(parsedDate, "LLLL d, yyyy")}</time>;
// }


