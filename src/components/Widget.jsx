import React from "react";
import { ChatTeardropDots } from "phosphor-react";

const Widget = () => {
  return (
    <button className="bg-violet-500 p-5 rounded-full">
      <ChatTeardropDots color="white" className="h-12 w-12" />
    </button>
  );
};

export default Widget;
