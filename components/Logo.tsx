import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image src="/images/logo1.svg" alt="Logo" height={100} width={100} />
    </div>
  );
}
