import * as fs from "fs"
import { Console } from "console"
import * as path from "path"
import { formatDateOnly } from "../date"

class Logger {
    private static enabled: boolean = false
    public static setEnabled(enabled: boolean): void {
        this.enabled = enabled
    }
    public static isEnabled(): boolean {
        return this.enabled
    }

    private static logDir?: string
    public static setLogDir(logDir: string): void {
        this.logDir = logDir
    }
    public static getLogDir(): string | null | undefined {
        return this.logDir
    }

    public static getProvider(): Console {
        if (this.isEnabled()) {
            const rootPath = path.resolve(this.getLogDir() || "./")
            const logPath = `${rootPath}/logs`

            if (!fs.existsSync(logPath)) {
                fs.mkdirSync(logPath, { recursive: true })
            }

            const time = formatDateOnly(new Date()).replace(/\//g, "-")

            console.log("Logs writing to path =>", logPath)
            const output = fs.createWriteStream(
                `${logPath}/stdout-${time}.log`,
                {
                    flags: "a",
                }
            )
            const errorOutput = fs.createWriteStream(
                `${logPath}/stderr-${time}.log`,
                {
                    flags: "a",
                }
            )

            return new Console({ stdout: output, stderr: errorOutput })
        }

        return console
    }
}

export default Logger
