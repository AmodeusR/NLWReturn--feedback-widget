import { ArrowLeft } from "phosphor-react";
import CloseButton from "./CloseButton";

import bugImageUrl from "../assets/bug.svg";
import ideaImageUrl from "../assets/idea.svg";
import thoughtImageUrl from "../assets/thought.svg";

const feedbackTypes = {
  bug: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: ""
    }
  },
  idea: {
    title: "Idéia",
    image: {
      source: ideaImageUrl,
      alt: ""
    }
  },
  other: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: ""
    }
  }
};

const WidgetForm = () => {
  return (
    <div className="bg-zinc-900 p-4 rounded-lg flex flex-col text-white gap-8 w-[calc(100vw-2rem)] md:w-auto">
      <div className="title text-xl flex items-center gap-2 justify-between">
        <h2>Deixe seu feedback</h2>
        <CloseButton />
      </div>
      <div className="options flex gap-4 ">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button key={key} type="button" className="option">
            <img src={value.image.source} alt={value.image.alt} />
            <p>{value.title}</p>
          </button>
        ))}
      </div>
      <footer className="self-center text-zinc-300 text-sm font-medium">
        Feito por{" "}
        <a href="https://github.com/amodeusr" target="_blank"
          className="underline underline-offset-2 decoration-solid hover:text-brand-600 transition-colors "
        >
          Amodeus R.
        </a>{" "}
      </footer>
    </div>
  );
};

export default WidgetForm;
