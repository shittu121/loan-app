"use client";
import React from 'react'
import InfoCard from './ui/info-card'
export const WhyUS
 = () => {
  return (
    <div className='text-black flex justify-center items-center mt-28 px-4'>
        <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
             Why People Choose Us
            </h2>
            <p className="mt-4 text-lg md:text-xl max-w-[20rem] lg:max-w-2xl md:max-w-2xl mx-auto text-gray-800">
              We will match you with a loan program that meets your financial need. In short-term liquidity, by striving to make funds available to them <span className="font-semibold">within 24 hours of application</span>.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-14 my-20 items-center bg-gray-50">
                <InfoCard
                  imageSrc="/images/team.svg"  // Replace with your image path
                  imageAlt="Specialist Icon"
                  title="Dedicated Specialists"
                  description="Duis eget diam quis elit erdiet alidvolutp terdum tfansissim non intwesollis eu mauris."
                  buttonText="Meet the team"
                  onButtonClick={() => alert("Meet the team clicked!")}
                />

                <InfoCard
                  imageSrc="/images/success.svg"  // Replace with your image path
                  imageAlt="Specialist Icon"
                  title="Success Stories Rating"
                  description="Duis eget diam quis elit erdiet alidvolutp terdum tfansissim non intwesollis eu mauris."
                  buttonText="View Client Review"
                  onButtonClick={() => alert("View Client Review!")}
                />

                <InfoCard
                  imageSrc="/images/nofront.svg"  // Replace with your image path
                  imageAlt="Specialist Icon"
                  title="No front Appraisal Fees!"
                  description="Duis eget diam quis elit erdiet alidvolutp terdum tfansissim non intwesollis eu mauris."
                  buttonText="Why choose Us"
                  onButtonClick={() => alert("Why choose Us!")}
                />
            </div>
        </div>
        
    </div>
  )
}
