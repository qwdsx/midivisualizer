import { PianoKey as PianoKeyType } from "@/util/types";
import pianoKeys from '@/misc/piano-keys.json';
import VisualizerPianoKey from "./VisualizerPianoKey";

interface VisualizerPianoProps {
    pressedKeys: number[]
}

const VisualizerPiano = ({ pressedKeys }: VisualizerPianoProps) => {
    return (
        <div className="flex flex-row min-h-screen w-full">
            {pianoKeys.map((pianoKey: PianoKeyType, index: number) => {
                let isKeyPressed = (pressedKeys.find(e => e === pianoKey.midiNumber)) ? true : false;
                return (
                    <VisualizerPianoKey
                        pianoKey={pianoKey}
                        isKeyPressed={isKeyPressed}
                        key={index}
                    />
                )
            })}
        </div>
    )
}

export default VisualizerPiano;