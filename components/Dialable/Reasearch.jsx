import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reasearch = () => {
  return (
    <section className="py-16  max-w-screen-xl mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 border-t-2 border-grey border-b-2 py-10">
        <div className="research-box">
          <h4 className="poppins font-normal">Research</h4>
          <p className="font-light poppins mt-4">
            In my user research for my client's business directory website for
            the disabled, I focused on understanding the needs and preferences
            of the target audience. I explored existing platforms and resources
            catering to individuals with disabilities to gain insights into
            their online experiences and the features they value most. By
            analyzing user behavior and industry trends, I identified key
            functionalities that would enhance the usability and accessibility
            of the website.
          </p>
        </div>
        <div className="critical-questions">
          <h4 className="poppins font-normal">Critical Questions</h4>
          <div className="questios-list mt-4">
            <ul className="list-disc">
              <li className="font-light poppins">
                How will the website ensure that if it's genuinely accessible
                and inclusive for people with disabilities?
              </li>
              <li className="font-light poppins">
                What are some guidelines relating to the disability?
              </li>
              <li className="font-light poppins">
                What common challenges people with the disability encounter?
              </li>
              <li className="font-light poppins">
                What accessibility settings should be prioritized for the
                website?
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 border-grey border-b-2 py-10">
        <div className="research-box">
          <h4 className="poppins font-normal">Competitive Audit</h4>
          <p className="font-light poppins mt-4">
            I wanted to explore more the functionality and benefits that are
            offered by the platforms offering similar kind of product -
            providing knowledge and education. I compared a couple of important
            components of UI and product in general to discover the areas where
            could improve.
          </p>
          <Image
            src="/assets/portfolio/Dialable/comp.jpg"
            width={1200}
            height={120}
            className="mx-auto py-8"
          />
        </div>
      </div>

      <div className="persona border-b-2 border-grey py-10">
        <div className="research-box">
          <h4 className="poppins font-normal">Persona</h4>
          <p className="font-light poppins mt-4">
            Based on research findings, I created a persona of my client and
            their needs and goals. This helped me to empathize with my client on
            the remaining steps of the design process.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 py-8">
          <Image src='/assets/portfolio/Dialable/grid.png' width={1200} height={800} className="object-contain mx-auto"/>
        </div>
      </div>

      <div className="grid grid-cols-1 border-grey border-b-2 py-10">
        <div className="research-box">
          <h4 className="poppins font-normal">Ideation</h4>
          <p className="font-light poppins my-4">
            In the ideation phase, I utilized affinity diagrams to organize and
            synthesize my brainstorming session. By categorizing the ideas into
            themes such as accessibility features, business directory
            functionalities, and interactive elements, I gained valuable
            insights into the needs and preferences of our target audience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
            <Image
              src="/assets/portfolio/Dialable/id1.jpg"
              width={1200}
              height={120}
              className="mx-auto w-full object-contain"
            />
            <Image
              src="/assets/portfolio/Dialable/id2.jpg"
              width={1200}
              height={120}
              className="mx-auto w-full object-contain"
            />
          </div>

          <h4>Sitemap</h4>
          <p className="font-light poppins my-4">
            Based on the research discovery, I brainstormed, and organized the
            necessary website content and functionality. Designing, the Business
            directory website was heavy in redundant and obsolete information
            that didn’t provide much substance. I decided to include the most
            vital information in the new version to make it clean and easy to
            navigate.
          </p>
          <Image
            src="/assets/portfolio/Dialable/sitemap.jpg"
            width={1200}
            height={120}
            className="mx-auto py-10 w-full object-contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 border-grey border-b-2 py-10">
        <div className="research-box">
          <h4 className="poppins font-normal">Lo-Fi Wireframes</h4>
          <p className="font-light poppins mt-4">
            After defining a comprehensive sitemap for the website, I
            transitioned to the lo-fi wireframe stage of the redesign project.
            These wireframes serve as the blueprint for the new website,
            focusing on customer-friendly planning, space management, and
            transparent on-time delivery. By outlining the structure and layout
            of key pages, the lo-fi wireframes lay the foundation for a
            user-centric design that aligns with the brand's vision.
          </p>
          <div className="grid grid-cols-3 gap-4 py-8">
            <Image
              src="/assets/portfolio/Dialable/Dialable4.png"
              width={1200}
              height={120}
              className="mx-auto w-full object-contain border border-[#0000006b]"
            />
            <Image
              src="/assets/portfolio/Dialable/Dialable5.png"
              width={1200}
              height={120}
              className="mx-auto w-full object-contain border border-[#0000006b]"
            />
            <Image
              src="/assets/portfolio/Dialable/Dialable6.png"
              width={1200}
              height={120}
              className="mx-auto w-full object-contain border border-[#0000006b]"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 border-grey border-b-2 py-10">
        <div className="research-box">
          <h4 className="poppins font-normal">Hi-Fi Screens</h4>
          <p className="font-light poppins mt-4">
            Based on the feedback from initial user research, I created
            Hi-fidelity mockups. Each design element reflects careful
            consideration and iterative refinement, ensuring a seamless user
            experience tailored to the diverse needs of our users.
            <a className="underline cursor-pointer" href="https://www.figma.com/file/h1DH0m71ov9tItEFvIy2F8/Dialable-Project?type=design&node-id=0%3A1&mode=design&t=TDUtPjMcqgYCNYF1-1">
              Go here to see the full hi-fi screens.
            </a>
          </p>
          <div className="grid grid-cols-3 gap-4 py-8">
            <Image
              src="/assets/portfolio/Dialable/Dialable1.png"
              width={1200}
              height={120}
              className="mx-auto w-full object-contain border border-[#0000006b]"
            />
            <Image
              src="/assets/portfolio/Dialable/Dialable2.png"
              width={1200}
              height={120}
              className="mx-auto w-full object-contain border border-[#0000006b]"
            />
            <Image
              src="/assets/portfolio/Dialable/Dialable3.png"
              width={1200}
              height={120}
              className="mx-auto w-full object-contain border border-[#0000006b]"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 border-grey border-b-2 py-10">
        <div className="research-box">
          <h4 className="poppins font-normal">Style Guide (UI)</h4>
          <p className="font-light poppins mt-4">
            Before developing the first version of UI, I created most of the
            elements in the UI kit. I created a simple set of icons, buttons,
            and a color palette using different shades of the logo. I wanted the
            new site to represent the more approachable and relaxed version of
            Dialable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/assets/portfolio/Dialable/color-guide.jpg"
              width={1200}
              height={120}
              className="mx-auto w-full object-contain"
            />
            <Image
              src="/assets/portfolio/Dialable/fonts-guide.jpg"
              width={1200}
              height={120}
              className="mx-auto w-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 border-grey border-b-2 py-10">
        <div className="research-box">
          <h4 className="poppins font-normal">Key Takeaways</h4>
          <div className="questios-list mt-4">
            <h6 className="font-regular mb-2 poppins">Successes</h6>
            <ul className="list-disc pl-4">
              <li className="font-light poppins">
                Successfully designed and implemented a user-friendly interface
                for the business directory website.
              </li>
              <li className="font-light poppins">
                Incorporated features such as a marketplace, job portal,
                business listing, events, community, and inspirations to cater
                to the needs of disabled people.
              </li>
            </ul>
          </div>
          <div className="questios-list my-4">
            <h6 className="font-regular mb-2 poppins">Challenges</h6>
            <ul className="list-disc pl-4">
              <li className="font-light poppins">
                Faced challenges in ensuring accessibility and inclusivity for
                users with different disabilities.
              </li>
              <li className="font-light poppins">
                Overcame technical limitations to create a seamless user
                experience.
              </li>
            </ul>
          </div>
          <div className="questios-list">
            <h6 className="font-regular mb-2 poppins">Lessons Learned</h6>
            <ul className="list-disc pl-4">
              <li className="font-light poppins">
                Importance of conducting thorough user research to understand
                the specific needs and preferences of disabled users.
              </li>
              <li className="font-light poppins">
                Continuous testing and iteration are crucial to improve
                accessibility and usability.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 py-10">
        <div className="research-box">
          <h4 className="poppins font-normal">Checkout my other Projects</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <Link href="/ghar-ho-to-aisa">
            
            <Image
              src="/assets/portfolio/work2.jpg"
              width={1200}
              height={120}
              className="mx-auto w-full object-contain"
            />
            </Link>
            <Link href="/muse-gallery">
            
            <Image
              src="/assets/portfolio/work3.png"
              width={1200}
              height={120}
              className="mx-auto w-full object-contain"
            />
            </Link>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reasearch;
