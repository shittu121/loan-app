"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function LoanHeroAutoplay() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }) // Smooth transition
  );

  const images = [
    "/images/loan5.jpg",
    "/images/loan1.jpg",
    "/images/loan2.jpg",
    "/images/loan3.jpg",
    "/images/loan4.jpg",
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-screen relative"
    >
      <CarouselContent
        onMouseEnter={() => plugin.current.reset()}  // Pause on hover
        onMouseLeave={() => plugin.current.reset()} // Resume on mouse leave
      >
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-[80vh] lg:h-screen">
              <Image
                src={src}
                alt={`Hero Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority
                className="brightness-90"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute p-5 left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70" />
      <CarouselNext className="absolute p-5 right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70" />
    </Carousel>
  );
}
