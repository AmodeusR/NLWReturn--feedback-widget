import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import WidgetForm from "./WidgetForm";

const Widget = () => {
  return (
    <Popover className="absolute bottom-6 right-4 md:right-6 flex flex-col items-end">
      <Popover.Panel className="mb-4">
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="bg-brand-500 p-3 rounded-full center text-white hover:bg-brand-300 transition-colors group">
        <ChatTeardropDots color="white" className="h-8 w-8" />
        <span className="text-lg font-medium max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 ease">
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
};

export default Widget;
