import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav class="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <ul class="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
          <Link class="logo" href="/">
            <h3 class="">
              <span className="font-bold">Aishwarya</span> Bagade
            </h3>
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
            Menu
          </label>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
