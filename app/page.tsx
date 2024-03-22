import NavBar from "@/components/NavBar";
import Image from "next/image";
import HeroSection from "./hero-section/page";
import Carousel from "@/components/ui/carousel";

export default function Home() {
  return (
   <div>
    <NavBar/>
    <HeroSection/>
    <Carousel/>
   </div>
  );
}
