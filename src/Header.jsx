import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-14 w-14 rounded-full"
                src="../assets/leila-img.jpg"
                alt=""
              />
            </div>
            <div className="ml-4">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Leila Ben Halima
              </h3>
              <p className="text-sm text-gray-500">
                Github: leilabb <br></br>LinkedIn:
                linkedin.com/in/leila-ben-halima/
              </p>
            </div>
          </div>
        </div>
        <div className="ml-4 mt-4 flex flex-shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PhoneIcon
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span>0736439974</span>
          </button>
          <button
            type="button"
            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <EnvelopeIcon
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span>
              <a href="mailto:leila.benhalima2@gmail.com">
                leila.benhalima2@gmail.com
              </a>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
