import Image from "next/image";
import React from "react";

const MuseContent = () => {
  return (
    <section className="py-16 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 border-t-2 border-grey border-b-2 py-10">
        <div className="research-box">
          <h4 className="poppins font-normal">Brief</h4>
          <p className="font-light poppins mt-4">
            In this personal project, I focused on designing wireframes and
            hi-fi prototypes for a museum mobile app. While no user research was
            conducted, the emphasis was on creating a seamless user experience.
            The app features functionalities such as finding nearby museums, a
            ticket scanner tab, and a calendar for scheduling visits. Users can
            also explore museum collections, events, and workshops, as well as
            shop for art-related items and paintings through the marketplace
            section. Through this project, I aimed to refine my UI/UX design
            skills and create an intuitive app interface for museum enthusiasts.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 border-grey border-b-2 py-10">
        <div className="research-box">
          <h4 className="poppins font-normal">Ideation</h4>
          <p className="font-light poppins my-4">
            In the ideation phase, I focused on mapping out the structure and
            flow of the app to ensure a seamless user experience. This included
            creating a sitemap to visualize the app's navigation structure and a
            user flow to outline the journey users would take through the app.
            By planning the app's layout and functionality during the ideation
            phase, I aimed to create an intuitive and engaging experience for
            users exploring museums and art."
          </p>

          <h4>Sitemap</h4>
          <Image
            src="/assets/portfolio/mobile-app/sitemap.jpg"
            width={1200}
            height={120}
            className="mx-auto py-10 w-full object-contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 border-grey border-b-2 py-10">
        <div className="research-box">
          <h4 className="poppins font-normal">User Flow chart</h4>
          <p className="font-light poppins my-4">
            User Flow 1 : Schedule Visit
          </p>
          <Image
            src="/assets/portfolio/mobile-app/userflow1.jpg"
            width={1200}
            height={120}
            className="mx-auto w-full"
          />
          <p className="font-light poppins my-4">User Flow 2 : Shop Item </p>
          <Image
            src="/assets/portfolio/mobile-app/userflow2.jpg"
            width={1200}
            height={120}
            className="mx-auto w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 border-grey border-b-2 py-10">
        <div className="research-box">
          <h4 className="poppins font-normal">Lo-Fi Wireframes</h4>
          <p className="font-light poppins mt-4">
            In the lo-fi wireframes section, I translated the initial ideas into
            basic sketches that outline the layout and structure of the museum
            mobile app. These wireframes serve as a blueprint for the app's key
            features, such as the ticket scanner, calendar for scheduling
            visits, collection exploration, events, workshops, and the
            marketplace for art shopping.
          </p>
          <div className="grid md:grid-cols-4 grid-cols-1 py-8">
            <div className="grid-cols-1">
              <Image
                src="/assets/portfolio/mobile-app/lofi1.png"
                width={225}
                height={400}
              />
              <Image
                src="/assets/portfolio/mobile-app/lofi2.png"
                width={225}
                height={400}
                className="my-4"
              />
              <Image
                src="/assets/portfolio/mobile-app/lofi3.png"
                width={225}
                height={400}
              />
            </div>

            <div>
              <Image
                src="/assets/portfolio/mobile-app/lofi4.png"
                width={228}
                height={950}
              />
            </div>
            <div className="grid-cols-1">
              <Image
                src="/assets/portfolio/mobile-app/lofi5.png"
                width={225}
                height={400}
              />
              <Image
                src="/assets/portfolio/mobile-app/lofi6.png"
                width={225}
                height={400}
                className="my-4"
              />
              <Image
                src="/assets/portfolio/mobile-app/lofi7.png"
                width={225}
                height={400}
              />
            </div>
            <div className="grid-cols-1">
              <Image
                src="/assets/portfolio/mobile-app/lofi8.png"
                width={225}
                height={400}
              />
              <Image
                src="/assets/portfolio/mobile-app/lofi9.png"
                width={225}
                height={400}
                className="my-4"
              />
              <Image
                src="/assets/portfolio/mobile-app/lofi10.png"
                width={225}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 border-grey border-b-2 py-10">
        <div className="research-box">
          <h4 className="poppins font-normal">Hi-fi Prototype</h4>
          <p className="font-light poppins mt-4">
            In the hi-fi mockup section, I transformed the conceptual wireframes
            into detailed and visually rich designs for the museum mobile app.
            Each screen was carefully crafted to enhance user interaction and
            navigation, ensuring a seamless experience for users as they explore
            nearby museums, use the ticket scanner, schedule visits with the
            calendar feature, discover collections, events, workshops, and shop
            for art items and paintings in the marketplace.
          </p>
          <div className="grid md:grid-cols-4 grid-cols-1 py-8">
            <Image
              src="/assets/portfolio/mobile-app/hifi1.png"
              width={225}
              height={400}
              className="w-full"
            />
            <Image
              src="/assets/portfolio/mobile-app/hifi2.png"
              width={225}
              height={400}
              className="w-full"
            />
            <Image
              src="/assets/portfolio/mobile-app/hero.png"
              width={225}
              height={400}
              className="w-full"
            />
            <Image
              src="/assets/portfolio/mobile-app/hifi3.png"
              width={225}
              height={400}
              className="w-full"
            />
            <Image
              src="/assets/portfolio/mobile-app/hifi4.png"
              width={225}
              height={400}
              className="w-full"
            />
            <Image
              src="/assets/portfolio/mobile-app/hifi5.png"
              width={225}
              height={400}
              className="w-full"
            />
            <Image
              src="/assets/portfolio/mobile-app/hifi6.png"
              width={225}
              height={400}
              className="w-full"
            />
            <Image
              src="/assets/portfolio/mobile-app/hifi7.png"
              width={225}
              height={400}
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 border-grey border-b-2 py-10">
        <div className="research-box">
          <h4 className="poppins font-normal">Style Guide (UI)</h4>
          <p className="font-light poppins mt-4">
          After finalizing the wireframes for the website, I designed a comprehensive style guide to ensure consistency in the UI design process. I curated a set of design elements including icons, buttons, typography, and a vibrant color palette. Each element was carefully selected to reflect the brand's values of innovation, quality, and transparency, while also aiming to evoke a sense of approachability and comfort for users navigating the new website. 
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/assets/portfolio/mobile-app/guide1.jpg"
              width={1200}
              height={120}
              className="mx-auto w-full object-contain"
            />
            <Image
              src="/assets/portfolio/mobile-app/guide2.jpg"
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

export default MuseContent;
