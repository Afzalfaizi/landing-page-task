import React from "react";
import Bar from "./Bar";
import Logo from "./Logo";
import ActionButton from "./ActionButton";

export default function NavBar() {
  return (
    <div className=" flex justify-between items-center px-10 border-b">
      <Logo />
      <Bar />
      <ActionButton />
    </div>
  );
}
