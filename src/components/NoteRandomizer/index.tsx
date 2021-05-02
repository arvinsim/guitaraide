import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {draw} from 'vexchords';

import {getRandomArrayItem, getRandomNote} from "../../utils";

export function NoteRandomizer() {
    const EL_ID = 'note-randomizer-output'
    const [stringNumber, setStringNumber] = useState("");
    const [note, setNote] = useState("");
    const {register, handleSubmit} = useForm();
    const onSubmit = (data: { strings: Array<string> }) => {
        const randomStringNumber = getRandomArrayItem(data.strings)
        const randomNote = getRandomNote()
        setStringNumber(randomStringNumber);
        setNote(randomNote);
        draw(`#${EL_ID}`, getChordConfig(randomStringNumber, randomNote));
    };

    return (
        <div>
            <h1>Note Randomizer</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Strings to include</h2>
                <div>
                    <input
                        type="checkbox"
                        id="strings_1"
                        defaultValue="1"
                        {...register('strings')}
                    />
                    <label htmlFor="strings_1">1</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="strings_2"
                        defaultValue="2"
                        {...register('strings')}
                    />
                    <label htmlFor="strings_2">2</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="strings_3"
                        defaultValue="3"
                        {...register('strings')}
                    />
                    <label htmlFor="strings_3">3</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="strings_4"
                        defaultValue="4"
                        {...register('strings')}
                    />
                    <label htmlFor="strings_4">4</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="strings_5"
                        defaultValue="5"
                        {...register('strings')}
                    />
                    <label htmlFor="strings_5">5</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="strings_6"
                        defaultValue="6"
                        {...register('strings')}
                    />
                    <label htmlFor="strings_6">6</label>
                </div>
                <input type="submit" value="Show random note"/>
            </form>
            <br/>
            <div>
                <div>String - {stringNumber}</div>
                <div>Note - {note}</div>
                <div id={EL_ID}/>
            </div>
        </div>
    );
}

function getChordConfig(stringNumber: string, note: string) {
    const stringMappings: Record<string, Array<string>> = {
        '1': ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'],
        '2': ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
        '3': ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G',],
        '4': ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D',],
        '5': ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A',],
        '6': ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'],
    }
    const fret = stringMappings[stringNumber].indexOf(note) + 1
    const chord: Array<[number, number | string, number?]> = [
        [1, 'x'],
        [2, 'x'],
        [3, 'x'],
        [4, 'x'],
        [5, 'x'],
        [6, 'x'],
    ]
    const itemToFind: [number, number | string, number?] = [parseInt(stringNumber, 10), 'x']
    const i = chord.findIndex(item => {
        return JSON.stringify(item) === JSON.stringify(itemToFind)
    });
    chord[i] = [Number(stringNumber), fret, 1]
    const chordConfig: { chord: object, position?: number} = { chord }
    if (fret > 5) {
        chordConfig.position = fret - 3
    }
    return chordConfig
}
