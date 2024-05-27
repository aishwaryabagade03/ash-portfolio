import { testimonials } from "@/utils/testimonial";
import React from "react";

const Testimonial = () => {
  return (
    <section className="py-24">
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="lg:text-8xl my-20">Testimonial</h1>
        <div className="testimonial-box max-w-4xl mx-auto my-12 grid md:grid-cols-2 gap-5 justify-center place-items-center	">
          {testimonials.map((elem, ind) => (
            <div className="testimonial-item p-8 border-2 border-black rounded-xl text-center " key={ind}>
                <svg fill="#000000" className="text-center mx-auto pb-4" width="78px" height="78px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M116,72v88a48.05436,48.05436,0,0,1-48,48,8,8,0,0,1,0-16,32.036,32.036,0,0,0,32-32v-8H40a16.01833,16.01833,0,0,1-16-16V72A16.01833,16.01833,0,0,1,40,56h60A16.01833,16.01833,0,0,1,116,72ZM216,56H156a16.01833,16.01833,0,0,0-16,16v64a16.01833,16.01833,0,0,0,16,16h60v8a32.036,32.036,0,0,1-32,32,8,8,0,0,0,0,16,48.05436,48.05436,0,0,0,48-48V72A16.01833,16.01833,0,0,0,216,56Z"></path> </g></svg>
              <span className="text-base poppins">{elem.text}</span>
              <h6 className="mt-8 poppins font-light">{elem.author}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
