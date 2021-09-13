import chalk from "chalk"
import { formatDate } from "../date"
import Logger from "./writter"

let logger = Logger.getProvider()

const prefixColor = (
    prefix: string,
    message?: any,
    color: string = "green"
) => {
    const timestamp = formatDate(new Date())
    if (Logger.isEnabled()) {
        return `[${timestamp}] - ${prefix}: ${message}`
    }

    const firstStep = chalk`[${timestamp}] - {${color} ${prefix}}:`
    return `${firstStep} ${message}`
}

export const debug = (message?: any, ...args: any[]) => {
    const msg = prefixColor("DEBUG", message, "magentaBright")
    args.length === 0 ? logger.log(msg) : logger.log(msg, ...args)
}

export const error = (message?: any, ...args: any[]) => {
    const msg = prefixColor("ERROR", message, "red")
    args.length === 0 ? logger.error(msg) : logger.error(msg, ...args)
}

export const warn = (message?: any, ...args: any[]) => {
    const msg = prefixColor("WARN", message, "yellow")
    args.length === 0 ? logger.warn(msg) : logger.warn(msg, ...args)
}

export const info = (message?: any, ...args: any[]) => {
    const msg = prefixColor("INFO", message, "cyan")
    args.length === 0 ? logger.info(msg) : logger.info(msg, ...args)
}

export const success = (message?: any, ...args: any[]) => {
    const msg = prefixColor("SUCCESS", message)
    args.length === 0 ? logger.info(msg) : logger.info(msg, ...args)
}