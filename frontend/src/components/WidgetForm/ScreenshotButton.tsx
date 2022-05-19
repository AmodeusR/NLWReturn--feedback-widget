import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import Loading from "./Loading";

interface Props {
  screenshot?: string | null;
  setScreenshot: (type: string | null) => void; 
}

const ScreenshotButton = ({ screenshot, setScreenshot }: Props) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);
  const handleScreenshot = async () => {
    setIsTakingScreenshot(true);

    const screenshot = await html2canvas(document.querySelector("html")!);
    const base64Image = screenshot.toDataURL("image/png");

    setScreenshot(base64Image);
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        onClick={() => setScreenshot(null)}
        className="
          p-1 bg-zinc-600 flex justify-end items-end min-h-[2.75rem] min-w-[2.75rem] rounded
        text-zinc-400 hover:text-zinc-100 transition-colors
        "
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 150
        }}
      >
        <Trash weight="fill" />
      </button>
    )
  }

  return (
    <button
      type="button"
      className="
      bg-zinc-800 rounded p-2.5 hover:bg-zinc-700 transition-colors
        focus:outline-none focus:ring-zinc-700 focus:ring-offset-2 focus:ring-2 ring-offset-zinc-900  
      "
      onClick={handleScreenshot}
    >
      {isTakingScreenshot ? 
        <Loading /> :
        <Camera className="h-6 w-6 text-zinc-100" />
      }
    </button>
  );
};

export default ScreenshotButton;
