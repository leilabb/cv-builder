import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  AcademicCapIcon,
} from "@heroicons/react/20/solid";
import githubLogo from "../../assets/github.svg";
import linkedinLogo from "../../assets/linkedIn.png";

export default function Header() {
  return (
    <div className="md:mx-40 md:border-b bg-white py-5 sm:px-6">
      <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-4">
          <div className="flex items-center">
            <img
              className="h-24 w-24 md:h-16 md:w-16 rounded-full"
              src="../assets/leila-img.jpg"
              alt=""
            />
            <div className="ml-4">
              <div className="">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  Leila Ben Halima
                </h3>
              </div>
              <p className=" text-sm text-gray-500">
                <p className="flex">
                  <AcademicCapIcon className="mr-2 h-6 w-6 md:h-5 md:w-5 text-gray-500" />{" "}
                  Bachelor's degree in Computer Science
                </p>
                <p className="ml-8 md:ml-7">Uppsala University, 2014</p>
              </p>
            </div>
          </div>
        </div>
        <div className="ml-4 mt-4 flex flex-col md:flex-row">
          <div className="flex mb-2 ">
            {" "}
            <button
              type="button"
              className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <PhoneIcon
                className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
              <span>0736439974</span>
            </button>
            <button
              type="button"
              className="relative md:mr-2 ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <EnvelopeIcon
                className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
              <span>
                <a href="mailto:leila.benhalima2@gmail.com">
                  <span className="md:hidden">Email me</span>
                  <span className="md:inline-flex hidden">
                    leila.benhalima2@gmail.com
                  </span>
                </a>
              </span>
            </button>
          </div>
          <div className="flex mb-2 ">
            {" "}
            <button
              type="button"
              className="md:py-0 relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <img src={githubLogo} className="-ml-0.5 mr-1.5 h-5 w-5" />
              <span>
                <a href="https://github.com/leilabb" target="_blank">
                  leilabb{" "}
                </a>
              </span>
            </button>
            <button
              type="button"
              className="md:py-0 relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <img src={linkedinLogo} className=" -ml-0.5 mr-1.5 h-auto w-5" />
              <span>
                <a
                  href="https://linkedin.com/in/leila-ben-halima/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
