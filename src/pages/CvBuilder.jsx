import React from "react";
import Header from "../Header";
import Experience from "../Experience";
import Preview from "../Preview";
import { nanoid } from "nanoid";
import "../style.css";

export default function CvBuilder() {
  //initialize state from whatever is stored in localstorage. if there is nothing in localstorage: return object with empty data but a new id.
  const [experienceData, setExperienceData] = React.useState(
    JSON.parse(localStorage.getItem("experiences")) || []
  );

  const [togglePreview, setTogglePreview] = React.useState(
    localStorage.getItem("toggle") || false
  );

  //så state sparas i localstorage mellan reloads
  React.useEffect(() => {
    localStorage.setItem("experiences", JSON.stringify(experienceData));

    localStorage.setItem("toggle", togglePreview);
  }, [experienceData, togglePreview]);

  //sets experienceData. This map returns list of Experience components.
  const allExperienceData =
    Object.keys(experienceData).length > 0 && Array.isArray(experienceData) ? (
      // OM experienceData inte är tom

      experienceData.map((experience) => (
        <Experience
          key={experience.id}
          id={experience.id}
          fromPeriod={experience.data.fromPeriod}
          toPeriod={experience.data.toPeriod}
          companyName={experience.data.companyName}
          city={experience.data.city}
          tasks={experience.data.tasks}
          addExperience={addExperience} //prop to reach the addExperience function here in App from Experience
          removeExperience={removeExperience}
          onChange={onChange}
          moveUpExperience={moveUpExperience}
          moveDownExperience={moveDownExperience}
        />
      ))
    ) : (
      <div>
        <h3 className="button" onClick={addExperience}>
          ADD A NEW EXPERIENCE
        </h3>
        <img width="70px" height="70px" src="../assets/plus.svg" />
      </div>
    ); //om experienceData tom

  const previewExperiencesData =
    Object.keys(experienceData).length > 0 ? ( // OM experienceData inte är tom
      experienceData.map((experience) => (
        <div>
          <Preview
            key={experience.id}
            id={experience.id}
            fromPeriod={experience.data.fromPeriod}
            toPeriod={experience.data.toPeriod}
            companyName={experience.data.companyName}
            city={experience.data.city}
            tasks={experience.data.tasks}
          />
        </div>
      ))
    ) : (
      <div>
        <h3 className="button" onClick={addExperience}>
          There's nothing to preview
        </h3>
      </div>
    ); //om experienceData tom

  //updates state with input of that particular component (with help of ID from event)
  function onChange(event) {
    const { name } = event.target; //destructure event

    const updatedExperienceData = experienceData.map((experience) => {
      return experience.id === event.target.id
        ? {
            ...experience,
            data: {
              ...experience.data,
              [name]: event.target.value,
            },
          }
        : experience; // else return experience
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

  function addExperience() {
    const newExperienceData = [...experienceData]; //ny lista, kopia av gamla experienceData
    newExperienceData.push(
      //lägg in ett nytt, tomt objekt sist i listan, med nytt id
      {
        id: nanoid(), //new id
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

  function removeExperience(event) {
    const prevExperienceData = [...experienceData]; //kopia av gamla experience-listan
    const updatedExperienceData = prevExperienceData.filter((experience) => {
      return experience.id != event.target.id; //lägg in alla experiences som inte har id:t vi tryckt på och vill ta bort i nya listan updatedExpdata
    });
    setExperienceData(updatedExperienceData);
  }

  function toggle() {
    setTogglePreview((prevToggleState) => !prevToggleState);
  }

  return (
    <div className="myContainer">
      <button
        className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={toggle}
      >
        {togglePreview ? "Edit" : "Preview"}
      </button>
      <Header />
      <div className="myContainer">
        {togglePreview && <div>{previewExperiencesData}</div>}
        {!togglePreview && <div>{allExperienceData}</div>}
      </div>
      <p className="footer-text ">CV Builder by Leila ©</p>
    </div>
  );
}
