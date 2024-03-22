import React from "react"; // importing React library

export default function HeroSection() {
  // defining a functional component named HeroSection
  return (
    // returning JSX
    <section className=" md:py-20 py-10 bg-gradient-to-r from gray-00 to bg-gray-200 space-y-10">
      {" "}
      {/* section element with custom classes */}
      <div className=" container mx-auto text-center">
        {" "}
        {/* container and text-center classes are used for centering the content */}
        <div
          className=" text-6xl flex justify-center font-bold md:px-20 pb-10 
             text-gradient bg-gradient-to-r from-blue-500 to bg-pink-300 bg-clip-text text-transparent" // div with multiple classes for text customization
        >
          Build a brand and start selling in seconds
        </div>{" "}
        {/* heading text */}
        <p className="text-blue-500 font-bold text-xl">
          {" "}
          {/* paragraph text with classes for customization */}
          Software Company | Web Developer | High Quality Code & Design.
        </p>
        <p className=" text-lg md:text-xl bg-gradient-to-r from-black to bg-gray-400 bg-clip-text text-transparent font-bold p-4">
          {" "}
          {/* paragraph text with classes for customization */}
          No matter what you sell, Faizi Tech has everthing you need to run your
          online store
        </p>
        <div className=" flex gap-4 justify-center pt-2">
          {" "}
          {/* div for buttons with classes for customization */}
          <button className=" bg-blue-500 text-white px-10 py-4 rounded-md text-lg font-bold">
            Get Started
          </button>{" "}
          {/* button element with classes for customization */}
          <button className=" bg-gradient-to-r from-pink-600 to bg-purple-500 text-white px-10 py-4 rounded-md text-lg font-bold">
            Learn More
          </button>{" "}
          {/* button element with classes for customization */}
        </div>
        <div className=" pt-6">
          {" "}
          {/* div for video with classes for customization */}
          <video
            src="/content/video1.mp4"
            autoPlay
            muted
            loop
            className=" rounded-xl"
          ></video>{" "}
          {/* video element with classes for customization */}
        </div>
      </div>
    </section>
  );
}
