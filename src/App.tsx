import { useState } from "react";
import Widget from "./components/Widget";
import { ChatTeardropDots } from "phosphor-react";

function App() {
  return (
    <div className="App">
      {/* <Widget /> */}

      <button className="bg-violet-500 p-2 rounded-full">
        <ChatTeardropDots color="white" className="h-10 w-10" />
      </button>
    </div>
  );
}

export default App;
