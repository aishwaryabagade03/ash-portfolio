import Image from "next/image";
import Link from "next/link";
import React from "react";

const Interactions = () => {
  
  return (
    <section className="py-24">
      
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl md:text-8xl mb-14">Animations & Interactions</h1>
            <Image src='/assets/interactions/interaction.jpeg' width={600} height={700} className="object-contain"/>
            <div className="mt-4">
                    <h6>
                      <Link href="/ui-micro-interactions" className="poppins">
                      Micro interactions
                      </Link>
                    </h6>
                    <p className="para-small poppins">In Figma</p>
                  </div>
      </div>
    </section>
  );
};

export default Interactions;
