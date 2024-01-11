import React from "react";

export default function Toolbar(props) {
  //should be returned within each Experience
  //props should be experiencedata from current/selected Experience
  return (
    <div className="toolbar">
      {/* Bin icon */}
      <img
        name="bin"
        id={props.id}
        onClick={(event) => props.handleClick(event)}
        className="toolbar-icon"
        src="../assets/bin.svg"
      />

      {/* Up arrow icon */}
      <img
        id={props.id}
        name="arrow-up"
        onClick={(event) => props.handleClick(event)}
        className="toolbar-icon"
        src="../assets/arrow-up.svg"
      />

      {/* Down arrow icon */}
      <img
        name="arrow-down"
        onClick={(event) => props.handleClick(event)}
        className="toolbar-icon"
        src="../assets/arrow-down.svg"
      />

      {/* Plus icon */}
      <img
        name="plus"
        onClick={(event) => props.handleClick(event)}
        className="toolbar-icon"
        src="../assets/plus.svg"
      />
    </div>
  );
}
