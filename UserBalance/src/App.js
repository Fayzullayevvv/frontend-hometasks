import React, { useState } from "react";

function App() {
  const [balance, setBalance] = useState(13000);

  const handleChangeBalance = () => {
    const newBalance = Math.floor(Math.random() * (20000 - 1000 + 1)) + 1000;
    setBalance(newBalance);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#333", color: "white", height: "100vh", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90%" }}>
        <div style={{ backgroundColor: "#0099cc", color: "black", padding: "20px", borderRadius: "10px", width: "60%" }}>
          <h1>User</h1>
          <p><strong>FirstName:</strong> Abdulla</p>
          <p><strong>LastName:</strong> Oripov</p>
          <div style={{ marginTop: "20px" }}>
            <h2>Balance</h2>
            <div style={{ backgroundColor: "#222", color: "white", padding: "10px", borderRadius: "5px" }}>
              <p><strong>User balance</strong></p>
              <p>{balance}</p>
              <button
                onClick={handleChangeBalance}
                style={{
                  backgroundColor: -"green",
                  color: "white",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                change balance
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
