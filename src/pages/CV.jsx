import { NavLink } from "react-router-dom";
import formattedDate from "../utils/date";
import Header from "../components/Header";
import { HomeIcon } from "@heroicons/react/20/solid";

const data = [
  {
    fromPeriod: "2023-09",
    toPeriod: "2024-04",
    city: "Uppsala",
    companyName: "Prototyp",
    tasks:
      "Fullstack developer. Worked on website functionality/features and design. Svelte/SvelteKit.",
  },
  {
    fromPeriod: "2023-02",
    toPeriod: "2023-09",
    city: "Uppsala",
    companyName: "Digital Island",
    tasks:
      "Front end developer. Building web sites from design in Wordpress(Gutenberg). Designed and implemented intuitive interfaces for adding and editing content within the WordPress editor. React.",
  },
];
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
    <div className="container">
      <div className="">
        <NavLink
          className={({ isActive }) => (isActive ? "hidden" : "md:mr-2 ")}
          to="/"
        >
          <button className="relative w-full h-full md:w-20 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <HomeIcon className="h-4 md:-mt[4px] -mt-[3px] w-4 inline-flex " />
            <span>Home</span>
          </button>
        </NavLink>
        <Header />
        <div className="md:flex md:w-full">
          <div className="md:w-2/3">
            {data.map((item) => (
              <div className="mx-auto md:mx-40 m-8 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-5 lg:mx-0 lg:max-w-none">
                  <article className="flex max-w-xl flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time
                        dateTime={item.fromPeriod}
                        className="text-gray-500"
                      >
                        {formattedDate(item.fromPeriod)} -{" "}
                        {formattedDate(item.toPeriod)}
                      </time>
                      <div className="relative w-fit rounded-full bg-primary px-3 py-1.5 font-medium text-gray-600">
                        {item.city}
                      </div>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <div>
                          <span className="absolute inset-0" />
                          {item.companyName}
                        </div>
                      </h3>
                      <p className=" mt-5 text-sm leading-6 text-gray-600">
                        {item.tasks}
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
          <div className="md:flex-col md:space-y-24">
            {" "}
            <div className=" px-6 md:mt-10 max-w-7xl lg:px-8 flex flex-col h-8 mb-24 md:border-t-0 border-t">
              <h3 className="flex mt-4">Languages & Tools </h3>
              <div className="space-x-2 space-y-2">
                <span class="w-fit inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  React
                </span>
                <span class="w-fit inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                  TypeScript
                </span>
                <span class="w-fit inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                  Svelte/SvelteKit
                </span>
              </div>
              <div className="space-x-2 space-y-2">
                <span class="w-fit inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  Wordpress
                </span>
                <span class="w-fit inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  Tailwind.css
                </span>
                <span class="w-fit inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                  Git
                </span>
              </div>
            </div>
            <div className=" px-6  max-w-7xl lg:px-8 flex flex-col h-8 mb-20 md:border-t-0 border-t">
              <h3 className="flex mt-4">Spoken languages </h3>
              <div className="space-x-2 space-y-2">
                <span class="w-fit inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  Swedish
                </span>
                <span class="w-fit inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                  English
                </span>
                <span class="w-fit inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                  Moroccan
                </span>
                <span class="w-fit inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                  French{" "}
                </span>
              </div>
              <div className="space-x-2 space-y-2">
                <span class="w-fit inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  Spanish{" "}
                </span>
                <span class="w-fit inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  Italian{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
