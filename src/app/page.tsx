'use client'
import Navbar from "@/components/Navbar";
import Piano from "@/components/piano/Piano";
import * as Tone from "tone";
import { useState } from "react";
import midiFileJson from "@/misc/unknown_1.json";
import Visualizer from "@/components/visualizer/Visualizer";

const Home = () => {
	const [pressedKeys, setPressedKeys] = useState<number[]>([]);
	const [timeouts, setTimeouts] = useState<NodeJS.Timeout[]>([]);
	const [isPlaying, setIsPlaying] = useState(false);

	const delayForPianoKeyGraphics = (note: any) => {
		const timeoutAdd = setTimeout(() => {
			setPressedKeys(prev => [...prev, note.midi]);
		}, note.time * 1000)
		const timeoutRemove = setTimeout(() => {
			setPressedKeys(prev => prev.filter(e => e !== note.midi));
		}, (note.time + note.duration) * 1000)

		setTimeouts(prev => [...prev, timeoutAdd, timeoutRemove]);
	}

	const startButtonHandler = () => {
		Tone.getTransport().start();
        const synth = new Tone.PolySynth(Tone.Synth, {
			"volume": -25,
		}).toDestination();
        midiFileJson.tracks.forEach(track => {
            track.notes.forEach(note => {
		        synth.triggerAttackRelease(note.name, note.duration, note.time, note.velocity);
				delayForPianoKeyGraphics(note);
            })
        });
		setIsPlaying(true);
	}

	const pauseButtonHandler = () => {
		Tone.getTransport().pause();
		timeouts.forEach(timeout => {
			clearTimeout(timeout);
		})
		setPressedKeys([]);
		setIsPlaying(false);
	}

	return (
		<div>
			<Navbar
				startButtonHandler={startButtonHandler}
				pauseButtonHandler={pauseButtonHandler}
			/>
			<div>
				<Visualizer pressedKeys={pressedKeys} />
				<Piano pressedKeys={pressedKeys} />
			</div>
		</div>
	)
}

export default Home;