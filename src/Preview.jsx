import React from "react";
//This component gets an object of all current experiences as a prop and renders them with readable HTML as a Preview
export default function Preview(props) {
  function formattedDate(props) {
    const inputDate = props;
    const date = new Date(inputDate); //New date object { Date{march 2023}, Date{june 2024}}

    const options = { year: "numeric", month: "long" };

    const formattedDate = date.toLocaleDateString(undefined, options);

    return formattedDate;
  }

  return (
    <div className="experiences">
      {/* time */}
      <div className="prvIcons">
        <img className="" src="./src/assets/calendar.svg" />
      </div>
      <div className="timePeriodInfoPrv">
        <p className="fieldsPrv">{formattedDate(props.fromPeriod)} </p>
        <p className="fieldsPrv"> {formattedDate(props.toPeriod)}</p>
      </div>

      {/* company */}

      <div className="prvIcons">
        <img src="./src/assets/position.svg" />
      </div>
      <div className="companyInfoPrv">
        <p className="">
          {props.companyName}, {props.city}
        </p>
      </div>

      {/* tasks */}
      <div className="">
        <div className="prvIcons">
          <img src="./src/assets/tasks.svg" />
        </div>
        <p className="fieldsPrv textAreaPrv ">{props.tasks}</p>
      </div>
    </div>
  );
}
