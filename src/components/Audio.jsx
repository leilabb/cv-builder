import React from "react";
import lofiBeat from "./../assets/lofi-beat.mp3";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/16/solid";

export default function Audio({
  playerRef,
  isDarkMode,
  isSoundOn,
  handleSound,
}) {
  return (
    <div>
      <audio id="player" ref={playerRef} src={lofiBeat} hidden controls />
      {isSoundOn && (
        <SpeakerWaveIcon
          onClick={handleSound}
          className={`w-7 h-7 cursor-pointer right-8 z-20 fixed 
            ${isDarkMode && "text-white"}
          `}
        />
      )}
      {!isSoundOn && (
        <SpeakerXMarkIcon
          onClick={handleSound}
          className={`w-7 h-7 cursor-pointer right-8 z-20 fixed 
            ${isDarkMode && "text-white"}
          `}
        />
      )}
    </div>
  );
}
