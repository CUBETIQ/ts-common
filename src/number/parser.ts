export const parse2IntOrNull = (val?: any): number | null => {
    try {
        return Number.parseInt(val)
    } catch (ex) {
        return null
    }
}

export const parse2Int = (val?: any, defaultValue: number = 0): number => {
    const parsed = parse2IntOrNull(val)
    if (parsed) return parsed
    return defaultValue
}

export const parseToBoolean = (
    val?: any,
    defaultValue: boolean = false
): boolean => {
    if (!val) return defaultValue
    return val === true || val.toLowerCase() === "true"
}
