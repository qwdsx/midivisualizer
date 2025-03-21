'use server'
import * as fs from 'fs';
import { Midi } from '@tonejs/midi';

const midiData = fs.readFileSync("public/wasteland.mid");
const midi2 = await Midi.fromUrl("public/wasteland.mid");
const midi = new Midi(midiData);

console.log("test");

export default midi;