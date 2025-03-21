'use client'
import { note } from "@/util/types";
import { conditionalStylingFunction } from "@/util/util";
import { useState } from "react";

interface PianoKeyProps {
    note: note,
    isKeyPressed: boolean
}

const PianoKey = ({ note, isKeyPressed }: PianoKeyProps) => {

    const bgStyleKeyWhite = conditionalStylingFunction(
        !isKeyPressed,
        "bg-white",
        "bg-red-500"
    )

    const bgStyleKeyBlack = conditionalStylingFunction(
        !isKeyPressed,
        "bg-black",
        "bg-red-600"
    )

    const keyStyle = conditionalStylingFunction(
        !note.isAccidental,
        `h-full w-[40px] flex justify-center border border-black z-10 ${bgStyleKeyWhite} transition duration-200 ease-out`,
        `h-5/8 w-[30px] border border-black bg-black ml-[-15px] mr-[-15px] z-20 ${bgStyleKeyBlack} transition duration-200 ease-out`
    )

    if (!note.isAccidental) {
        return (
            <div id={`${note.midiNumber}`} className={keyStyle}>
                {(note.label === "c") ?
                <p className="absolute bottom-0 text-sm select-none">{note.label.toUpperCase() + note.octave}</p>
                :
                <p></p>}
            </div>
        )
    } else {
        return (
            <div id={`${note.midiNumber}`} className={keyStyle}>
            </div>
        )
    }
}

export default PianoKey;