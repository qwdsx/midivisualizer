'use client'
import Navbar from "@/components/Navbar";
import Piano from "@/components/piano/Piano";
import * as fs from 'fs';
import { Midi } from '@tonejs/midi';
import * as Tone from "tone";
import { useState } from "react";
import test from "@/misc/unknown_1.json";
import MidiVisualizer from "@/components/visualizer/MidiVisualizer";
import { calculatePlaybackDurationSeconds } from "@/util/util";
import { Duration } from "@/components/duration/Duration";

const Home = () => {
	const [pressedKeys, setPressedKeys] = useState<number[]>([]);
	const [isPlaying, setIsPlaying] = useState(false);

	const delayForNoteGraphics = (note: any) => {
		setTimeout(() => {
			setPressedKeys(prev => [...prev, note.midi]);
		}, note.time * 1000)
		setTimeout(() => {
			setPressedKeys(prev => prev.filter(e => e !== note.midi));
		}, (note.time + note.duration) * 1000)
	}

	const playbackDurationSeconds = calculatePlaybackDurationSeconds(test.tracks[0].endOfTrackTicks, test.header.ppq, test.header.tempos[0].bpm);

	const startButtonHandler = async () => {
		await Tone.start();
        const synth = new Tone.PolySynth(Tone.Synth, {
			"volume": -25,
		}).toDestination();
		const now = Tone.now();
        test.tracks.forEach(track => {
            track.notes.forEach(note => {
		        synth.triggerAttackRelease(note.name, note.duration, note.time, note.velocity);
				delayForNoteGraphics(note);
            })

            // //the control changes are an object
            // //the keys are the CC number
            // track.controlChanges[64]
            // //they are also aliased to the CC number's common name (if it has one)
            // track.controlChanges.sustains.forEach(cc => {
            //     // cc.ticks, cc.value, cc.time
            // })
        });
		setIsPlaying(true);
	}

	return (
		<div>
			{/* <Navbar /> */}
			<div className="w-full p-2 bg-zinc-800 flex flex-row gap-2">
				<button
					onClick={startButtonHandler}
					className="p-2 bg-amber-300 cursor-pointer"
				>
					Start
				</button>
				<div className="p-2 flex flex-row gap-1 text-white">
					<p>Duration:</p>
					<Duration isPlaying={isPlaying} durationSeconds={playbackDurationSeconds} />
				</div>
			</div>
			
			<div className="w-full h-full">
				<MidiVisualizer pressedKeys={pressedKeys} />
				<Piano pressedKeys={pressedKeys} />
			</div>
		</div>
	)
}

export default Home;