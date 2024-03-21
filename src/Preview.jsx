import React from "react";
import formattedDate from "./utils/date";

//This component gets an object of all current experiences as a prop and renders them with readable HTML as a Preview
export default function Preview(props) {
  return (
    <div className="mx-auto m-8 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article className="flex max-w-xl flex-col items-start justify-between">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={props.fromPeriod} className="text-gray-500">
              {formattedDate(props.fromPeriod)} -{" "}
              {formattedDate(props.toPeriod)}
            </time>

            <a
              href=""
              className="relative z-10 rounded-full bg-yellow-100  px-3 py-1.5 font-medium text-gray-600"
            >
              {props.city}
            </a>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href="">
                <span className="absolute inset-0" />
                {props.companyName}
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {props.tasks}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
