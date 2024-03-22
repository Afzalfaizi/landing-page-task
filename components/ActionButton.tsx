import React from "react";
import { Button } from "./ui/button"; // importing the Button component
import { AlignJustify } from "lucide-react"; // importing the AlignJustify icon
import Link from "next/link"; // importing the Link component

// importing the Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger components
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// defining the ActionButton component
export default function ActionButton() {
  return (
    <div>
      {/* rendering the Sheet component only on small screens */}
      <div className=" md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />{" "}
            {/* rendering the AlignJustify icon as the trigger for the Sheet component */}
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                {/* rendering a list of links */}
                <div className=" flex flex-col space-y-4 w-full text-lg text-black mt-10">
                  <Link href={`/`}>Sign in</Link>
                  <Link href={`/`}>Features</Link>
                  <Link href={`/`}>Pricing</Link>
                  <Link href={`/`}>Contact</Link>
                  <Link href={`/`}>About</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      {/* rendering the Sign in and Get Started buttons on larger screens */}
      <div className=" hidden md:flex md:space-x-4">
        <button className=" text-md">Sign in</button>
        <button className=" text-md bg-blue-500 rounded p-2">
          Get Started
        </button>
      </div>
    </div>
  );
}
