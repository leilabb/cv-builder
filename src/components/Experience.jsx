import React from "react";
import Toolbar from "./Toolbar";
import { PlusIcon } from "@heroicons/react/20/solid";

export default function Experience(props) {
  //should return a form loaded with all the current inputs
  //and also a toolbar at the bottom
  return (
    <div className="experiences md:w-1/2 md:mx-[190px]">
      {Object.keys(props.data).length > 0 ? (
        props.data.map((experience) => {
          return (
            <div>
              <form id={experience.id}>
                <div className="timePeriodInfo">
                  <div className="labels">
                    <label htmlFor="fromPeriod">From</label>
                    <input
                      className="input"
                      type="month"
                      placeholder="From"
                      onChange={(event) => experience.onChange(event)}
                      name="fromPeriod"
                      value={experience.fromPeriod}
                    />
                  </div>

                  <div className="labels">
                    <label htmlFor="toPeriod">To</label>
                    <input
                      className="input"
                      type="month"
                      placeholder="To"
                      onChange={(event) => experience.onChange(event)}
                      name="toPeriod"
                      value={experience.toPeriod}
                    />
                  </div>
                </div>

                <div className="companyInfo">
                  <div className="labels">
                    <label htmlFor="companyInfo">Company Name</label>
                    <input
                      className="input"
                      type="text"
                      placeholder="Company Name"
                      name="companyName"
                      onChange={(event) => experience.onChange(event)}
                      value={experience.companyName}
                    />
                  </div>

                  <div className="labels">
                    <label htmlFor="city">City</label>
                    <input
                      className="input"
                      type="text"
                      placeholder="City"
                      onChange={(event) => experience.onChange(event)}
                      name="city"
                      value={experience.city}
                    />
                  </div>
                </div>

                <div className="labels">
                  <label htmlFor="tasks">Tasks</label>
                  <textarea
                    className="input textarea"
                    placeholder="Tasks, title etc."
                    onChange={(event) => experience.onChange(event)}
                    name="tasks"
                    value={experience.tasks}
                  />
                </div>
              </form>
              <Toolbar
                updateData={experience.updateData}
                id={experience.id}
                data={experience.data}
              />
            </div>
          );
        })
      ) : (
        <div>
          <h3 className="mt-4" onClick={addExperience}>
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
