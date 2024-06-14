import React from "react";
import Toolbar from "./Toolbar";

//return an experience and a toolbar
export default function Experience(props) {
  const setExperienceData = props.setExperienceData;
  const addExperience = props.addExperience;

  return (
    <div className="experiences md:w-1/2 md:mx-[190px]">
      <div>
        <form>
          <div className="timePeriodInfo">
            <div className="labels">
              <label htmlFor="fromPeriod">From</label>
              <input
                className="input"
                type="month"
                placeholder="From"
                onChange={(event) => props.onChange(event, props.id)}
                name="fromPeriod"
                value={props.fromPeriod}
              />
            </div>

            <div className="labels">
              <label htmlFor="toPeriod">To</label>
              <input
                className="input"
                type="month"
                placeholder="To"
                onChange={(event) => props.onChange(event, props.id)}
                name="toPeriod"
                value={props.toPeriod}
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
                onChange={(event) => props.onChange(event, props.id)}
                value={props.companyName}
              />
            </div>

            <div className="labels">
              <label htmlFor="city">City</label>
              <input
                className="input"
                type="text"
                placeholder="City"
                onChange={(event) => props.onChange(event, props.id)}
                name="city"
                value={props.city}
              />
            </div>
          </div>
          <div className="labels">
            <label htmlFor="tasks">Tasks</label>
            <textarea
              className="input textarea"
              placeholder="Tasks, title etc."
              onChange={(event) => props.onChange(event, props.id)}
              name="tasks"
              value={props.tasks}
            />
          </div>
        </form>
        <Toolbar
          id={props.id}
          data={props.data}
          setExperienceData={setExperienceData}
          addExperience={addExperience}
        />
      </div>
    </div>
  );
}
