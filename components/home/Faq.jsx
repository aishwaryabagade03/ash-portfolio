"use client";
import React, { useState } from "react";

function FAQAccordion() {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
  
    const toggleAccordion1 = () => {
        setExpanded1(!expanded1);
        if (expanded1) {
          setExpanded2(false);
          setExpanded3(false);
        }
      };
    
      const toggleAccordion2 = () => {
        setExpanded2(!expanded2);
        if (expanded2) {
          setExpanded1(false);
          setExpanded3(false);
        }
      };
    
      const toggleAccordion3 = () => {
        setExpanded3(!expanded3);
        if (expanded3) {
          setExpanded1(false);
          setExpanded2(false);
        }
      };

  return (
    <div className="py-16 max-w-screen-xl mx-auto">
      <div className="divide-y divide-slate-200">
        <div className="py-2">
          <h2>
            <button
              type="button"
              className="flex items-center justify-between w-full text-left font-medium py-2 border-b-2 border-black"
              onClick={toggleAccordion1}
              aria-expanded={expanded1}
              aria-controls="faqs-text-01"
            >
              <span>Wireframing & Prototyping</span>
              {expanded1 ? (
                <svg
                  className="shrink-0 ml-8"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center transition duration-200 ease-out"
                  />
                </svg>
              ) : (
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect width="24" height="24" fill="white"></rect>{" "}
                    <path
                      d="M12 6V18"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M6 12H18"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              )}
            </button>
          </h2>
          <div
            id="faqs-text-01"
            role="region"
            aria-labelledby="faqs-title-01"
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              expanded1
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="py-8 text-2xl">
                I utilize wireframing and prototyping to bring ideas to life.
                Wireframes serve as blueprints, outlining the structure and
                layout of each design element. With prototyping, I create
                interactive mockups, allowing clients to navigate through the
                user experience before development begins. This iterative
                process ensures efficient communication, user-centric design,
                and ultimately, successful outcomes for every project.
              </p>
            </div>
          </div>
        </div>
        {/* Additional accordion items go here */}
      </div>
      <div className="divide-y divide-slate-200">
        <div className="py-2">
          <h2>
            <button
              type="button"
              className="flex items-center justify-between w-full text-left font-medium py-2 border-b-2 border-black"
              onClick={toggleAccordion2}
              aria-expanded={expanded2}
              aria-controls="faqs-text-01"
            >
              <span>UI Design</span>
              {expanded2 ? (
                <svg
                  className="shrink-0 ml-8"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center transition duration-200 ease-out"
                  />
                </svg>
              ) : (
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect width="24" height="24" fill="white"></rect>{" "}
                    <path
                      d="M12 6V18"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M6 12H18"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              )}
            </button>
          </h2>
          <div
            id="faqs-text-01"
            role="region"
            aria-labelledby="faqs-title-01"
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              expanded2
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="py-8 text-2xl">
                Craft visually stunning and intuitive user interfaces that
                captivate and delight users. From wireframes to pixel-perfect
                designs, I specialize in creating seamless experiences for
                websites, web apps, and mobile apps. By focusing on user-centric
                design principles and leveraging a cohesive design system, I
                ensure that your digital products not only look great but also
                provide an exceptional user experience.
              </p>
            </div>
          </div>
        </div>
        {/* Additional accordion items go here */}
      </div>
      <div className="divide-y divide-slate-200">
        <div className="py-2">
          <h2>
            <button
              type="button"
              className="flex items-center justify-between w-full text-left font-medium py-2 border-b-2 border-black"
              onClick={toggleAccordion3}
              aria-expanded={expanded3}
              aria-controls="faqs-text-01"
            >
              <span>Responsive Design</span>
              {expanded3 ? (
                <svg
                  className="shrink-0 ml-8"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center transition duration-200 ease-out"
                  />
                </svg>
              ) : (
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect width="24" height="24" fill="white"></rect>{" "}
                    <path
                      d="M12 6V18"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M6 12H18"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              )}
            </button>
          </h2>
          <div
            id="faqs-text-01"
            role="region"
            aria-labelledby="faqs-title-01"
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              expanded3
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="py-8 text-2xl">
                Offering responsive design to ensure your digital products adapt
                seamlessly to all devices and screen sizes. From mobile phones
                to tablets and desktops, I create user-friendly experiences that
                look great and function flawlessly across all platforms.
              </p>
            </div>
          </div>
        </div>
        {/* Additional accordion items go here */}
      </div>
    </div>
  );
}

export default FAQAccordion;
