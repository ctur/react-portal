import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ModalProvider, Modal } from "./Modal";
import "./index.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalProvider>
      <form
        onSubmit={event => {
          event.preventDefault();
          console.log("parent form submit");
        }}
      >
        <h1>My App</h1>
        <button type="button" onClick={() => setIsModalOpen(true)}>
          Open App Modal
        </button>
        <Page />
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <form
              onSubmit={event => {
                event.preventDefault();
                console.log("modal submit");
              }}
            >
              <p>App Modal</p>
              <button type="submit">Go</button>
            </form>
          </Modal>
        )}
      </form>
    </ModalProvider>
  );
}

function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open page modal</button>
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          style={{ width: 400, textAlign: "center" }}
        >
          <p>Page Modal</p>
        </Modal>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
