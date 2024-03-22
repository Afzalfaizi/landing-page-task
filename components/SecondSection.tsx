"use client";
import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Customizable",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-cloud.png",
    alt: "Customizable",
  },
  {
    title: "Fast",
    description:
      "Our servers are located in the United States and Europe, ensuring a fast response time for your queries.",
    image: "/images/icon-fast.png",
    alt: "Fast",
  },
  {
    title: "Intergration",
    description:
      "We offer a wide range of integrations with our eCommerce platform, allowing you to easily integrate your eCommerce website with our platform.",
    image: "/images/icon-journey.png",
    alt: "Integration",
  },
  {
    title: "Full Stack",
    description:
      " get full stack software  development services with our team.",
    image: "/images/icon-layer.png",
    alt: "Full Stack",
  },
  {
    title: "Loyalty",
    description:
      "Set up your loyalty program and start rewarding your customers for their purchases and actions they take on your site.",
    image: "/images/icon-location.png",
    alt: "Loyalty",
  },
  {
    title: "Support",
    description:
      "Get 24/7 support from our team to help you with any issues you have.",
    image: "/images/icon-support-1.png",
    alt: "Support",
  },
];

export default function SecondSection() {
  return (
    <div>
      <div className=" md:flex-row flex-col items-center flex justify-center pb-10">
        <div className=" p-5 justify-center md:w-1/3">
          <div
            className=" bg-gradient-to-r from-blue-800 to bg-green-300 bg-clip-text
           text-transparent text-4xl md:text-4xl font-bold pb-6"
          >
            From startup to enterprise, Faizi tech is built for every type of
            business.
          </div>
          <div className=" text-2xl mb-8">
            Built for all businesses and communities, Faizi tech is the only
            platform you need to grow your business.
          </div>
          <button className=" bg-blue-500 text-white p-4 justify-center flex md:w-1/3 rounded-lg hover:bg-blue-600">
            Get started
          </button>
        </div>
        <video className=" rounded-xl md:w-2/5 p-4 md:p-0" autoPlay muted loop>
          <source src="/content/video2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className=" flex-col items-center justify-center">
        <div className=" text-3xl flex justify-center md:text-5xl font-bold pt-5 pb-10 bg-gradient-to-r from-purple-400 to-blue-800 bg-clip-text text-transparent">
          Product Features
        </div>
        <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-3 gap-4 md:px-40">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex-col space-y-6 pb-10 border
                        
                        p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out
                        "
            >
              <div
                className="
                            text-gray-600 text-3xl font-bold
                            "
              >
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={300}
                  height={300}
                  className="object-contain h-20 w-20 items-center justify-center flex mb-10"
                />
                <div>
                  <div
                    className="text-2xl pb-4 bg-gradient-to-t
                                    from-black
                                    to-gray-400
                                    bg-clip-text
                                    text-transparent

                                    
                                    
                                    "
                  >
                    {feature.title}
                  </div>

                  <div className="bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent text-lg">
                    {feature.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
