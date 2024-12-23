import React, { useState } from "react";

function App() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); 
  };
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2>Options:</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <label>
          <input
            type="radio"
            name="choice"
            value="No"
            checked={selectedOption === "No"}
            onChange={handleOptionChange}
          />
          NO
        </label>
        <label>
          <input
            type="radio"
            name="choice"
            value="Yes"
            checked={selectedOption === "Yes"}
            onChange={handleOptionChange}
          />
          YES
        </label>
      </div>
      {selectedOption && (
        <h1 style={{ color: "black" }}>{selectedOption} was selected</h1>
      )}
    </div>
  );
}

export default App;