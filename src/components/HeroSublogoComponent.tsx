import React from 'react'
import Image from 'next/image'

// Define props to make the component reusable
interface HeroSublogoProps {
  src: string
  width: number
  height: number
  heading: string
  subheading: string
}

export const HeroSublogoComponent: React.FC<HeroSublogoProps> = ({
  src,
  width,
  height,
  heading,
  subheading,
}) => {
  return (
    <div className="flex gap-2 items-center border-none lg:border-r lg:border-r-gray-400 p-5 lg:p-10">
      <Image src={src} width={width} height={height} alt={subheading} className='w-10 h-10 lg:w-20 lg:h-20' />
      <div className="lg:flex-shrink-0">
        <h1 className="text-xl lg:text-3xl md:text-3xl font-bold">{heading}</h1>
        <h2 className="text-lg lg:text-2xl md:text-2xl text-accent-foreground">{subheading}</h2>
      </div>
    </div>
  )
}
