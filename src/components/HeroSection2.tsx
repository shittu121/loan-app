import React from 'react'
import { HeroFlipCard } from './HeroFilpCard'

export const HeroSection2 = () => {
  return (
    <div className="text-black flex justify-center items-center mt-20 px-4">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
          Find Loan Products We Offer
        </h2>
        <p className="mt-4 text-lg md:text-xl max-w-[20rem] lg:max-w-2xl md:max-w-2xl mx-auto text-gray-800">
          We will match you with a loan program that meets your financial need. In short-term liquidity, by striving to make funds available to them <span className="font-semibold">within 24 hours of application</span>.
        </p>
        <div className="mt-16 lg:mt-24">
          <HeroFlipCard />
        </div>
      </div>
    </div>
  )
}
