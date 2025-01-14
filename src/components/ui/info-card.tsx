"use client";
import React from "react";
import Image from "next/image";

interface InfoCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center max-w-sm">
      {/* Image */}
      <div className="flex justify-center mb-4">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={60}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

      {/* Description */}
      <p className="mt-2 text-gray-600 text-sm">{description}</p>

      {/* Button */}
      <button
        onClick={onButtonClick}
        className="mt-4 px-4 py-2 border border-indigo-500 text-indigo-500 rounded hover:bg-indigo-500 hover:text-white transition"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default InfoCard;
