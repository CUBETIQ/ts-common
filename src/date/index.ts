const dateFormat: any = {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
}

const timeFormat: any = {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
}

export const formatDate = (date: Date, locale: string = "en-US") => {
    return date.toLocaleDateString(locale, {
        ...dateFormat,
        ...timeFormat,
    })
}

export const formatDateOnly = (date: Date, locale: string = "en-US") => {
    return date.toLocaleDateString(locale, dateFormat)
}

export const formatDateFromTimestamp = (
    time: number,
    locale: string = "en-US"
) => {
    return formatDate(new Date(time), locale)
}

export const millisToSeconds = (millis: number) => {
    return millis / 1000
}

export const randomThenGetOne = (data: any[]): any => {
    const randomIndex = Math.floor(Math.random() * data.length)
    return data[randomIndex]
}
