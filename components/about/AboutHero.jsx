import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <section className="pt-40 pb-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 w-full py-32">
          <div className="w-full">
            <h1>Hello again !</h1>
            <span className="text-2xl">
              I'm Aishwarya, my fascination with art and its potential to
              influence lives has been a lifelong passion. I began sketching and
              painting at the age of ten, and this love for artistic expression
              steered me to the world of UI UX. After completing my Bachelor's
              degree in Arts, this newfound passion drove me to pursue a career
              in UI UX design, and enrolled in courses on Coursera to learn more
              about it. Before that, I also completed a course in web
              development to expand my skills through an institute. <br />I have
              developed strong skills in design research, concept development,
              and prototyping, while working on my freelance projects. My goal
              is to combine my love for art with my passion for design to create
              meaningful experiences for users.
            </span><br />
            <button className="bg-black text-white px-12 py-3 rounded-lg text-xl mt-8">Resume</button>
          </div>
          <div className="w-4/5 text-right ml-auto">

          <div className="grid grid-cols-2 gap-4 relative">
            <div className="grid-item-1 relative">
              <Image
                src="/assets/ash/grid1.jpg"
                alt="Image 1"
                width={300}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="grid-item-2 relative">
              <Image
                src="/assets/ash/grid2.jpg"
                alt="Image 2"
                width={300}
                height={400}
                className="rounded-lg shadow-lg absolute top-[3rem]"
              />
            </div>
            <div className="grid-item-3 relative col-span-2 w-4/5 mx-auto">
              <Image
                src="/assets/ash/grid3.jpg"
                alt="Image 3"
                width={300}
                height={400}
                className="rounded-lg shadow-lg absolute"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
