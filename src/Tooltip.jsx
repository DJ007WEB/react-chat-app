import { useState } from "react";
import Popup from "./Popup";

export default function Tooltip() {
  const [isOpen, setIsOpen] = useState(false);

  const [position, setPosition] = useState("right");

  function handleEnter() {
    setIsOpen(true);
  }

  function handleLeave() {
    setIsOpen(false);
  }

  return (
    <div className="h-screen border-solid border-2 border-blue-800 flex justify-center items-center flex-col gap-24">
      <div className="flex gap-10">
        <button className={`button ${position === 'top' ? 'active' : ""}`} onClick={() => setPosition('top')}>Top</button>
        <button className={`button ${position === 'right' ? 'active' : ""}`} onClick={() => setPosition('right')}>Right</button>
        <button className={`button ${position === 'bot' ? 'active' : ""}`} onClick={() => setPosition('bot')}>Bottom</button>
        <button className={`button ${position === 'left' ? 'active' : ""}`} onClick={() => setPosition('left')}>Left</button>
      </div>
      <div className="flex">
        <span
          className="cursor-pointer"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          Hover over me
        </span>
        {isOpen && (
          <Popup position={position}>
            Thanks for hover hovering over me. I am a tooltip
          </Popup>
        )}
      </div>
    </div>
  );
}
