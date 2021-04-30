import React from "react";
import GuitarFretBoardImage from "./guitar-fretboard.jpg";

export function NoteReference() {
  return (
    <div>
      <h1>Note Reference</h1>
      <img src={GuitarFretBoardImage} alt={"Guitar Fretboard"} />
    </div>
  );
}
