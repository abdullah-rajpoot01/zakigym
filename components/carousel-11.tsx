"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/gym/pexels-alexapopovich-10551491.jpg",
  "/gym/pexels-mamadvali-17706035.jpg",
  "gym/pexels-mamadvali-17706038.jpg",
  "/gym/pexels-tima-miroshnichenko-5327495.jpg",
  "/gym/pexels-tima-miroshnichenko-5327502.jpg",
];

export default function SlideScale() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [imageHovered, setImageHovered] = React.useState(false)
  console.log("current :", current);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

    React.useEffect(() => {
        if (!api) return;

        const interval = setInterval(() => {
            // Pause autoplay while hovered
            if (imageHovered) return;

            if (api.canScrollNext()) {
                api.scrollNext();
            } else {
                api.scrollTo(0);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [api, imageHovered]); // include imageHovered


  return (
    <div className="mx-auto max-w-[90%] py-20">
      <Carousel
        className="w-full "
        opts={{ loop: true }}
        setApi={setApi}
      >
        <CarouselContent className="py-3">
          {images.map((image, index) => (
            <CarouselItem
              className={cn("aspect-2/3  md:basis-[50%] lg:basis-1/3", {})}
              key={image} onMouseEnter={() => setImageHovered(true)}
                            onMouseLeave={() => setImageHovered(false)}
            >
              <img
                alt="dddepth-248"
                className={cn(
                  "size-full object-cover transition-transform",
                  // {
                  //   "scale-[0.6]": index !== current - 1,
                  // }
                )}
                src={image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">

        <CarouselPrevious />
        <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
