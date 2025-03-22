import { PianoKey as PianoKeyType } from "@/util/types";
import { conditionalStylingFunction } from "@/util/util";

interface PianoKeyProps {
    pianoKey: PianoKeyType,
    isKeyPressed: boolean
}

const PianoKey = ({ pianoKey, isKeyPressed }: PianoKeyProps) => {

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
        !pianoKey.isAccidental,
        `h-full w-[40px] flex justify-center border border-black z-10 ${bgStyleKeyWhite} transition duration-100 ease-out`,
        `h-5/8 w-[30px] border border-black bg-black ml-[-15px] mr-[-15px] z-20 ${bgStyleKeyBlack} transition duration-100 ease-out`
    )

    return (
        <div id={`${pianoKey.midiNumber}`} className={keyStyle}>
            {(pianoKey.label === "c") ?
            <p className="absolute bottom-0 text-sm select-none">{pianoKey.label.toUpperCase() + pianoKey.octave}</p>
            :
            <p></p>}
        </div>
    )
}

export default PianoKey;