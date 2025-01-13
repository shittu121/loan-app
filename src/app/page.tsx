import { HeroSection2 } from "@/components/HeroSection2";
import { HeroSublogo1, HeroSublogo2, HeroSublogo3, HeroSublogo4 } from "@/components/HeroSublogo";
import { LoanHeroAutoplay } from "@/components/LoanHeroAutoplay";

export default function Home() {
  return (
    <div>
      <LoanHeroAutoplay />
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-2 shadow-lg border-b -mt-32 lg:-mt-0 md:-mt-0">
        <HeroSublogo1 />
        <HeroSublogo2 />
        <HeroSublogo3 />
        <HeroSublogo4 />
      </div>
      <div className="mt-20">
        <HeroSection2 />
      </div>
    </div>
  );
}
