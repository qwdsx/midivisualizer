'use client'
import { PianoKey as PianoKeyType } from "@/util/types";
import { conditionalStylingFunction } from "@/util/util";

interface VisualizerPianoKeyProps {
    pianoKey: PianoKeyType,
    isKeyPressed: boolean
}

const VisualizerPianoKey = ({ pianoKey, isKeyPressed }: VisualizerPianoKeyProps) => {
    const octaveDivider = conditionalStylingFunction(pianoKey.label === "c" && !pianoKey.isAccidental, "border-l border-zinc-700", "");
    const keyStyle = conditionalStylingFunction(!pianoKey.isAccidental, `h-full w-[40px] ${octaveDivider}`, `h-full w-[30px] ml-[-15px] mr-[-15px]`)
    
    return (
        <div id={`${pianoKey.midiNumber}`} className={keyStyle}>
            {(isKeyPressed) ? <div className="h-full bg-red-600 border opacity-5"></div> : <div></div>}
        </div>
    )
}

export default VisualizerPianoKey;