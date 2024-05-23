import React from "react";

const Contact = () => {
  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto">
        <h1>CONTACT</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 items-start">
          <div className="email-box">
            <h5 className="poppins font-normal">
              <a href="mailto:aishwaryaabagade3@gmail.com">
                aishwaryaabagade3@gmail.com
              </a>
            </h5>
            <h5 className="poppins font-normal">
              <a href="tel:(+91) 8779612395">(+91) 8779612395</a>
            </h5>
            <h5 className="poppins font-normal my-1">India Based.</h5>
          </div>
          <div className="form-box">
            <div class="">
              <div>
                <span class="poppins  text-xl text-gray-600 font-light">
                  Full Name
                </span>
                <input
                  class="w-full border-b-2 border-black mt-2 p-3  focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=""
                />
              </div>
              <div class="mt-8">
                <span class="poppins  text-xl text-gray-600 font-light">
                  Email
                </span>
                <input
                  class="w-full border-b-2 border-black mt-2 p-3  focus:outline-none focus:shadow-outline"
                  type="email"
                />
              </div>
              <div class="mt-8">
                <span class="poppins  text-xl text-gray-600 font-light">
                  Message
                </span>
                <textarea class="w-full h-32 border-b-2 border-black mt-2 p-3  focus:outline-none focus:shadow-outline"></textarea>
              </div>
              <div class="mt-8">
              <button className="bg-black text-white px-12 py-3 rounded-lg text-xl" type="submit">Send Message</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
