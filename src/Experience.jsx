import React from "react";
import Toolbar from "./Toolbar";

export default function Experience(props) {
  function handleAction(event) {
    {
      event.target.name === "plus" && props.addExperience();
    }
    {
      event.target.name === "bin" && props.removeExperience(event);
    }
    {
      event.target.name === "arrow-up" && props.moveUpExperience(event);
    }
    {
      event.target.name === "arrow-down" && props.moveDownExperience(event);
    }
  }

  //should return a form loaded with all the current inputs
  //and also a toolbar at the bottom
  return (
    <div className="experiences">
      <form>
        <div className="timePeriodInfo">
          <div className="labels">
            <label htmlFor="fromPeriod">From</label>

            <input
              id={props.id}
              className="input"
              type="month"
              placeholder="From"
              onChange={(event) => props.onChange(event)}
              name="fromPeriod"
              value={props.fromPeriod}
            />
          </div>

          <div className="labels">
            <label htmlFor="toPeriod">To</label>

            <input
              id={props.id}
              className="input"
              type="month"
              placeholder="To"
              onChange={(event) => props.onChange(event)}
              name="toPeriod"
              value={props.toPeriod}
            />
          </div>
        </div>

        <div className="companyInfo">
          <div className="labels">
            <label htmlFor="companyInfo">Company Name</label>
            <input
              id={props.id}
              className="input"
              type="text"
              placeholder="Company Name"
              name="companyName"
              onChange={(event) => props.onChange(event)}
              value={props.companyName}
            />
          </div>

          <div className="labels">
            <label htmlFor="city">City</label>
            <input
              id={props.id}
              className="input"
              type="text"
              placeholder="City"
              onChange={(event) => props.onChange(event)}
              name="city"
              value={props.city}
            />
          </div>
        </div>

        <div className="labels">
          <label htmlFor="tasks">Tasks</label>
          <textarea
            id={props.id}
            className="input textarea"
            placeholder="Tasks, title etc."
            onChange={(event) => props.onChange(event)}
            name="tasks"
            value={props.tasks}
          />
        </div>
      </form>
      <Toolbar id={props.id} handleClick={handleAction} />
    </div>
  );
}
