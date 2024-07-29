import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [correctedval, setCorrectedval] = useState("");

  const customDictionary = {
    teh: "the",

    wrok: "work",

    fot: "for",

    exampl: "example",
  };

  const handleChange = (e) => {
    const inputText = e.target.value;
    setValue(inputText);

    const words = inputText.split(" ");
    let foundCorrection = false;

    for (const word of words) {
      if (customDictionary[word.toLowerCase()]) {
        setCorrectedval(customDictionary[word.toLowerCase()]);
        foundCorrection = true;
        break;
      }
    }

    if (!foundCorrection) {
      setCorrectedval("");
    }
  };

  return (
    <div className="App">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        cols="30"
        rows="10"
        placeholder="Enter text..."
        onChange={handleChange}
        value={value}
      ></textarea>
      {correctedval && (
        <>
          {" "}
          <p>Did you mean: {correctedval}?</p>
        </>
      )}
    </div>
  );
}

export default App;
