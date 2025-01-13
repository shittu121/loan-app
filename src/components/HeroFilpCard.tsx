"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import FlipCard from "./ui/flip-card";

export const HeroFlipCard = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const flipCards = [
    {
      description: "Access quick and reliable loan services tailored to your needs.",
      image: "/images/loan5.jpg",
      subtitle: "Secure Your Future with Easy Loans",
      title: "Secure Easy Loans",
    },
    {
      description: "Enjoy stress-free repayments with our flexible loan plans.",
      image: "/images/loan1.jpg",
      subtitle: "Flexible Repayment Options",
      title: "Flexible Repayment Options",
    },
    {
      description: "Get approved for a loan in minutes, not days.",
      image: "/images/loan2.jpg",
      subtitle: "Fast Approval Process",
      title: "Fast Approval Process",
    },
    {
      description: "Benefit from competitive interest rates on all loan types.",
      image: "/images/loan3.jpg",
      subtitle: "Low Interest Rates",
      title: "Low Interest Rates",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-auto overflow-x-hidden"
    >
      <CarouselContent>
        {flipCards.map((card, index) => (
          <CarouselItem
            key={index}
            className="px-2 basis-full lg:basis-1/3 overflow-hidden" // 1 on small, 3 on large
          >
            <div className="h-full flex justify-center items-center">
              <FlipCard
                description={card.description}
                image={card.image}
                rotate="x"
                subtitle={card.subtitle}
                title={card.title}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
