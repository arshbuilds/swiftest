import Image from "next/image";
import React from "react";
import Test from "@/public/test.png";
import Link from "next/link";

type Props = {};

const Products = (props: Props) => {
  return (
    <div className="p-1 my-8 flex flex-col items-center rounded-lg">
      <h1 className="font-heading text-2xl">Test For Your Wellness</h1>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="bg-[#a3d2fd] m-4 rounded-2xl md:w-1/4">
          <Link href={"/"}>
            <Image
              src={Test}
              alt="Product Image"
              width={50}
              height={50}
              className=" w-full rounded-t-lg"
            />
            <div className="my-2 p-4 pr-2">
              <span className="font-semibold">Tests For:- </span>{" "}
              <span className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, fugit!
              </span>
            </div>
            <div className="my-2 p-4 pr-2">
              <span className="font-semibold">Essential For:- </span>{" "}
              <span className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                ipsum rerum natus voluptatibus temporibus quae dolore tempore ab
                distinctio nisi.
              </span>
            </div>
          </Link>
        </div>
        <div className="bg-[#a3d2fd] m-4 rounded-2xl md:w-1/4">
          <Link href={"/"}>
            <Image
              src={Test}
              alt="Product Image"
              width={50}
              height={50}
              className="  w-full rounded-t-lg"
            />
            <div className="my-2 p-4 pr-2">
              <span className="font-semibold">Tests For:- </span>{" "}
              <span className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, fugit!
              </span>
            </div>
            <div className="my-2 p-4 pr-2">
              <span className="font-semibold">Essential For:- </span>{" "}
              <span className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                ipsum rerum natus voluptatibus temporibus quae dolore tempore ab
                distinctio nisi.
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
