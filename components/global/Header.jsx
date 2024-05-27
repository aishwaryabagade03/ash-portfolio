import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav class="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <ul class="navigation max-w-screen-xl flex flex-wrap justify-between items-center relative mx-auto pt-8 pb-4">
          <Link class="logo" href="/">
            <h5 class="">
              <span className="font-bold">Aishwarya</span> Bagade
            </h5>
          </Link>
          <input type="checkbox" id="check" />

          <span class="menu flex [&>li]:px-12 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:uppercase [&>li>a]:text-lg">
            <li>
              <Link href="/work">Work</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/resume.pdf" download={true}>Resume</Link>
            </li>

            <label for="check" class="close-menu">
              X
            </label>
          </span>

          <label for="check" class="open-menu">
          <svg width="50px" height="50px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><line x1="16" y1="32" x2="48" y2="32"></line><line x1="16" y1="20" x2="48" y2="20"></line><line x1="16" y1="44" x2="48" y2="44"></line></g></svg>
          </label>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
