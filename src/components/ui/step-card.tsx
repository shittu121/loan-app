"use client";
import React from "react";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ stepNumber, title, description }) => {
  return (
    <div className="relative bg-white border w-full h-full lg:w-80 lg:h-44 md:w-80 md:h-44 border-gray-200 rounded-lg shadow-md p-6 text-center">
      {/* Number Circle */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-2 border-indigo-400 flex items-center justify-center bg-white">
        <span className="text-indigo-500 font-medium">{stepNumber}</span>
      </div>

      {/* Title */}
      <h3 className="mt-6 text-lg font-semibold text-gray-900">{title}</h3>

      {/* Description */}
      <p className="mt-2 text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default StepCard;
