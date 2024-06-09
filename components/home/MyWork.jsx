import { projects } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyWork = () => {
  
  return (
    <section className="py-24">
      
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl md:text-8xl mb-4">My Work</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {projects.map((elem, ind) => (
            <Link href={elem.url} key={ind + elem.id}>
              <div className="project-div [&>img]:hover:opacity-50 my-4 transition-all">

                <Image src={elem.img} width={450} height={450} className="transition-all duration-300"/>
                <div className="mt-4 flex items-center justify-between"> 
                  <div>
                    <h6>
                      <Link href="/" className="poppins">
                        {elem.title}
                      </Link>
                    </h6>
                    <p className="para-small poppins">{elem.type}</p>
                  </div>
                  {ind !== 2 && (
                    <div>
                      <Link href={elem.projectUrl}>
                      <svg
                          className="rotate-[220deg]"
                          width="64px"
                          height="64px"
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
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;
