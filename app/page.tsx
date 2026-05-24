import AboutFeatures from "@/components/about-features";
import SlideScale from "@/components/carousel-11";
import CTA from "@/components/cta";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
    <Hero/>
    <SlideScale/>
    <AboutFeatures/>
    <Features/>
    <Pricing/>
    <Testimonials/>
    <CTA/>
    </div>
  );
}
