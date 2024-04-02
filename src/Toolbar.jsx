import React from "react";

export default function Toolbar(props) {
  //props should be experiencedata from current/selected Experience
  return (
    <div className="toolbar">
      <img
        name="bin"
        id={props.id}
        onClick={(event) => props.handleClick(event)}
        className="toolbar-icon cursor-pointer"
        src="../assets/bin.svg"
      />

      <img
        id={props.id}
        name="arrow-up"
        onClick={(event) => props.handleClick(event)}
        className="toolbar-icon cursor-pointer"
        src="../assets/arrow-up.svg"
      />

      <img
        id={props.id}
        name="arrow-down"
        onClick={(event) => props.handleClick(event)}
        className="toolbar-icon cursor-pointer"
        src="../assets/arrow-down.svg"
      />

      <img
        name="plus"
        onClick={(event) => props.handleClick(event)}
        className="toolbar-icon cursor-pointer"
        src="../assets/plus.svg"
      />
    </div>
  );
}
