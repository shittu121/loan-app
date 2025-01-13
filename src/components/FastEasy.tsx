import React from 'react'
import StepCard from './ui/step-card'
import Link from 'next/link'
export const FastEasy
 = () => {
  return (
    <div className='text-black flex justify-center items-center mt-28 px-4'>
        <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
              Find Loan Products We Offer
            </h2>
            <p className="mt-4 text-lg md:text-xl max-w-[20rem] lg:max-w-2xl md:max-w-2xl mx-auto text-gray-800">
              We will match you with a loan program that meets your financial need. In short-term liquidity, by striving to make funds available to them <span className="font-semibold">within 24 hours of application</span>.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-14 my-20 items-center bg-gray-50">
                <StepCard
                  stepNumber={1}
                  title="Choose Loan Amount"
                  description="Suspendisse accumsan imperdue ligula dignissim sit amet vestibulum in mollis ef felis."
                />
                <StepCard
                  stepNumber={2}
                  title="Approved Your Loan"
                  description="Suspendisse accumsan imperdue ligula dignissim sit amet vestibulum in mollis ef felis."
                />
                <StepCard
                  stepNumber={3}
                  title="Get Your Cash"
                  description="Suspendisse accumsan imperdue ligula dignissim sit amet vestibulum in mollis ef felis."
                />
           </div>
           <Link href="/" className='border bg-[#4e3ccc] mx-auto min-h-screen text-white text-lg font-semibold p-3 px-5 hover:bg-[#624bff] hover:text-white rounded-md'> <button>Join now</button> </Link>
        </div>
        
    </div>
  )
}
