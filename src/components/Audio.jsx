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
          className={`md:w-7 md:h-7 md:right-[3rem] 
             w-12 h-12 cursor-pointer 
              mt-4 z-20 fixed 
            ${isDarkMode && "text-white"}
          `}
        />
      )}
      {!isSoundOn && (
        <SpeakerXMarkIcon
          onClick={handleSound}
          className={`md:w-7 md:h-7 md:right-[3rem] 
            w-12 h-12 cursor-pointer
              mt-4 z-20 fixed 
            ${isDarkMode && "text-white"}
          `}
        />
      )}
    </div>
  );
}
