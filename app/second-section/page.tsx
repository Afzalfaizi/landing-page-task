"use client";
import React from "react";

const features = {
  title: "Features",
  items: [
    {
      title: "Customizable",
      description:
        "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
      image:
        "https://images.unsplash.com/photo-1600000000000-0000000000000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      alt: "Customizable",
    },
    {
      title: "Fast",
      description:
        "Our servers are located in the United States and Europe, ensuring a fast response time for your queries.",
      image:
        "https://images.unsplash.com/photo-1600000000000-0000000000000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      alt: "Fast",
    },
    {
      title: "Intergration",
      description:
        "We offer a wide range of integrations with our eCommerce platform, allowing you to easily integrate your eCommerce website with our platform.",
      image:
        "https://images.unsplash.com/photo-1600000000000-0000000000000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      alt: "Integration",
    },
    {
      title: "Full Stack",

      image:
        "https://images.unsplash.com/photo-1600000000000-0000000000000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      alt: "Full Stack",
    },
    {
      title: "Loyalty",
      description:
        "Set up your loyalty program and start rewarding your customers for their purchases and actions they take on your site.",
      image:
        "https://images.unsplash.com/photo-1600000000000-0000000000000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      alt: "Loyalty",
    },
    {
      title: "Support",
      description:
        "Get 24/7 support from our team to help you with any issues you have.",
      image:
        "https://images.unsplash.com/photo-1600000000000-0000000000000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      alt: "Support",
    },
  ],
};

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
    </div>
  );
}
