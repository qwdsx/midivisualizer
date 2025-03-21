

export const conditionalStylingFunction = (condition: boolean, style1: string, style2: string): string => {
    return (condition) ? style1 : style2
}

export const calculatePlaybackDurationSeconds = (ticks: number, bpm: number, ppq: number): number => {
    return (60 / (bpm * ppq)) * ticks
}

export const fmtMSS = (seconds: number) => {
    return (seconds - (seconds %= 60)) / 60 + (9 < seconds ? ':' : ':0') + seconds
}