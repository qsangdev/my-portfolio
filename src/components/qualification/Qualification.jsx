import React from "react";
import "./Qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content ">
            <div className="qualification__data">
            <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>
                2022 - Present
              </div>
              <div className="qualification__rounder"></div>
              <span className="qualification__line"></span>
              <h3 className="qualification__title">Web Fullstack</h3>
              <span className="qualification__subtitle">MindX - School</span>

              
            </div>
            <div className="qualification__data">
            <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>
                2020 - 2022
              </div>
              <div className="qualification__rounder"></div>
              <span className="qualification__line"></span>
              <h3 className="qualification__title">Operating Engineers</h3>
              <span className="qualification__subtitle">
                Vinamilk - Company
              </span>

              
            </div>
            <div className="qualification__data">
            <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>
                2014 - 2019
              </div>
              <div className="qualification__rounder"></div>
              <span className="qualification__line"></span>
              <h3 className="qualification__title">Automation Engineer</h3>
              <span className="qualification__subtitle">
                Vietnam - University
              </span>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
