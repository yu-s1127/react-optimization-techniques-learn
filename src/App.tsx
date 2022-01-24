import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState<boolean>(false);
  const [allowToggle, setAllowToggle] = useState<boolean>(false);

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((previousShowParagraph) => !previousShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = useCallback(() => {
    setAllowToggle(true);
  }, []);

  console.log("App RUNNING");

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
