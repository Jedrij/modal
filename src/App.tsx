import React, { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <section className="App">
      <button onClick={() => setIsOpened((opened) => !opened)}>
        Create Report
      </button>
      {isOpened && <Modal action={() => setIsOpened((opened) => !opened)} />}
    </section>
  );
}

export default App;
