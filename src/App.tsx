import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import DemoList from "./components/Demo/DemoList";

function App() {
  const [listTitle, setListTitle] = useState<string>("My List");
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

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  console.log("App RUNNING");

  return (
    <div className="app">
      <DemoList title={listTitle} items={[5, 3, 1, 10, 9]} />
      <DemoOutput show={showParagraph} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
