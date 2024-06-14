import React from "react";

//sätta id högst upp
export default function Toolbar(props) {
  //props should be experiencedata from current/selected Experience
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
    //if one experience do nothing

    if (indexClickedId < 1) {
      return experienceData;
    } else {
      const previousExperience = experienceData[indexClickedId - 1];
      const currentExperience = experienceData[indexClickedId];
      const updatedExperienceData = [...experienceData];
      //switch experiences
      updatedExperienceData[indexClickedId] = previousExperience;
      updatedExperienceData[indexClickedId - 1] = currentExperience;
      props.updatedExperienceData(updatedExperienceData);
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

  function addExperience() {
    const newExperienceData = [...experienceData]; //ny lista, kopia av gamla experienceData
    newExperienceData.push(
      //lägg in ett nytt, tomt objekt sist i listan, med nytt id
      {
        id: nanoid(),
        data: {
          fromPeriod: "",
          toPeriod: "",
          companyName: "",
          city: "",
          tasks: "",
        },
      }
    );
    setExperienceData(
      newExperienceData //set state till den nya listan
    );
  }

  return (
    <div className="toolbar">
      <img
        name="bin"
        id={props.id}
        onClick={(event) => props.handleClick(event)}
        // onClick={props.handleClick}
        className="toolbar-icon cursor-pointer"
        src="../assets/bin.svg"
        handleClick={removeExperience}
      />

      <img
        id={props.id}
        name="arrow-up"
        onClick={(event) => props.handleClick(event)}
        className="toolbar-icon cursor-pointer"
        src="../assets/arrow-up.svg"
        handleClick={moveUpExperience}
      />

      <img
        id={props.id}
        name="arrow-down"
        onClick={(event) => props.handleClick(event)}
        className="toolbar-icon cursor-pointer"
        src="../assets/arrow-down.svg"
        handleClick={moveDownExperience}
      />

      <img
        name="plus"
        onClick={(event) => props.handleClick(event)}
        className="toolbar-icon cursor-pointer"
        src="../assets/plus.svg"
        handleClick={addExperience}
      />
    </div>
  );
}
