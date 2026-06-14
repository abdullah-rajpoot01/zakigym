import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative w-full flex py-10 items-center justify-center overflow-hidden px-6 bg-[url('https://images.pexels.com/photos/6796964/pexels-photo-6796964.jpeg')] bg-cover bg-center bg-fixed">

      <div className="relative z-10 max-w-4xl text-center px-5 md:p-0 ">

        <h1 className="mx-auto mt-6 max-w-full font-medium text-4xl tracking-[-0.04em] sm:text-[2.75rem] md:text-6xl/[1.2] text-background pt-10">
          Zaki Gym – Best Unisex Fitness Center for Men & Women in Khanewal
        </h1>
        <p className="mx-auto mt-6 max-w-full text-background/80 text-xl md:text-2xl/normal">
          Zaki Gym in Khanewal offers a safe and modern fitness space for both men and women. With separate areas, expert trainers, and affordable plans, it's the perfect place for cardio, strength training, and weight loss. Join now to start your fitness journey!
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Button className="rounded-full bg-background hover:bg-background text-foreground" size="lg">
            Get Started <ArrowUpRight className="h-5! w-5!" />
          </Button>
          <Button
            className="rounded-full shadow-none text-background "
            size="lg"
            variant="outline"
          >
            <CirclePlay className="h-5! w-5!" /> Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
