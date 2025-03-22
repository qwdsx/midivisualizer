import VisualizerPiano from './VisualizerPiano';

interface VisualizerProps {
    pressedKeys: number[]
}

const Visualizer = ({ pressedKeys }: VisualizerProps) => {
    return (
        <div className="flex flex-row h-full w-full">
			<VisualizerPiano pressedKeys={pressedKeys} />
        </div>
    )
}

export default Visualizer;