import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="pt-16 pb-6 bg-black">
      <div className="max-w-screen-xl mx-auto text-white">
        <div className="grid md:grid-cols-2 grid-cols-1 justify-between w-full">
          <div>
            <div>
              <span className="text-white text-5xl poppins">
                Have a nice project?
              </span>
              <br />
              <h3 className="mt-5">
                <span className="text-8xl poppins pt-4">Get In Touch</span>
              </h3>
            </div>
            <div className="py-24">
              <p className="text-[#AAAAAA] poppins mb-2">
                <span className="text-2xl">Send a Message</span>
              </p>
              <a
                href="mailto:aishwaryaabagade3@gmail.com"
                className="text-3xl text-white poppins"
              >
                aishwaryaabagade3@gmail.com
              </a>
            </div>
          </div>
          <div className="md:text-right">
            <div className="flex flex-col gap-3">
              <Link href="/work" className="text-white text-2xl">
                WORK
              </Link>
              <Link href="/" className="text-white text-2xl">
                RESUME
              </Link>
              <Link href="/about" className="text-white text-2xl">
                ABOUT
              </Link>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 justify-between w-full">
          <div className="poppins">
            <p className="text-white poppins">
              Copyright © 2024 Aishwarya Bagade.
            </p>
          </div>
          <div className="flex gap-3 text-right md:justify-end">
              <Link href="/work" className="text-white text-lg">
                WORK
              </Link>
              <Link href="/" className="text-white text-lg">
                RESUME
              </Link>
              <Link href="/about" className="text-white text-lg">
                ABOUT
              </Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
