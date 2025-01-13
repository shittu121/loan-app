"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function LoanHeroAutoplay() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }) // Slower transition for readability
  );

  // Images with associated text content
  const slides = [
    {
      src: "/images/loan5.jpg",
      heading: "Secure Your Future with Easy Loans",
      description: "Access quick and reliable loan services tailored to your needs.",
      buttonText: "Get Started",
      buttonLink: "/apply",
    },
    {
      src: "/images/loan1.jpg",
      heading: "Flexible Repayment Options",
      description: "Enjoy stress-free repayments with our flexible loan plans.",
      buttonText: "Learn More",
      buttonLink: "/repayment",
    },
    {
      src: "/images/loan2.jpg",
      heading: "Fast Approval Process",
      description: "Get approved for a loan in minutes, not days.",
      buttonText: "Apply Now",
      buttonLink: "/approval",
    },
    {
      src: "/images/loan3.jpg",
      heading: "Low Interest Rates",
      description: "Benefit from competitive interest rates on all loan types.",
      buttonText: "Check Rates",
      buttonLink: "/rates",
    },
    {
      src: "/images/loan4.jpg",
      heading: "Loans for Every Need",
      description: "Whether personal or business, we have a loan for you.",
      buttonText: "Explore Loans",
      buttonLink: "/products",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-[80vh] lg:h-screen md:h-screen relative"
    >
      <CarouselContent
        onMouseEnter={() => plugin.current.stop()}  // Pause on hover
        onMouseLeave={() => plugin.current.play()} // Resume on leave
      >
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-[80vh] lg:h-screen md:h-screen">
              {/* Background Image */}
              <Image
                src={slide.src}
                alt={`Hero Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority
                className="brightness-75"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 lg:px-20">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md">
                  {slide.heading}
                </h2>
                <p className="mt-4 text-lg md:text-xl text-white max-w-2xl drop-shadow-md">
                  {slide.description}
                </p>
                <Link href={slide.buttonLink}>
                  <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-md shadow-lg transition-transform transform hover:scale-105">
                    {slide.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Buttons */}
      <CarouselPrevious className="absolute p-5 left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70" />
      <CarouselNext className="absolute p-5 right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70" />
    </Carousel>
  );
}
