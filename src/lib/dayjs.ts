import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export const unixTimeFromNow = (unix: number) => {
    const day = dayjs.unix(unix);
    return day.fromNow()
}