import { FormEvent, useState } from "react";

import CloseButton from "../../CloseButton";
import ReturnButton from "../../ReturnButton";
import ScreenshotButton from "../ScreenshotButton";

import { FeedbackType, feedbackTypes } from "..";
import api from "../../../lib/api";
import Loading from "../Loading";

export interface FeedbackContentProps {
  feedbackType: FeedbackType;
  handleFeedbackRestart: () => void;
  setFeedbackSent: (type: boolean) => void;
}

const FeedbackContent = ({ feedbackType, handleFeedbackRestart, setFeedbackSent }: FeedbackContentProps) => {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [feedbackComment, setFeedbackComment] = useState("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmission = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setIsSendingFeedback(true);

      await api.post("/feedbacks", {
        type: feedbackTypeInfo.title,
        comment: feedbackComment,
        screenshot
      });
      
      setFeedbackSent(true);
    } catch (error) {
      console.warn(error);
      setError(true);
    } finally {
      setIsSendingFeedback(false);
    }
    
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="title text-xl flex items-center self-center">
        <ReturnButton handleFeedbackRestart={handleFeedbackRestart} />
        <h2 className="flex items-center gap-1.5 font-medium">
          <img
            className="h-6 w-6"
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
          />
          {feedbackTypeInfo.title}
        </h2>
        <CloseButton />
      </div>

      <form className="flex flex-col gap-2" onSubmit={handleSubmission}>
        <textarea
          placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
          className="
            md:min-w-[304px] min-h-[112px] text-sm rounded bg-transparent px-2 py-1
          border-zinc-600 resize-none leading-5
            focus:outline-none transition-colors focus:ring-brand-500 
            scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent
          "
          onChange={(e) => setFeedbackComment(e.target.value)}
          value={feedbackComment}
        ></textarea>
        <div className="buttons flex gap-2 w-full">
          <ScreenshotButton setScreenshot={setScreenshot} screenshot={screenshot} />
          <button
            disabled={feedbackComment.length === 0 || isSendingFeedback}
            type="submit"
            className="
              bg-brand-500 rounded p-2 font-medium hover:bg-brand-300 transition-colors flex-1
              focus:outline-none focus:ring-brand-500 focus:ring-offset-2 focus:ring-2 ring-offset-zinc-900
              disabled:opacity-50 disabled:hover:bg-brand-500
          ">
            { isSendingFeedback ?
              <Loading /> :
              error ?
              "Algo deu errado :(" :
              "Enviar Feedback"
            }
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackContent;
