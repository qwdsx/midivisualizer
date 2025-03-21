import VisualizerPiano from './VisualizerPiano';

interface MidiVisualizerProps {
    pressedKeys: number[]
}

const MidiVisualizer = ({ pressedKeys }: MidiVisualizerProps) => {
    return (
        <div className="flex flex-row h-full w-full">
			<VisualizerPiano pressedKeys={pressedKeys} />
        </div>
    )
}

export default MidiVisualizer;