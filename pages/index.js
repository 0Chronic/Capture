import Image from "next/image";

import Hero from "@/pages/components/Hero";
import Slider from "./components/Slider";
import { SliderData } from "./components/SliderData";
import Instagram from "./components/Instagram";



export default function Home() {
  return (
   <div >
   <Hero heading='Captur Photography ' message='I capture moments in nature and keep them alive.' ></Hero>
   <Slider slides={SliderData} />
   <Instagram />
   <h1>hello</h1>
   </div>
  );
}
