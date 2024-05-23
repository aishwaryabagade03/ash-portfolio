import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-12">
      <div class="grid max-w-screen-xl py-8 mx-auto md:gap-8 xl:gap-0 md:py-16 md:grid-cols-12">
        <div class="mr-auto place-self-center md:col-span-7 order-1 md:order-none text-center md:text-left">
          <h1 class=" mb-4 leading-none dark:text-dark">
            Hey there , I'm <span className="text-[#1D00F0]">Aishwarya</span>
          </h1>
          <p class="poppins lg:mb-8 md:text-lg lg:text-xl dark:text-dark">
            A UI UX Designer, enthusiastic by digital & technology, art and
            empowering digital products, user-centric & accessibility.
          </p>
        </div>
        <div class="lg:mt-0 lg:col-span-5 flex md:justify-end justify-center">
          <Image
            src="/assets/ash/hero.jpg"
            width={250}
            height={150}
            className="rounded-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
