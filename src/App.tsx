import React from "react";
import { NoteRandomizer } from "./components/NoteRandomizer";
import { NoteReference } from "./components/NoteReference";
import { NoteGenerator } from "./components/NoteGenerator";

function App() {
  return (
    <div className="App">
      <NoteReference />
      <NoteRandomizer />
      <NoteGenerator />
    </div>
  );
}

export default App;
