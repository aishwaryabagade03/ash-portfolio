import React from "react";

const Contact = () => {
  return (
    <section className="pt-24 pb-32">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl md:text-6xl mb-10">CONTACT</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 items-start">
          <div className="email-box">
            <h5 className="poppins font-normal">
              <a
                href="mailto:aishwaryaabagade3@gmail.com"
                className="text-xl md:text-[26px]"
              >
                aishwaryaabagade3@gmail.com
              </a>
            </h5>
            <h5 className="poppins font-normal">
              <a href="tel:(+91) 8779612395" className="text-xl md:text-[26px]">
                (+91) 8779612395
              </a>
            </h5>
            <h5 className="poppins font-normal my-1 text-xl md:text-[26px]">
              India Based.
            </h5>
          </div>

          <div className="form-box mt-12 md:mt-0">
            <form
              class=""
              action="https://formsubmit.co/aishwaryaabagade3@gmail.com"
              method="POST"
            >
              <div>
                <span class="poppins  text-xl text-gray-600 font-light">
                  Full Name
                </span>
                <input
                  class="w-full border-b-2 border-black mt-2 p-3  focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=""
                  name="full name"
                />
              </div>
              <div class="mt-8">
                <span class="poppins  text-xl text-gray-600 font-light">
                  Email
                </span>
                <input
                  class="w-full border-b-2 border-black mt-2 p-3  focus:outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                />
              </div>
              <div class="mt-8">
                <span class="poppins  text-xl text-gray-600 font-light">
                  Message
                </span>
                <textarea
                  class="w-full h-32 border-b-2 border-black mt-2 p-3  focus:outline-none focus:shadow-outline"
                  name="message"
                ></textarea>
              </div>
              <div class="mt-8">
                <button
                  className="bg-black text-white px-12 py-3 rounded-lg text-xl duration-300  hover:bg-[#1d00f0] poppins"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
