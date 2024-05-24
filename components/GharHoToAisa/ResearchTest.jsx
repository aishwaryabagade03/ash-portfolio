import { userPainPoints } from "@/utils/projects";
import Image from "next/image";
import React from "react";

const ResearchTest = () => {
  return (
    <section className="py-16  max-w-screen-xl mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 border-t-2 border-grey border-b-2 py-10">
        <div className="research-box">
          <h4 className="poppins font-normal">Research</h4>
          <p className="font-light poppins mt-4">
            In my user research for Ghar Ho Toh Aisa's real estate website
            redesign, I focused into understanding the aspirations and desires
            of potential homeowners. Through extensive exploration of customer
            preferences and industry trends, I uncovered insights into the
            elements that contribute to an exceptional living experience. By
            analyzing user behavior and preferences, I identified key areas for
            improvement, such as intuitive navigation, immersive property
            showcases, and customer support functionalities.
          </p>
        </div>
        <div className="critical-questions">
          <h4 className="poppins font-normal">Critical Questions</h4>
          <div className="questios-list mt-4">
            <ul className="list-disc">
              <li className="font-light poppins">
                What specific improvements or enhancements are planned to
                enhance user experience on the website?
              </li>
              <li className="font-light poppins">
                How will the redesigned website streamline the home-buying
                process for customers, making it more efficient and
                user-friendly?{" "}
              </li>
              <li className="font-light poppins">
                What metrics or key performance indicators will be used to
                evaluate the success of the website redesign?{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pain-points py-10">
        <h4>User Pain Points</h4>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 border-b-2 border-grey py-8">
          {userPainPoints.map((elem, ind) => (
            <div className="pain-point-box text-center mb-8" key={ind}>
              <div className="circle-box rounded-full p-4 w-16 h-16 bg-[#9F238B] text-center text-white text-lg font-bold mx-auto">
                {elem.id}
              </div>
              <h6 className="my-4 font-normal poppins">{elem.title}</h6>
              <p className="font-light poppins">
                Users struggle to find their ideal homes due to ineffective
                search and filtering options on the current website.
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 border-grey border-b-2 py-10">
          <div className="research-box">
            <h4 className="poppins font-normal">Competitive Audit</h4>
            <p className="font-light poppins mt-4">
              After identifying key user pain points, I conducted a
              comprehensive competitive audit for the website, dedicated to
              delivering dream homes and exceptional living experiences. By
              analyzing competing platforms in the real estate industry, I
              focused into their functionality, user experience, and overall
              benefits. This audit enabled me to identify areas for improvement
              and inform the redesign process, that delivers unparalleled value
              to its users.
            </p>
            <Image
              src="/assets/portfolio/real-estate/meter-box.png"
              width={1200}
              height={120}
              className="mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="persona border-b-2 border-grey">
        <div className="research-box">
          <h4 className="poppins font-normal">Persona</h4>
          <p className="font-light poppins mt-4">
            Based on my research, I crafted a persona of my client, enabling me
            to empathize deeply with their goals throughout the design journey.
            By understanding their preferences, pain points, and objectives, I'm
            equipped to lead the redesign process and create a new website that
            exceeds expectations and elevates their brand experience.
          </p>
        </div>
        <div className="grid w-full grid-cols-12 gap-4 py-8">
          <div className="col-span-9">
            <div className="col-span-2 mb-4">
              <div className="inner-text-box px-6 py-4 rounded-lg bg-[#FBD3F9]">
                <h6 className="poppins font-bold uppercase">Background</h6>
                <p className="font-regular poppins mt-1">
                  Dhruvita Bosmiya is a CEO at a leading real estate company
                  “Ghar Ho Toh Aisa” in Mumbai. She is passionate about
                  innovation and understands the importance of delivering
                  exceptional customer experiences to build brand loyalty and
                  drive sales.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="inner-text-box px-10 pt-5 pb-14 rounded-lg bg-[#FBD3F9]">
                  <h6 className="poppins font-bold uppercase">Goals</h6>
                  <ul className="list-disc mt-1">
                    <li className="font-regular poppins">
                      Re-design the company's website, to reflect the brand's
                      commitment to delivering dream homes and exceptional
                      living experiences.
                    </li>
                    <li className="font-regular poppins">
                      Aims to create a user-friendly website that provides
                      customers with easy access to information about available
                      properties, amenities, and pricing.
                    </li>
                    <li className="font-regular poppins">
                      Increasing functionality by enabling the customers with
                      EMI Calculator, easy navigation, and map feature.
                    </li>
                    <li className="font-regular poppins">
                      To build trust with potential customers by providing
                      transparent information about the company's track record,
                      customer testimonials.{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="inner-text-box  px-10 pt-5 pb-20 rounded-lg bg-[#FBD3F9]">
                  <h6 className="poppins font-bold uppercase">Challenges</h6>
                  <ul className="list-disc mt-1">
                    <li className="font-regular poppins">
                      The current website is outdated and does not effectively
                      showcase the company's brand or offerings.
                    </li>
                    <li className="font-regular poppins">
                      The navigation structure of the current website is
                      confusing, making it difficult for users to find the
                      information they need.
                    </li>
                    <li className="font-regular poppins">
                      The current website lacks interactive features and
                      engagement opportunities, resulting in low user engagement
                      and conversion rates.
                    </li>
                    <li className="font-regular poppins">
                      The current website is not fully optimized for mobile
                      devices, limiting accessibility and usability for mobile
                      users.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Image
                  src="/assets/portfolio/real-estate/profile.png"
                  width={320}
                  height={400}
                  //   className="w-full h-full"
                />
              </div>
              <div className="age-box text-center rounded-lg bg-[#FBD3F9] px-8 py-5">
                <p className="mb-2 poppins">
                  <span className="font-bold">Age:</span> 27
                </p>
                <p className="mb-2 poppins">
                  <span className="font-bold">Job Title:</span> CEO
                </p>
                <p className="mb-2 poppins">
                  <span className="font-bold">Status:</span> Single
                </p>
                <p className="mb-2 poppins">
                  <span className="font-bold">Location:</span> Mumbai, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 border-grey border-b-2 py-10">
        <div className="research-box">
          <h4 className="poppins font-normal">Ideation</h4>
          <p className="font-light poppins my-4">
            Following research and discovery, I embarked on the ideation phase
            for re-designing the website. I brainstormed innovative solutions
            focused on customer-friendly planning, space management, and
            transparent on-time delivery. With a keen eye for detail and
            user-centric design principles, I aimed to create a new website that
            eliminates redundant information, streamlines navigation, and
            elevates the overall user experience.
          </p>

          <h4>Sitemap</h4>
          <Image
            src="/assets/portfolio/real-estate/sitemap.jpg"
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
          <Image
            src="/assets/portfolio/real-estate/wireframes.png"
            width={1200}
            height={120}
            className="mx-auto w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 border-grey border-b-2 py-10">
        <div className="research-box">
          <h4 className="poppins font-normal">Hi-Fi Screens</h4>
          <p className="font-light poppins mt-4">
            Next I designed hi-fi mockups for Ghar Ho Toh Aisa's new website
            after conducting thorough user research. Each design element
            embodies our commitment to delivering exceptional living
            experiences, with customer-friendly planning, impeccable space
            management, and transparent on-time delivery at the forefront of
            every detail. Go here to see the full hi-fi mockups.
          </p>
          <Image
            src="/assets/portfolio/real-estate/hifi.png"
            width={1200}
            height={120}
            className="mx-auto w-full object-contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 border-grey border-b-2 py-10">
        <div className="research-box">
          <h4 className="poppins font-normal">Style Guide (UI)</h4>
          <p className="font-light poppins mt-4">
            After finalizing the wireframes for the website, I designed a
            comprehensive style guide to ensure consistency in the UI design
            process. I curated a set of design elements including icons,
            buttons, typography, and a vibrant color palette. Each element was
            carefully selected to reflect the brand's values of innovation,
            quality, and transparency, while also aiming to evoke a sense of
            approachability and comfort for users navigating the new website.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/assets/portfolio/real-estate/color-guide.jpg"
              width={1200}
              height={120}
              className="mx-auto w-full object-contain"
            />
            <Image
              src="/assets/portfolio/real-estate/fonts-guide.jpg"
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
                Achieved a modern and user-friendly website design that reflects
                the company's commitment and exceptional living experiences.
              </li>
              <li className="font-light poppins">
                Implemented innovative features and functionalities to enhance
                customer interaction and satisfaction, such as EMI calculator,
                project prices and details, map feature and customer contact
                support.
              </li>
            </ul>
          </div>
          <div className="questios-list my-4">
            <h6 className="font-regular mb-2 poppins">Challenges</h6>
            <ul className="list-disc pl-4">
              <li className="font-light poppins">
                Balancing aesthetics with functionality to create a visually
                appealing yet user-friendly website interface.
              </li>
              <li className="font-light poppins">
                Addressing the diverse needs and preferences of different user
                demographics, including customers, investors, and real estate
                agents.{" "}
              </li>
              <li className="font-light poppins">
                Ensuring seamless integration of complex features such as
                property listings, project portfolios, and customer testimonials
                while maintaining website performance and usability.
              </li>
            </ul>
          </div>
          <div className="questios-list">
            <h6 className="font-regular mb-2 poppins">Lessons Learned</h6>
            <ul className="list-disc pl-4">
              <li className="font-light poppins">
                Prioritize user experience (UX) design principles to ensure
                intuitive navigation, clear information hierarchy, and seamless
                interactions for website visitors.
              </li>
              <li className="font-light poppins">
                Conduct thorough user research and gather feedback throughout
                the design process to understand company’s needs, pain points,
                and preferences.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchTest;
