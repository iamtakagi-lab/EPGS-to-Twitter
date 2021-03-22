export type Program = {
    now: Date
    channel: string | null
    name: string | null
    description: string | null
    programId: number | null
    recordedId: number | null
    date: string | null
    startAt: string | null
    endAt: string | null
    recPath: string | null
}

export type Drop = {
    errorCnt: number | null
    dropCnt: number | null
    scramblingCnt: number | null
}