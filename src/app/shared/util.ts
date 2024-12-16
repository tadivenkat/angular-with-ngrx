import moment from "moment";

export function isToday(date: Date): boolean {
    return moment(date).isSame(moment().startOf('day'), 'd');
}

export function isYesterday(date: Date): boolean {
    return moment(date).isSame(moment().subtract(1, 'days').startOf('day'), 'd');
}