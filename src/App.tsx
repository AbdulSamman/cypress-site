import "./App.scss";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  return (
    <div className="App">
      <h1>Info Site</h1>
      <p>Welcome to this site.</p>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {message.length > 0 && (
        <div className="showMessage">
          Your message has
          <span data-cy="numberOfChars" className="numberOfChars">
            {message.length}
          </span>
          characters.
        </div>
      )}
    </div>
  );
}

export default App;
