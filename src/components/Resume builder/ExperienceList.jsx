import React from "react";
import { PlusIcon } from "@heroicons/react/20/solid";
import Experience from "./Experience";

export default function ExperienceList(props) {
  const experiences = props.data;
  const setExperienceData = props.setExperienceData;
  const addExperience = props.addExperience;

  //updates state with input of that particular component (with help of ID from event)
  function onChange(event, experienceId) {
    const { name } = event.target;
    const updatedExperienceData = experiences.map((experience) => {
      return experience.id === experienceId
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

  //should return a form loaded with all the current inputs
  //and also a toolbar at the bottom
  return (
    <div>
      {Object.keys(experiences).length > 0 ? (
        experiences.map((experience) => {
          return (
            <Experience
              id={experience.id}
              fromPeriod={experience.data.fromPeriod}
              toPeriod={experience.data.toPeriod}
              companyName={experience.data.companyName}
              city={experience.data.city}
              tasks={experience.data.tasks}
              data={experiences}
              setExperienceData={setExperienceData}
              addExperience={addExperience}
              onChange={onChange}
            />
          );
        })
      ) : (
        <div>
          <h3 className="mt-4 md:mx-48 " onClick={addExperience}>
            <button className="md:mt-4 inline-flex relative w-fit md:w-22 items-center rounded-md bg-primary px-3 py-2 text-lg font-semibold text-gray-800 shadow-sm ring-1 ring-inset ring-primary hover:bg-[#f39b0c]">
              <PlusIcon className="h-5 w-5" />
              Add experience
            </button>
          </h3>
        </div>
      )}
    </div>
  );
}
