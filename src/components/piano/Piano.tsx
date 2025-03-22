import { PianoKey as PianoKeyType } from "@/util/types";
import pianoKeys from '@/misc/piano-keys.json';
import PianoKey from "./PianoKey";

interface PianoProps {
    pressedKeys: number[]
}

const Piano = ({ pressedKeys }: PianoProps) => {
    return (
        <div className="flex flex-row absolute bottom-0 h-[200px] w-full z-100">
            {pianoKeys.map((pianoKey: PianoKeyType, index: number) => {
                let isKeyPressed = (pressedKeys.find(e => e === pianoKey.midiNumber)) ? true : false;
                return (
                    <PianoKey
                        pianoKey={pianoKey}
                        isKeyPressed={isKeyPressed}
                        key={index}
                    />
                )
            })}
        </div>
    )
}

export default Piano;