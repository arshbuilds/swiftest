import Image from "next/image";
import React from "react";
import Step1 from "@/public/step1.svg";
import Step2 from "@/public/step2.svg";
import Step3 from "@/public/step3.svg";

type Props = {};

const Steps = (props: Props) => {
  return (
    <div className="w-screen flex justify-center p-4 flex-col items-center">
      <h1 className="font-heading my-4 text-xl">How It Works?</h1>
      <div className="md:hidden">
        <div className="flex w-full items-center justify-around my-4">
          <span className="text-lg">1. Order Your Kit</span>
          <Image src={Step1} alt="Step 1" width={100} />
        </div>
        <div className="flex w-full items-center justify-around my-4">
          <Image src={Step2} alt="Step 2" width={100} />
          <span className="text-lg">2. Collect Your Sample</span>
        </div>
        <div className="flex w-full items-center justify-around my-4">
          <span className="text-lg">3. Get Lab-Certifies Results</span>
          <Image src={Step3} alt="Step 3" width={100} />
        </div>
      </div>
      <div className="justify-evenly w-full my-6 hidden sm:flex">
        <div className="flex flex-col items-center justify-center">
          <span>1. Order Your Kit</span>
          <Image src={Step1} alt="Step 1" className="my-6" width={200} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>2. Collect Your Sample</span>
          <Image src={Step2} alt="Step 2" className="my-6" width={200} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>3. Get Lab-Certificates Results</span>
          <Image src={Step3} alt="Step 3" className="my-6" width={200} />
        </div>
      </div>
    </div>
  );
};

export default Steps;
