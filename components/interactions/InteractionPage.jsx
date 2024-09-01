import { interactions } from "@/utils/interactions";
import Image from "next/image";
import React from "react";

const InteractionPage = () => {
  return (
    <section className="py-32 max-w-screen-xl mx-auto">
      <div className="interaction-wrapper">
        <h1 className="text-4xl md:text-8xl mb-2 syne">
          UI Micro Interactions
        </h1>
        <h4>In Figma</h4>
      </div>
      <div className="grid grid-cols-1 border-grey border-b-2 py-10">
        <div className="research-box">
          <h4 className="poppins font-normal">Introduction</h4>
          <p className="font-light poppins mt-4">
            Micro interactions are the subtle, often minute animations and
            responses that provide feedback, enhance user engagement, and
            contribute to the overall user experience. They may seem small, but
            these micro interactions play a crucial role in making digital
            products feel intuitive, responsive, and alive. This page is
            dedicated to showcasing a series of micro interactions that I have
            designed, each tailored to elevate the user experience in various
            contexts.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 border-grey border-b-2 py-10">
        <div className="research-box">
          <h4 className="poppins font-normal">Purpose of Micro Interactions</h4>
          <p className="font-light poppins mt-4">
            Micro interactions serve several key purposes within a user
            interface:
          </p>
          <ul className="list-disc pl-4">
            <li className="font-light poppins">
              Feedback: They provide immediate feedback to users about the
              action they have taken, confirming that the system has received
              and is processing their input.
            </li>
            <li className="font-light poppins">
              Guidance: They guide users through processes and indicate what to
              do next. Visual Delight: By adding an element of fun or
              satisfaction, micro interactions can turn routine tasks into more
              engaging experiences.
            </li>
            <li className="font-light poppins">
              Visual Delight: By adding an element of fun or satisfaction, micro
              interactions can turn routine tasks into more engaging
              experiences.
            </li>
            <li className="font-light poppins">
              Brand Expression: Micro interactions can reflect a brand’s
              personality, adding a unique touch that resonates with users.
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 border-grey border-b-2 py-10">
        <div className="research-box">
          <h4 className="poppins font-normal">Project Overview</h4>
          <p className="font-light poppins mt-4">
            This section features a collection of over 10 micro interactions
            I’ve crafted, each designed to enhance the user experience through
            subtle yet impactful animations. Below, you’ll find GIF videos
            demonstrating each interaction, accompanied by a brief explanation
            of the design process, the tools used, and the rationale behind the
            animations.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 pt-10">
        {interactions.map((elem, ind) => (
          <div className="research-box my-4" key={elem.id + ind}>
            <h4 className="poppins font-normal mb-2">{elem.title}</h4>
            <ul className="list-disc pl-4">
              {elem.points.map((point, ind) => (
                <li className="font-light poppins" key={ind}>
                  {point.title}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap md:items-start items-center my-4">
              {elem.gifs.map((gif, ind) => (
                <>
                  {gif.mp4 ? (
                    <video
                      key={ind}
                      src={gif.img}
                      className="object-contain w-[250px] h-[250px]"
                      autoPlay
                      loop
                      muted
                    ></video>
                  ) : (
                    <Image
                      key={ind}
                      src={gif.img}
                      width={250}
                      height={250}
                      className="object-cover w-full h-full md:w-[250px]"
                    />
                  )}
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
      <section className="research-box">
        <h4 className="poppins font-normal">Conclusion</h4>
        <p className="font-light poppins mt-4">
          Micro interactions, while often small, significantly impact how users
          interact with a product. By thoughtfully designing these interactions,
          we can create a more engaging, intuitive, and enjoyable user
          experience. The examples showcased here are just a glimpse of how
          micro interactions can be leveraged to enhance digital products, and
          I’m excited to continue exploring and refining these designs in future
          projects.
        </p>
      </section>
    </section>
  );
};

export default InteractionPage;
