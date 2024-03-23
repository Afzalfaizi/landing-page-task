import React from "react";
import Link from "next/link";
import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" pt-[1rem] pb-[2rem] bg-white text-black">
      <div
        className=" w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px]
         pb-5 border-gray-600 border-opacity-40"
      >
        <div>
          <div>
            {" "}
            <Image
              src="/images/logo1.svg" // specifying the source of the image
              alt="Logo" // providing alternative text for the image
              height={100} // setting the height of the image
              width={100} // setting the width of the image
            />
          </div>
          <h1 className=" text-[20px] mt-[0.5rem] text-black">
            No matter what you sell, Faizi Tech has everthing you need to run
            your online store
          </h1>
          <Link href={"https://mail.google.com/mail"}>
            {" "}
            <p className=" mt-[1.3rem] text-blue-700 underline font-semibold ">
              afzaalm993@gmail.com
            </p>
          </Link>
        </div>
        <div></div>
        <div className=" lg:mx-auto">
          <h1 className=" text-black font-semibold  text-[17px]">Address</h1>
          <div className=" flex items-center mt-[1rem] space-x-2">
            <MapIcon className=" w-[1rem] h-[1rem] text-blue-600" />
            <p className=" text-[17px] font-normal text-black opacity-75">
              Shahkot, Punjab, Pakistan.
            </p>
          </div>
          <div className=" flex items-center mt-[1rem] space-x-2">
            <EnvelopeIcon className=" w-[1rem] h-[1rem] text-blue-600" />
            <p className=" text-[17px] font-normal text-black opacity-75">
              afzaalm993@gmail.com
            </p>
          </div>
          <div className=" flex items-center mt-[1rem] space-x-2">
            <PhoneIcon className=" w-[1rem] h-[1rem] text-blue-600" />
            <p className=" text-[17px] font-normal text-black opacity-75">
              +92 306 415 3756
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-[1.4rem] w-[80%] mx-auto text-black opacity-90">
        &#169; Copyright {new Date().getFullYear()} | Developed by Muhammad
        Afzal <br />
        This website is built with NextJS and TailwindCSS.
        <br />
        Check out the source code on
        <Link
          href="https://github.com/Afzalfaizi/landing-page-task.git"
          target="_blank"
          rel="noreferrer"
          className=" text-[15px] text-blue-700 underline font-bold"
        >
          {" "}
          Github!{" "}
        </Link>
      </div>
    </div>
  );
};

export default Footer;
