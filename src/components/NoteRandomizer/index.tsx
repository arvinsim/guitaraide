import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {getRandomArrayItem, getRandomNote} from "../../utils";

export function NoteRandomizer() {
    const [stringNumber, setStringNumber] = useState("");
    const [note, setNote] = useState("");
    const [jtabOutput, setJTabOutput] = useState("")
    const {register, handleSubmit} = useForm();
    const onSubmit = (data: { strings: Array<string> }) => {
        const randomStringNumber = getRandomArrayItem(data.strings)
        const randomNote = getRandomNote()
        setStringNumber(randomStringNumber);
        setNote(randomNote);
        setJTabOutput(getjTabOutput(randomStringNumber, randomNote))
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
                <div className="jtab">{jtabOutput}</div>
            </div>
        </div>
    );
}

function getjTabOutput(stringNumber: string, note: string) {
    const stringMappings: Record<string, Array<string>> = {
        '1': ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'],
        '2': ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
        '3': ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G',],
        '4': ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D',],
        '5': ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A',],
        '6': ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'],
    }

    const fret = stringMappings[stringNumber].indexOf(note)
    let output= new Map<string, string>()
    output.set('6', 'X/X')
    output.set('5', 'X/X')
    output.set('4', 'X/X')
    output.set('3', 'X/X')
    output.set('2', 'X/X')
    output.set('1', 'X/X')
    output.set(stringNumber, `${fret}/1`)
    return '%' + Object.entries(output).map(([key, value]) => {
        return value
    }).join('.')
}
