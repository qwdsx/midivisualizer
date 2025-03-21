'use client'
import { note } from "@/util/types";
import { JSX, useState } from "react";
import VisualizerNoteFall from "./VisualizerNoteFall";
import { conditionalStylingFunction } from "@/util/util";

interface VisualizerPianoKeyProps {
    note: note,
    isKeyPressed: boolean
}

const VisualizerPianoKey = ({ note, isKeyPressed }: VisualizerPianoKeyProps) => {
    // const [noteFallArr, setNoteFallArr] = useState<JSX.Element[]>([]);

    // if (isKeyPressed) {
    //     setNoteFallArr(prev => [...prev, <VisualizerNoteFall />])
    // }

    // console.log(noteFallArr);

    const octaveDivider = conditionalStylingFunction(note.label === "c" && !note.isAccidental, "border-l border-zinc-700", "");
    const keyStyle = conditionalStylingFunction(!note.isAccidental, `h-full w-[40px] ${octaveDivider}`, `h-full w-[30px] ml-[-15px] mr-[-15px]`)
    
    if (!note.isAccidental) {
        return (
            <div id={`${note.midiNumber}`} className={keyStyle}>
                {/* <div>
                    {noteFallArr}
                </div> */}
                {(isKeyPressed) ? <div className="h-full bg-red-500 border opacity-5"></div> : <div></div>}
            </div>
        )
    } else {
        return (
            <div id={`${note.midiNumber}`} className={keyStyle}>
                {(isKeyPressed) ? <div className="h-full bg-red-600 border opacity-5"></div> : <div></div>}
            </div>
        )
    }
}

export default VisualizerPianoKey;