import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image src="/images/logo1.svg" alt="Logo" height={150} width={150} />
    </div>
  );
}
