import React from "react";
import lofiBeat from "./../assets/lofi-beat.mp3";

export default function Audio() {
  return (
    <>
      <audio src={lofiBeat} controls autoPlay muted hidden />
    </>
  );
}
