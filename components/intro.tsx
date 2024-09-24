import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <section>
      <div
        className="flrex
        items-center
        justify-center"
      >
        <div>
          <Image
            src="/user.png"
            alt="Neha Prasad"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.35rem]"
          />
        </div>
      </div>
    </section>
  );
}
