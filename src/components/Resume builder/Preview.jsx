import React from "react";
import formattedDate from "../../utils/date";

//This component gets an object of all current experiences as a prop and renders them with readable HTML as a Preview
export default function Preview(props) {
  const experienceData = props.data;
  const addExperience = props.addExperience;

  return (
    <div>
      {Object.keys(experienceData).length > 0 ? (
        experienceData.map((experience) => (
          <div className="mx-auto md:mx-40 m-8 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <article className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time
                    dateTime={experience.fromPeriod}
                    className="text-gray-500"
                  >
                    {formattedDate(experience.data.fromPeriod)} -{" "}
                    {formattedDate(experience.data.toPeriod)}
                  </time>
                  <div className="relative w-fit rounded-full bg-primary px-3 py-1.5 font-medium text-gray-800">
                    {experience.data.city}
                  </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <div>
                      <span className="absolute inset-0" />
                      {experience.data.companyName}
                    </div>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    {experience.data.tasks}
                  </p>
                </div>
              </article>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p
            className="text-xl mx-auto mt-8 text-center"
            onClick={addExperience}
          >
            Oops, there's nothing to preview...
          </p>
        </div>
      )}
    </div>
  );
}
