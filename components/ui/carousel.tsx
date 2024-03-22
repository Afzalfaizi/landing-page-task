"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// array of image objects with src and alt properties
const images = [
  { src: "/images/logo1.svg", alt: "Logo 1" },
  { src: "/images/logo2.svg", alt: "Logo 2" },
  { src: "/images/logo4.svg", alt: "Logo 4" },
  { src: "/images/logo5.svg", alt: "Logo 5" },
  { src: "/images/logo6.svg", alt: "Logo 6" },
  { src: "/images/logo7.svg", alt: "Logo 7" },
  { src: "/images/logo8.svg", alt: "Logo 8" },
  { src: "/images/logo9.svg", alt: "Logo 9" },
];

// Carousel component
export default function Carousel() {
  // setting up state for the current index of the image being displayed
  const [index, setIndex] = useState(0);

  // useEffect hook to set up an interval that will update the index state after every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 2000);

    // cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [index]);

  // returning the JSX for the Carousel component
  return (
    <div>
      {/* heading text */}
      <div className=" items-center justify-center flex text-3xl font-bold md:pb-10 px-10 mt-6 bg-gradient-to-r from-blue-500 to-pink-300 bg-clip-text text-transparent">
        More than 50+ brands have built their business with us!
      </div>
      {/* container for the image grid */}
      <div className=" grid grid-cols-3 p-4 md:flex">
        {/* AnimatePresence component to handle entering and exiting animations for the images */}
        <AnimatePresence custom={index}>
          {/* mapping over the images array and returning a motion.div for each image */}
          {images.map((image, i) => (
            <motion.div
              // key prop is necessary for animation to work because React needs a unique key value for each item in the list
              key={i}
              // initial animation when the component is first rendered
              initial={{ opacity: 0 }}
              // animate to the desired state based on the current index
              animate={{
                opacity: index === i ? 1 : 0.8,
                scale: index === i ? 1.2 : 1,
                transition: {
                  duration: 0.5,
                },
              }}
              // className for the div
              className=" flex items-center justify-center h-40 w-40"
              // exit animation when the component is unmounted
              exit={{ opacity: 0 }}
              // custom prop to pass to the AnimatePresence component
              custom={i}
              // transition prop for the opacity animation
              transition={{
                opacity: { duration: 0.5 },
              }}
            >
              {/* Next.js Image component for displaying the image */}
              <Image
                src={image.src}
                alt={image.alt}
                height={200}
                width={200}
                className=" object-contain h-20 w-20 items-center justify-center flex mx-auto"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
