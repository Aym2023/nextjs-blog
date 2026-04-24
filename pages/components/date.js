import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
    // 1. Check if dateString exists to prevent the 'split' / 'undefined' error
    if (!dateString) {
        return <span>Date not available</span>;
    }

    try {
        const parsedDate = parseISO(dateString);
        return (
            <time dateTime={dateString}>
                {format(parsedDate, "LLLL d, yyyy")}
            </time>
        );
    } catch (error) {
        // 2. Fallback in case the date format in your Markdown is wrong
        return <span>{dateString}</span>;
    }
}

// export default function Date({ dateString }) {
//     const parsedDate = parseISO(dateString);
//     return <time dateTime={dateString}>{format(parsedDate, "LLLL d, yyyy")}</time>;
// }


