import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getRandomArrayItem, getRandomNote } from "../../utils";

export function NoteRandomizer() {
  const [string, setString] = useState("");
  const [note, setNote] = useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    setString(getRandomArrayItem(data.strings));
    setNote(getRandomNote());
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
            name="strings"
            value="1"
            ref={register}
          />
          <label htmlFor="strings_1">1</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="strings_2"
            name="strings"
            value="2"
            ref={register}
          />
          <label htmlFor="strings_2">2</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="strings_3"
            name="strings"
            value="3"
            ref={register}
          />
          <label htmlFor="strings_3">3</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="strings_4"
            name="strings"
            value="4"
            ref={register}
          />
          <label htmlFor="strings_4">4</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="strings_5"
            name="strings"
            value="5"
            ref={register}
          />
          <label htmlFor="strings_5">5</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="strings_6"
            name="strings"
            value="6"
            ref={register}
          />
          <label htmlFor="strings_6">6</label>
        </div>

        <input type="submit" value="Show random note" />
      </form>

      <br />

      <div>
        <div>String - {string}</div>
        <div>Note - {note}</div>
      </div>
    </div>
  );
}
