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
      description: "I am a full-stack developer with a passion for building beautiful and functional applications.",
      image: "/images/loan1.jpg",
      rotate: "x",
      subtitle: "Software Engineer",
      title: "Bibek Bhattarai",
    },
    {
      description: "I am a full-stack developer with a passion for building beautiful and functional applications.",
      image: "/images/loan2.jpg",
      rotate: "x",
      subtitle: "Loan2",
      title: "Bibek Bhattarai",
    },
    {
      description: "I am a full-stack developer with a passion for building beautiful and functional applications.",
      image: "/images/loan3.jpg",
      rotate: "x",
      subtitle: "Loan3",
      title: "Bibek Bhattarai",
    },
    {
      description: "I am a full-stack developer with a passion for building beautiful and functional applications.",
      image: "/images/loan4.jpg",
      rotate: "x",
      subtitle: "Loan5",
      title: "Bibek Bhattarai",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-auto overflow-hidden"
    >
      <CarouselContent>
        {flipCards.map((card, index) => (
          <CarouselItem
            key={index}
            className="px-2 basis-full lg:basis-1/3 md:basis-2/4" // 1 on small, 3 on large
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
