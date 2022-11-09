import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const useBeforeLeave = onBefore => {
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);

  if(typeof onBefore !== "function") {
    return;
  }
  
  const handle = event => {
    const { clientY } = event;
    if(clientY <= 0){
      onBefore();
    }
  };
};

const App = () => {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  )
}

export default App;