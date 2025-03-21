import { note } from "@/util/types";
import notes from '@/misc/notes.json';
import VisualizerPianoKey from "./VisualizerPianoKey";

interface VisualizerPianoProps {
    pressedKeys: number[]
}

const VisualizerPiano = ({ pressedKeys }: VisualizerPianoProps) => {
    return (
        <div className="flex flex-row min-h-screen w-full">
            {notes.map((note: note, index: number) => {
                let isKeyPressed = (pressedKeys.find(e => e === note.midiNumber)) ? true : false;
                return (
                    <VisualizerPianoKey
                        note={note}
                        isKeyPressed={isKeyPressed}
                        key={index}
                    />
                )
            })}
        </div>
    )
}

export default VisualizerPiano;