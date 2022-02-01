import { useState } from "react";
import "./App.css";
import { CreateReportForm } from "./components/CreateReportForm";
import { Modal } from "./components/Modal";

const days: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const toggleOpen = () => setIsOpened((opened) => !opened);
  const formId = "createReport";
  return (
    <section className="App">
      <button onClick={toggleOpen}>Create Report</button>
      {isOpened && (
        <Modal onCancel={toggleOpen} title="Create Report" formId={formId}>
          <CreateReportForm days={days} formId={formId} />
        </Modal>
      )}
    </section>
  );
}

export default App;
