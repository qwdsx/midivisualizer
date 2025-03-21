import { fmtMSS } from "@/util/util"
import { useEffect, useState } from "react";


interface DurationProps {
    isPlaying: boolean,
    durationSeconds: number
}

// CURRENTLY ONLY WORKS WITH MIDI FILES THAT DO NOT HAVE MULTIPLE TEMPO MARKINGS
export const Duration = ({ isPlaying, durationSeconds }: DurationProps) => {
    const [durationLeft, setDurationLeft] = useState(durationSeconds);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(durationLeft);
            if (durationLeft > 0) setDurationLeft(durationLeft => durationLeft - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [durationLeft]);

    return (
        <div>
            <p>{(isPlaying) ? fmtMSS(Math.ceil(durationLeft)) : fmtMSS(Math.ceil(durationSeconds))}</p>
        </div>
    )
}