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
                <a href="#">@leilabb</a>
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
            <span>Phone</span>
          </button>
          <button
            type="button"
            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <EnvelopeIcon
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span>Email</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* 
export default function Header() {
  return (
    <div className="header">
      <div className="titles">
        <h1>Leila Ben Halima</h1>
        <h2>CV</h2>
      </div>
      <div className="header-info">
        <div className="phone">
          <div className="phone-icon">
            <img src="../assets/phone-icon.svg" />
          </div>
          <h3 className="phone-number">0736439974</h3>
        </div>
        <div className="contact">
          <div className="mail">
            <a href="mailto:leila.benhalima2@gmail.com">
              <img src="../assets/mail-icon.svg" />
            </a>
          </div>
          <div className="linkedin">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/leila-ben-halima"
            >
              <img src="../assets/linkedin.svg" />
            </a>
          </div>
        </div>
      </div>

      <div className="timePeriodInfo">
        <img className="header-img" src="../assets/leila-img.jpg" />
      </div>
    </div>
  );
} */
