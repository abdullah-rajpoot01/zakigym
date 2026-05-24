import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative w-full flex min-h-screen items-center justify-center overflow-hidden px-6">
      <AnimatedGridPattern
        className={cn(
          "mask-[radial-gradient(600px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full w-full skew-y-12"
        )}
        duration={3}
        maxOpacity={0.1}
        numSquares={30}
      />
      <div className="relative z-10 max-w-4xl text-center">
        {/* <Badge
          asChild
          className="rounded-full border-border py-1"
          variant="secondary"
        >
          <div>
            Fat to Fit <ArrowUpRight className="ml-1 size-4" />
          </div>
        </Badge> */}
        <h1 className="mx-auto mt-6 max-w-full font-medium text-4xl tracking-[-0.04em] sm:text-[2.75rem] md:text-6xl/[1.2]">
          Zaki Gym – Best Unisex Fitness Center for Men & Women in Khanewal
        </h1>
        <p className="mx-auto mt-6 max-w-full text-muted-foreground text-xl md:text-2xl/normal">
          Zaki Gym in Khanewal offers a safe and modern fitness space for both men and women. With separate areas, expert trainers, and affordable plans, it's the perfect place for cardio, strength training, and weight loss. Join now to start your fitness journey!
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button className="rounded-full" size="lg">
            Get Started <ArrowUpRight className="h-5! w-5!" />
          </Button>
          <Button
            className="rounded-full shadow-none"
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
