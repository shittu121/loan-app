import React from 'react'
import { HeroSublogoComponent } from './HeroSublogoComponent'

export const HeroSublogo1 = () => {
  return (
    <div>
        <HeroSublogoComponent 
        src="/images/mortgage.svg"
        width={80}
        height={100}
        heading="3.74%"
        subheading="Home Loans"
        />
    </div>
  )
}

export const HeroSublogo2 = () => {
    return (
      <div>
          <HeroSublogoComponent 
          src="/images/personalloan.svg"
          width={80}
          height={100}
          heading="8.96%"
          subheading="Personal Loans"
          />
      </div>
    )
}

export const HeroSublogo3 = () => {
    return (
      <div>
          <HeroSublogoComponent 
          src="/images/car.svg"
          width={80}
          height={100}
          heading="6.70%"
          subheading="Car Loans"
          />
      </div>
    )
}

export const HeroSublogo4 = () => {
    return (
      <div>
          <HeroSublogoComponent 
          src="/images/credit-card.svg"
          width={80}
          height={100}
          heading="9.00%"
          subheading="Credit card"
          />
      </div>
    )
}
  