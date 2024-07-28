import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="pt-28 md:pt-40 md:pb-16">
      <div class="grid max-w-screen-xl py-8 mx-auto md:gap-8 xl:gap-0 md:py-16 md:grid-cols-12">
        <div class="mr-auto place-self-center md:col-span-7 order-1 md:order-none text-left mb-10 md:mb-0 text-center md:text-left">
          <h1 class="text-5xl mt-8 md:mt-0 md:text-[97px] mb-4 leading-none dark:text-dark ">
            Hey there ,<br /> I'm <span className="text-[#1D00F0]">Aishwarya</span>
          </h1>
          <p class="text-[24px] poppins lg:mb-8 dark:text-dark">
            A UI UX Designer, enthusiastic by digital & technology, art and
            empowering digital products, user-centric & accessibility.
          </p>
        </div>
        <div class="lg:mt-0 lg:col-span-5 flex md:justify-end justify-center order-1 md:order-none">
          <Image
            src="/assets/ash/hero.jpg"
            width={289}
            height={150}
            className="rounded-[4.5rem] object-cover object-top w-[289px] h-[440px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
