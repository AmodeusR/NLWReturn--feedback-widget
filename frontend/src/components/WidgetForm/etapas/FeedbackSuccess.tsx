import CloseButton from "../../CloseButton";
import successIcon from "../../../assets/success.svg";
import { FeedbackType } from "..";

interface Props {
  setFeedbackSent: (type: boolean) => void;
  setFeedbackType: (type: FeedbackType | null) => void;
}

const FeedbackSuccess = ({ setFeedbackSent, setFeedbackType }: Props) => {
  const handleNewFeedbackRequest = () => {
    setFeedbackSent(false);
    setFeedbackType(null);
  }
  
  return (
    <>
      <CloseButton />
      <div className="py-8 pb-4 flex flex-col items-center md:min-w-[304px]">
        <img src={successIcon} alt="" />
        <h2 className="text-xl font-medium">Agradecemos o feedback!</h2>
        <button
          onClick={handleNewFeedbackRequest}
          className="
            px-6 py-2 bg-zinc-800 mt-4 rounded hover:bg-zinc-700 transition-colors
            focus:outline-none focus:ring-zinc-700 focus:ring-offset-2 focus:ring-2 ring-offset-zinc-900
          "
          type="button"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
};

export default FeedbackSuccess;
