import { useState } from "react";

import FeedbackTypeStep from "./etapas/FeedbackTypeStep";
import FeedbackContent from "./etapas/FeedbackContent";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import FeedbackSuccess from "./etapas/FeedbackSuccess";

export const feedbackTypes = {
  bug: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "",
    },
  },
  idea: {
    title: "Idéia",
    image: {
      source: ideaImageUrl,
      alt: "",
    },
  },
  other: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleFeedbackRestart = () => {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 rounded-lg flex flex-col  text-white gap-4 w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? 
        <FeedbackSuccess setFeedbackSent={setFeedbackSent} setFeedbackType={setFeedbackType} /> :
        <>
        {!feedbackType ? 
          <FeedbackTypeStep setFeedbackType={setFeedbackType} /> :
          <FeedbackContent feedbackType={feedbackType} handleFeedbackRestart={handleFeedbackRestart} setFeedbackSent={setFeedbackSent} />
        }        
        </>
      }
      <footer className="text-zinc-400 text-sm font-medium self-center">
        Feito por{" "}
        <a
          href="https://github.com/amodeusr"
          target="_blank"
          className="underline underline-offset-2 decoration-solid hover:text-brand-300 transition-colors focus:outline-none focus:text-brand-300 "
        >
          Amodeus R.
        </a>{" "}
      </footer>
    </div>
  );
};

export default WidgetForm;
