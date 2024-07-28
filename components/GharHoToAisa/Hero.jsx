import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="pt-40 max-w-screen-xl mx-auto">
      <div className="hero-text grid md:grid-cols-2 grid-cols-1 gap-3 items-start">
        <div className="text-details">
          <h1 className="font-normal poppins title">Ghar Ho Toh Aisa</h1>
          <div className="project-type-box my-4">
            <ul>
              <li className="mb-4">
                <h5 className="font-normal mb-1 poppins">Role</h5>
                <h6 className="font-light poppins">UI UX Design</h6>
              </li>
              <li className="mb-4">
                <h5 className="font-normal mb-1 poppins">Duration</h5>
                <h6 className="font-light poppins">4 months</h6>
              </li>
              <li className="mb-4">
                <h5 className="font-normal mb-1 poppins">Client</h5>
                <h6 className="font-light poppins">Dhruvita Bosmiya</h6>
              </li>
              <li className="mb-4">
                <h5 className="font-normal mb-1 poppins">Tools</h5>
                <h6 className="font-light poppins">Figma, Miro</h6>
              </li>
              <li className="mb-4">
                <h5 className="font-normal mb-1 poppins">Project Type</h5>
                <h6 className="font-light poppins">Real Estate</h6>
              </li>
            </ul>
          </div>
        </div>
        <div className="para-box">
          <h6 className="poppins font-light mt-4">
            Ghar Ho Toh Aisa is a renowned real estate company known for its
            commitment to delivering dream homes and exceptional living
            experiences with a focus on customer-friendly planning, impeccable
            space management, and transparent on-time delivery, a trusted
            reputation in the industry.
          </h6>
          <div className="md:flex justify-end mt-7 hidden">
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
        <Image src='/assets/portfolio/real-estate/hero.png' width={1084} height={700} className="mx-auto object-contain"/>
        <h6 className="font-bold poppins">
        How might we redesign a real estate website to seamlessly showcase their portfolio of properties, improve user experience, and simplify the home-buying process for customers while maintaining their reputation for exceptional quality and transparent on-time delivery?
        </h6>
      </div>
    </section>
  );
};

export default Hero;
