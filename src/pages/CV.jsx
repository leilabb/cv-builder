import { NavLink } from "react-router-dom";
import formattedDate from "../utils/date";

export default function CV() {
  const experiences = [
    {
      fromPeriod: "2021-03-15",
      toPeriod: "2022-05-06",
      city: "Uppsala",
      companyName: "Prototyp",
      tasks: "Fullstack developer, Svelte/SvelteKit",
    },
  ];

  return (
    <div className="container ">
      <div className="">
        <NavLink
          className={({ isActive }) => (isActive ? "hidden" : "ml-2")}
          to="/"
        >
          <button className="relative w-16 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Home
          </button>
        </NavLink>
        <div className="">
          <h1>This my CV</h1>
        </div>
        <div className="mx-auto md:mx-40 m-8 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {experiences.map((data) => {
              <article className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={data.fromPeriod} className="text-gray-500">
                    {formattedDate(data.fromPeriod)} -{" "}
                    {formattedDate(data.toPeriod)}
                  </time>
                  <div className="relative w-fit rounded-full bg-primary px-3 py-1.5 font-medium text-gray-600">
                    {data.city}
                  </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <div>
                      <span className="absolute inset-0" />
                      {data.companyName}
                    </div>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {data.tasks}
                  </p>
                </div>
              </article>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
