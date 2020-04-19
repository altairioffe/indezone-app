import React, { useState, useEffect } from "react";

//Sets display mode for Bio component
export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);
  const [mode, setMode] = useState(initial);

  const transition = function(mode, replace = false) {
    setMode(mode);
    if (replace === false) {
      setHistory(prevHistory => [...prevHistory, mode]);
    }
  };

  const back = function() {
    if (history.length === 1) {
      return;
    }
    history.pop();
    const prevItem = history[history.length - 1];
    setMode(prevItem);
  };

  return { mode, transition, back };
}
