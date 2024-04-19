import Image from "next/image";
import React from "react";

type Props = {};

const Result = (props: Props) => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-heading">
        Results In <span className="font-bold">Days</span>
      </h1>
      <div className="my-4 md:flex md:justify-center p-4">
        <Image
          src="https://images.unsplash.com/photo-1519336367661-eba9c1dfa5e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Test result"
          width={540}
          height={360}
          className="rounded-lg mb-6 "
        />
        <div className="flex flex-col md:p-8 p-4 md:w-1/3 md:justify-between">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            voluptatibus aspernatur inventore pariatur nobis error, dolores
            magni assumenda, veritatis, ab ipsam iste ex vero deserunt.
          </span>
          <button className="bg-primary rounded-lg my-3 py-2 px-4 hover:bg-white hover:border-[1px] hover:border-black transition-all duration-150">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
