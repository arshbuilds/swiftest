import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { AiTwotoneCopyrightCircle } from "react-icons/ai";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-black text-white w-full flex flex-col p-4">
      <div className="flex flex-col items-center justify-center w-full">
        <span className="my-2 text-xl">Follow Us On</span>
        <div className="flex gap-2">
          <Link href={"/"}>
            <FiInstagram size={20} />
          </Link>
          <Link href={"/"}>
            <FaFacebook size={20} />
          </Link>
          <Link href={"/"}>
            <FaTiktok size={20} />
          </Link>
        </div>
      </div>
      <span className="my-4 text-center">
        By using this service, I agree to the{" "}
        <Link className="underline" href={"/"}>
          Terms and conditions
        </Link>
      </span>
      <span className="flex text-center justify-center">
        <AiTwotoneCopyrightCircle className="invert mx-2" size={20} />
        2024 Swiftest Solutions, All rights reserved
      </span>
    </div>
  );
};

export default Footer;
