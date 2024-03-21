import React from "react";
import { Button } from "./ui/button";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function ActionButton() {
  return (
    <div>
      <div className=" md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
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
      <div className=" hidden md:flex md:space-x-4">
        <button className=" text-md">Sign in</button>
        <button className=" text-md bg-blue-500 rounded p-2">Get Started</button>
      </div>
    </div>
  );
}
