import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getRandomNote } from "../../utils";

export function NoteGenerator() {
  const [notes, setNotes] = useState<Array<string>>([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    let notesList = [];
    for (let x = 0; x < data.numberOfNotes; x++) {
      notesList.push(getRandomNote());
    }
    setNotes(notesList);
  };

  return (
    <div>
      <h1>Note Generator</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type={"text"} name={"numberOfNotes"} ref={register} />
        <input type="submit" value="Generate notes" />
      </form>
      <div>
        {notes.map((note) => {
          return `${note} `;
        })}
      </div>
    </div>
  );
}
