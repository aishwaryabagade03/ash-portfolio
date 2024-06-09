import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="pt-40 max-w-screen-xl mx-auto">
      <div className="hero-text grid md:grid-cols-2 grid-cols-1 gap-3 items-start">
        <div className="text-details">
          <h1 className="font-normal poppins title">Dialable</h1>
          <div className="project-type-box my-4">
            <ul>
              <li className="mb-4">
                <h5 className="font-normal mb-1 poppins">Role</h5>
                <h6 className="font-light poppins">UI UX Design</h6>
              </li>
              <li className="mb-4">
                <h5 className="font-normal mb-1 poppins">Duration</h5>
                <h6 className="font-light poppins">3 months</h6>
              </li>
              <li className="mb-4">
                <h5 className="font-normal mb-1 poppins">Client</h5>
                <h6 className="font-light poppins">Siba Panda</h6>
              </li>
              <li className="mb-4">
                <h5 className="font-normal mb-1 poppins">Tools</h5>
                <h6 className="font-light poppins">Figma, Miro</h6>
              </li>
              <li className="mb-4">
                <h5 className="font-normal mb-1 poppins">Project Type</h5>
                <h6 className="font-light poppins">Business Directory</h6>
              </li>
            </ul>
          </div>
        </div>
        <div className="para-box">
          <h6 className="poppins font-light mt-4">
            A Business directory website that serves as a vital resource,
            offering a comprehensive directory of accessible and inclusive
            businesses, along with a job portal, free listing and marketplace
            services for the disabled.
          </h6>
          <div className="md:flex justify-end mt-7">
          <svg
                           className="rotate-[315deg]"
                          width="200px"
                          height="200px"
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
                            <rect width="24" height="24" fill="white"></rect>
                            <path
                              d="M12 6L12 18M12 18L17 13M12 18L7 13"
                              stroke="#000000"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </g>
                        </svg>
          </div>
        </div>
      </div>
      <div className="highlighted-image text-center">
        <Image
          src="/assets/portfolio/Dialable/Dialable7.png"
          width={1084}
          height={500}
          className="mx-auto object-contain"
        />
        <h6 className="font-bold poppins">
          How might we create a digital platform that effectively connects
          disabled individuals with businesses, addressing accessibility
          barriers and fostering inclusivity in the commercial landscape?
        </h6>
      </div>
    </section>
  );
};

export default Hero;
