import NavBar from "@/components/NavBar";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Carousel from "@/components/ui/carousel";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import PriceSection from "@/components/PriceSection";
export default function Home() {
  return (
   <div>
    <NavBar/>
    <HeroSection/>
    <Carousel/>
    <SecondSection/>
    <ThirdSection/>
    <PriceSection/>
   </div>
  );
}
