"use client";
import React from 'react'
import InfoCard from './ui/info-card'
export const WeHelp
 = () => {
  return (
    <div className='text-black flex justify-center items-center mt-28 px-4'>
        <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
              We are Here to Help You
            </h2>
            <p className="mt-4 text-lg md:text-xl max-w-[20rem] lg:max-w-2xl md:max-w-2xl mx-auto text-gray-800">
            We are dedicated to supporting you every step of the way. Whether you need financial solutions, expert guidance, or personalized assistance, our team is here to help you achieve your goals with ease and confidence.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-14 my-20 items-center bg-gray-50">
                <InfoCard
                  imageSrc="/images/apply.svg"  // Replace with your image path
                  imageAlt="Specialist Icon"
                  title="Dedicated Specialists"
                  description="Duis eget diam quis elit erdiet alidvolutp terdum tfansissim non intwesollis eu mauris."
                  buttonText="Get Appointment"
                  onButtonClick={() => alert("Get Appointment!")}
                />

                <InfoCard
                  imageSrc="/images/callus.svg"  // Replace with your image path
                  imageAlt="Specialist Icon"
                  title="Success Stories Rating"
                  description="Duis eget diam quis elit erdiet alidvolutp terdum tfansissim non intwesollis eu mauris."
                  buttonText="Contact Us"
                  onButtonClick={() => alert("Contact Us!")}
                />

                <InfoCard
                  imageSrc="/images/advisor.svg"  // Replace with your image path
                  imageAlt="Specialist Icon"
                  title="No front Appraisal Fees!"
                  description="Duis eget diam quis elit erdiet alidvolutp terdum tfansissim non intwesollis eu mauris."
                  buttonText="Meet The Advisor"
                  onButtonClick={() => alert("Meet The Advisor!")}
                />
            </div>
        </div>
        
    </div>
  )
}
