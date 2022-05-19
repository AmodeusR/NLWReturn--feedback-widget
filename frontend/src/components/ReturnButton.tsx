import { ArrowLeft } from "phosphor-react";
import { FeedbackType } from "./WidgetForm";

interface Props {
  handleFeedbackRestart: () => void;
}

const ReturnButton = ({ handleFeedbackRestart }: Props) => {
  return (
    <button
      className="absolute left-5 top-5.5 text-zinc-400 hover:text-zinc-100 transition-colors"
      type="button"
      onClick={() => handleFeedbackRestart()}
    >
      <ArrowLeft weight="bold" className="w-4 h-4" />
    </button>
  );
};

export default ReturnButton;
