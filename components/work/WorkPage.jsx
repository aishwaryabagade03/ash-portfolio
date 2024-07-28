import { work } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkPage = () => {
  return (
    <section className="py-32">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 gap-12 my-8">
          {work.map((elem, ind) => (
            <Link href={`${elem.url}`} key={elem.id + ind}>
              <div className="work-item flex flex-col justify-center md:flex-row items-center gap-5">
                <div className="work-image md:w-1/2">
                  <Image
                    src={elem.img}
                    width={500}
                    height={300}
                    className="w-full"
                  />
                </div>
                <div className="work-text md:w-1/2 md:ml-8">
                  <div className="flex gap-8">
                    <h3 className="mb-3">{elem.title}</h3>
                    {ind !== 2 && (
                      <Link href={elem.mainUrl}>
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
                    )}
                  </div>
                  <span className="text-xl poppins">{elem.para}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkPage;
