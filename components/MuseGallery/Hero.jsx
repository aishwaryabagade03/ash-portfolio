import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="pt-40 max-w-screen-xl mx-auto">
      <div className="hero-text grid md:grid-cols-2 grid-cols-1 gap-3 items-start">
        <div className="text-details">
          <h1 className="font-normal poppins title">Muse Gallery</h1>
          <div className="project-type-box my-4">
            <ul>
              <li className="mb-4">
                <h5 className="font-normal mb-1 poppins">Role</h5>
                <h6 className="font-light poppins">UI Design</h6>
              </li>
              <li className="mb-4">
                <h5 className="font-normal mb-1 poppins">Duration</h5>
                <h6 className="font-light poppins">1 month</h6>
              </li>

              <li className="mb-4">
                <h5 className="font-normal mb-1 poppins">Tools</h5>
                <h6 className="font-light poppins">Figma, Miro</h6>
              </li>
              <li className="mb-4">
                <h5 className="font-normal mb-1 poppins">Project Type</h5>
                <h6 className="font-light poppins">Mobile App</h6>
              </li>
            </ul>
          </div>
        </div>
        <div className="para-box">
          <h6 className="poppins font-light mt-4">
            A museum mobile app designed for art enthusiasts and museum-goers.
            Discover nearby museums, schedule visits with a built-in calendar,
            and easily scan tickets upon arrival. Dive into captivating
            collections, stay updated on events and workshops, and even shop for
            art pieces and paintings in the integrated marketplace.
          </h6>
          <div className="md:flex justify-end mt-7">
            <Image
              src="/assets/portfolio/arrow.png"
              width={65}
              height={65}
              className=""
            />
          </div>
        </div>
      </div>
      <div className="highlighted-image text-center">
        <Image
          src="/assets/portfolio/muse-gallery/Mockup1.png.png"
          width={350}
          height={400}
          className="mx-auto rounded-2xl"
        />
        <h6 className="font-bold poppins mt-8">
          How might we make it easier for users to discover nearby museums and
          plan their visits seamlessly while also providing convenient access to
          ticket scanning and event scheduling, as well as opportunities to
          explore collections, attend workshops, and shop for art ?
        </h6>
      </div>
    </section>
  );
};

export default Hero;
