import React from "react";
import { NavigationMenuBar } from "./Bar";
import Logo from "./Logo";
import ActionButton from "./ActionButton";

export default function NavBar() {
  return (
    <div className=" flex justify-between items-center px-10 border-b h-36">
      <Logo />
      <NavigationMenuBar/>
      <ActionButton />
    </div>
  );
}
