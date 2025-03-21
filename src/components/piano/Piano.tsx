import { note } from "@/util/types";
import notes from '@/misc/notes.json';
import PianoKey from "./PianoKey";

interface PianoProps {
    pressedKeys: number[]
}

const Piano = ({ pressedKeys }: PianoProps) => {
    return (
        <div className="flex flex-row absolute bottom-0 h-[250px] w-full z-100">
            {notes.map((note: note, index: number) => {
                let isKeyPressed = (pressedKeys.find(e => e === note.midiNumber)) ? true : false;
                return (
                    <PianoKey
                        note={note}
                        isKeyPressed={isKeyPressed}
                        key={index}
                    />
                )
            })}
        </div>
    )
}

export default Piano;