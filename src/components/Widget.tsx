import { ChatTeardropDots, X, ArrowLeft } from "phosphor-react";
import { Popover } from "@headlessui/react";

const Widget = () => {

  return (
    <Popover className="absolute bottom-6 right-6">
      <Popover.Panel>
      <div className="bg-zinc-900 p-4 rounded flex flex-col text-white gap-4">
      <div className="title text-xl flex items-center gap-2 justify-between">
        <ArrowLeft />
        <h2>Deixe seu feedback</h2>
        <X weight="bold" />
      </div>
        <div className="options flex gap-4">
          <button className="option bg-zinc-800 p-4 rounded hover:bg-zinc-700 transition-colors">
            <p>Problema</p>
          </button>
          <button className="option bg-zinc-800 p-4 rounded hover:bg-zinc-700 transition-colors">
            <p>Idéia</p>
          </button>
          <button className="option bg-zinc-800 p-4 rounded hover:bg-zinc-700 transition-colors">
            <p>Outro</p>
          </button>
        </div>
    </div>
      </Popover.Panel>

      <Popover.Button
        className="bg-brand-500 p-3 rounded-full center text-white hover:bg-brand-600 transition-colors group"
      >
        <ChatTeardropDots color="white" className="h-8 w-8" />
        <span className="text-lg font-medium max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 ease">Feedback</span>
      </Popover.Button>
    </Popover>
  );
};

export default Widget;
