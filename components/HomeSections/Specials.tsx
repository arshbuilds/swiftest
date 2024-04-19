import React from "react";

type Props = {};

const Specials = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl font-heading">Why Swiftest Solutions?</h1>
      <div className="w-full h-64 flex flex-col items-center justify-center p-4">
        <h1 className="bg-[#cdb4db] font-heading font-bold px-4 py-2 my-2 rounded-full md:text-xl">
          1
        </h1>
        <h2 className="font-heading md:text-2xl">
          Discreet & Confidential Testing
        </h2>
        <h3 className="text-center md:text-xl">
          We understand the sensitivity of STD testing. Our packaging is
          unmarked, and results are delivered securely to protect your privacy.
        </h3>
      </div>
      <div className="w-full h-64 flex flex-col items-center justify-center p-4">
        <h1 className="bg-[#ffc8dd] font-heading font-bold px-4 py-2 my-2 rounded-full md:text-xl">
          2
        </h1>
        <h2 className="font-heading md:text-2xl">Fast & Accurate Results</h2>
        <h3 className="text-center md:text-xl">
          Our lab-certified tests provide reliable results within days, so you
          can take action quickly and confidently
        </h3>
      </div>

      <div className="w-full h-64 flex flex-col items-center justify-center p-4">
        <h1 className="bg-[#ffafcc] font-heading font-bold px-4 py-2 my-2 rounded-full md:text-xl">
          3
        </h1>
        <h2 className="font-heading md:text-2xl">Comprehensive Test Panels</h2>
        <h3 className="text-center md:text-xl">
          We offer a range of test panels to screen for the most common STDs,
          ensuring you get the answers you need.
        </h3>
      </div>

      <div className="w-full h-64 flex flex-col items-center justify-center p-4">
        <h1 className="bg-[#fec89a] px-4 py-2 my-2 rounded-full font-heading font-bold md:text-xl">
          4
        </h1>
        <h2 className="font-heading md:text-2xl">Affordable Options</h2>
        <h3 className="text-center">
          We believe STD testing should be accessible. We provide competitive
          pricing and flexible payment options.
        </h3>
      </div>
    </div>
  );
};

export default Specials;
