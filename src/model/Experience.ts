export class Experience {
    from: Date | null = null;
    to: Date | null = null;

    constructor(readonly company: string, readonly location: string, readonly position: string, readonly logo?: string, readonly skills?: string[]) {
    }

    static parseDate(input: string): Date {
        const [year, month] = input.split('/')

        return new Date(Date.UTC(Number(year), Number(month) - 1))
    }

    setFrom(from: string) {
        this.from = Experience.parseDate(from)
    }

    setTo(to: string) {
        this.to = Experience.parseDate(to)
    }
}
