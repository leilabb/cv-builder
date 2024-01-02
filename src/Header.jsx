import React from "react";

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
}
