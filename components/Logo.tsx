import React from "react"; // importing the React library
import Image from "next/image"; // importing the Image component from Next.js

// defining a functional component called Logo
export default function Logo() {
  return (
    <div>
      {" "}
      {/* using the Image component from Next.js to display an image with alt text
      and setting it as fluid so that it scales according to screen size that
      acts as a container for the logo image that will contain our logo image */}
      <Image
        src="/images/logo1.svg" // specifying the source of the image
        alt="Logo" // providing alternative text for the image
        height={150} // setting the height of the image
        width={150} // setting the width of the image
      />
    </div>
  );
}
