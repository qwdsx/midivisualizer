'use client'
import * as Tone from "tone";
import midi from "./getMidiData";
import { Midi } from "@tonejs/midi";
import test from "@/misc/unravel.json";

interface NavbarProps {
    
}

const Navbar = ({  }: NavbarProps) => {
    console.log(test);
	const startButtonHandler = async () => {
		await Tone.start();
		const vol = new Tone.Volume(-30).toDestination();
        const synth = new Tone.PolySynth().connect(vol);
        test.tracks.forEach(track => {
            track.notes.forEach(note => {
		        synth.triggerAttackRelease(note.name, note.duration, note.time, note.velocity);
            })

            // //the control changes are an object
            // //the keys are the CC number
            // track.controlChanges[64]
            // //they are also aliased to the CC number's common name (if it has one)
            // track.controlChanges.sustains.forEach(cc => {
            //     // cc.ticks, cc.value, cc.time
            // })
        })
	}

    return (
        <div className="w-full h-[40px] bg-zinc-800 z-30">
            <button
                onClick={startButtonHandler}
                className="p-2 bg-amber-300"
            >
                Start
            </button>
            <div>
                <h1></h1>
            </div>
        </div>
    )
}

export default Navbar;