export function dateToLocalISO(date: Date) {
    const off    = date.getTimezoneOffset()
    const absoff = Math.abs(off)
    return (new Date(date.getTime() - off*60*1000).toISOString().substr(0,23))
}
