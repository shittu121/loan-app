import { HeroSection2 } from "@/components/HeroSection2";
import { HeroSublogo1, HeroSublogo2, HeroSublogo3, HeroSublogo4 } from "@/components/HeroSublogo";
import { LoanHeroAutoplay } from "@/components/LoanHeroAutoplay";

export default function Home() {
  return (
    <div>
      <LoanHeroAutoplay />
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-2 shadow-lg border-b">
        <HeroSublogo1 />
        <HeroSublogo2 />
        <HeroSublogo3 />
        <HeroSublogo4 />
      </div>
      <div className="mt-0 lg:mt-20 overflow-hidden">
        <HeroSection2 />
      </div>
    </div>
  );
}
