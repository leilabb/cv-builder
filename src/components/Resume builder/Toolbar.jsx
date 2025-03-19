import React from "react";

export default function Toolbar(props) {
  const experienceData = props.data;
  const setExperienceData = props.setExperienceData;

  function removeExperience(event) {
    const prevExperienceData = [...experienceData]; //kopia av gamla experience-listan
    const updatedExperienceData = prevExperienceData.filter((experience) => {
      return experience.id != event.target.id; //lägg in alla experiences som inte har id:t vi tryckt på och vill ta bort i nya listan updatedExpdata
    });
    setExperienceData(updatedExperienceData);
  }

  function moveUpExperience(event) {
    const clickedId = event.target.id;
    const indexClickedId = Object.values(experienceData).findIndex(
      (experience) => experience.id === clickedId
    );
    if (indexClickedId < 1) {
      return experienceData;
    } else {
      const previousExperience = experienceData[indexClickedId - 1];
      const currentExperience = experienceData[indexClickedId];
      const updatedExperienceData = [...experienceData];
      //switch experiences
      updatedExperienceData[indexClickedId] = previousExperience;
      updatedExperienceData[indexClickedId - 1] = currentExperience;
      setExperienceData(updatedExperienceData);
    }
  }

  function moveDownExperience(event) {
    const clickedId = event.target.id;
    const indexClickedId = Object.values(experienceData).findIndex(
      (experience) => experience.id === clickedId
    );
    const numberOfExperiences = Object.keys(experienceData).length;
    //if last element in list
    if (indexClickedId === numberOfExperiences - 1) {
      return experienceData;
    } else {
      const nextExperience = experienceData[indexClickedId + 1];
      const currentExperience = experienceData[indexClickedId];
      const updatedExperienceData = [...experienceData];
      //switch experiences
      updatedExperienceData[indexClickedId] = nextExperience;
      updatedExperienceData[indexClickedId + 1] = currentExperience;
      setExperienceData(updatedExperienceData);
    }
  }

  return (
    <div className="toolbar">
      <img
        name="bin"
        id={props.id}
        onClick={removeExperience}
        className="toolbar-icon cursor-pointer"
        src="../assets/bin.svg"
      />

      <img
        id={props.id}
        name="arrow-up"
        onClick={moveUpExperience}
        className="toolbar-icon cursor-pointer"
        src="../assets/arrow-up.svg"
      />

      <img
        id={props.id}
        name="arrow-down"
        className="toolbar-icon cursor-pointer"
        src="../assets/arrow-down.svg"
        onClick={moveDownExperience}
      />

      <img
        name="plus"
        className="toolbar-icon cursor-pointer"
        src="../assets/plus.svg"
        onClick={props.addExperience}
      />
    </div>
  );
}
