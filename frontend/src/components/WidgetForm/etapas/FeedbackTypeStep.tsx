import { feedbackTypes, FeedbackType } from "..";
import CloseButton from "../../CloseButton";

interface Props {
  setFeedbackType: (type: FeedbackType) => void;
}

const FeedbackTypeStep = ({ setFeedbackType }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="title justify-center text-xl flex items-center gap-2">
        <h2>Deixe seu feedback</h2>
        <CloseButton className="absolute right-5 top-5.5" />
      </div>
      <div className="options flex flex-col xs:flex-row gap-4 ">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            type="button"
            className="option"
            onClick={() => setFeedbackType(key as FeedbackType)}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <p>{value.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeedbackTypeStep;
